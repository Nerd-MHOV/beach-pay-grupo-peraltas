"use server";

import db from "@/core/infra/db";
import { verifySession } from "@/lib/session";
import { Address, Member } from "@prisma/client";
import { revalidateTag, unstable_cache } from "next/cache";

const cachedMembers = unstable_cache(
  async (userId: string, props?: {
    teacher?: boolean;
    student?: boolean;
  }) => {
    const user = await db.user.findFirst({ where: { id: userId } });
    if (!user) {
      return [];
    }
    return await db.member.findMany({
      orderBy: {
        name: "asc",
      },
      where: {
        ...(props?.teacher ? {
          is_teacher: true,
        } : {}),
        ...(props?.student ? {
          is_student: true,
        } : {})
      },
      include: {
        ...(props?.teacher ? {
          user: { omit: { passwd: true } }
        } : {}),
        address: true,
        lesson_attendance: {
          include: {
            lesson: true,
          }
        },
        investments: {
          where: {
            investment_type: {
              can_see: {
                has: user.role,
              },
            },
          },
          include: {
            investment_type: true,
          },
          orderBy: {
            date: "desc",
          },
        },
      },
    });
  },
  ["members"],
  {
    tags: [
      "create-member",
      "update-member",
      "delete-member",
      "create-investment",
      "update-investment",
      "delete-investment",
      "update-lesson", // for lessonAttendance
    ],
  }
);

export async function getMembers(props?: {
  teacher?: boolean;
  student?: boolean;
}) {
  const session = await verifySession();
  return await cachedMembers(session?.userId || "", props);
}

export async function getMemberById(id: string) {
  const session = await verifySession();
  const user = await db.user.findFirst({ where: { id: session?.userId } });
  if (!user) {
    return null;
  }
  return await db.member.findFirst({
    where: { id },
    include: {
      address: true,
      user: true,
      lesson: true,
      lesson_attendance: {
        include: {
          lesson: {
            include: {
              teacher: true,
            },
          },
        },
      },
      investments: {
        where: {
          investment_type: {
            can_see: {
              has: user.role,
            },
          },
        },
        include: {
          athlete: true,
          investment_tournament: {
            include: {
              pair: true,
              tournament: {
                include: {
                  arena: true,
                },
              },
              investments: {
                include: {
                  investment_type: true,
                },
              },
            },
          },
          investment_type: true,
        },
      },
      investment_tournament_athlete: {
        include: {
          athlete: true,
          pair: true,
          tournament: {
            include: {
              arena: true,
            },
          },
          investments: {
            include: {
              investment_type: true,
            },
          },
        },
      },
      teacher_availability: {
        include: {
          lessons: true,
        }
      },
    },
  });
}

export async function createMember(
  data: Omit<Member & {
    address: Omit<Address, "id" | "created_at" | "updated_at">,
    teacher_user_id?: string | null,
  }, "id" | "created_at" | "updated_at" | "address_id">
) {
  const { teacher_user_id, ...rest } = data;
  const member = await db.member.create({
    data: {
      ...rest,

      ...(teacher_user_id && rest.is_teacher ? {
        user: {
          connect: {
            id: teacher_user_id,
          }
        }
      } : {}),

      address: {
        create: {
          ...rest.address,
        }
      }
    }
  });
  revalidateTag("update-user");
  revalidateTag("create-member");
  return member;
}

export async function updateMember(
  data: Omit<Member & {
    address: Omit<Address, "created_at" | "updated_at">,
    teacher_user_id?: string | null,
  }, "created_at" | "updated_at" | "address_id">
) {
  const { teacher_user_id, ...rest } = data;
  console.log("data", data);
  const member = await db.member.update({
    where: { id: data.id },
    data: {
      ...rest,
      updated_at: new Date(),

      ...(teacher_user_id && rest.is_teacher ? {
        user: {
          connect: {
            id: teacher_user_id,
          }
        }
      } : {}),

      ...(rest.address.id ? {
        address: {
          update: {
            ...rest.address,
            updated_at: new Date(),
          }
        }
      } : {
        address: {
          create: {
            ...rest.address,
          }
        }
      }),
    },
  })
  revalidateTag("update-user");
  revalidateTag("update-member");
  return member;
}

export async function deleteMember(id: string) {
  const member = await db.member.delete({
    where: { id },
  });
  if (member.address_id) await db.address.delete({
    where: { id: member.address_id },
  });
  revalidateTag("delete-member");
  return member;
}


export async function getTeachers() {
  const teachers = await db.member.findMany({
    where: {
      is_teacher: true,
    },
  })
  return teachers;
}