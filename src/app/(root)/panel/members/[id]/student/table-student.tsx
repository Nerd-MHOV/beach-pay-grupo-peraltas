import { DataTable } from "@/components/ui/data-table";
import React from "react";
import { columns, StatusLessonColumns, StudentColumns } from "./columns";
import { getMemberById } from "../../actions";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { reasonOptions } from "@/app/(root)/calendar/lesson/reason-options";

type StudentParamTable = NonNullable<Awaited<ReturnType<typeof getMemberById>>>;

const getStatusLesson = (
  lesson: StudentParamTable["lesson_attendance"][number]
) => {
  if (lesson.lesson.status === "completed" && lesson.did_attend) {
    return "Feita";
  }
  if (lesson.lesson.status === "scheduled") {
    return "Agendada";
  }
  if (!lesson.did_attend && lesson.reason === "no_justification") {
    return "Sem Justificativa";
  }
  if (!lesson.did_attend && lesson.reason !== "no_justification") {
    return "Com Justificativa";
  }
  return "Indefinido";
};
const TableStudents = ({
  member,
  filter,
}: {
  member: StudentParamTable;
  filter?: StatusLessonColumns;
}) => {
  const data = member.lesson_attendance
    .map((lesson): StudentColumns => {
      return {
        id: lesson.id,
        status: getStatusLesson(lesson),
        time_start: `${format(lesson.lesson.time_start, "dd MMM, y", {
          locale: ptBR,
        })}
      - ${format(lesson.lesson.time_start, "HH:mm")}`,
        teacher: {
          name: lesson.lesson.teacher.name,
        },
        tier: lesson.lesson.tier,
        reson:
          reasonOptions.find((option) => option.value === lesson.reason)
            ?.label || "",
        lesson: lesson.lesson,
      };
    })
    .filter((lesson) => (filter ? lesson.status === filter : true));
  return (
    <div className="bg-white p-7 rounded-xl shadow-lg overflow-auto">
      <DataTable
        columns={columns}
        pdfTitle={`Aulas - ${member.name}`}
        data={data}
      />
    </div>
  );
};

export default TableStudents;
