import {
  HoverCardContent,
  HoverCard,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { $Enums, Lesson, LessonAttendance, Member } from "@beach-pay/database";
import { Portal } from "@radix-ui/react-portal";
import { AlertTriangle } from "lucide-react";
import React from "react";

const AlertsMemberList = ({
  member,
  field,
}: {
  member: Member & {
    lesson_attendance: (LessonAttendance & {
      lesson: Lesson;
    })[];
  };
  field: {
    tier: $Enums.Tier;
  };
}) => {
  // ChangeColor Text
  let color = "text-yellow-600";
  const lessonsInThisMonth = member.lesson_attendance.filter(
    (lesson) =>
      new Date(lesson.lesson.time_start).getMonth() === new Date().getMonth() &&
      new Date(lesson.lesson.time_start).getFullYear() ===
        new Date().getFullYear(),
  ).length;
  const lessonAlert = member.class_amount - lessonsInThisMonth <= 0;
  if (lessonAlert) color = "text-red-600";

  // Check if show is true or false
  let show = false;
  if (member.tier !== field.tier || lessonAlert) show = true;

  return (
    <>
      {show && (
        <HoverCard>
          <HoverCardTrigger>
            <AlertTriangle className={`w-5 h-5 ${color}`} />
          </HoverCardTrigger>
          <Portal>
            <HoverCardContent>
              {lessonAlert && (
                <>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-sm font-bold">
                      Numero de Aulas - Atenção!
                    </h1>
                    <p className="text-sm">
                      Esse aluno já bateu a quantidade de aulas contratadas,
                      deste mês.
                    </p>
                    <span className="text-xs text-muted-foreground">
                      <b>Aulas Feitas {lessonsInThisMonth}</b>
                    </span>
                    <span className="text-xs text-muted-foreground">
                      <b>Aulas Contradas {member.class_amount} </b>
                    </span>
                  </div>

                  <Separator className="my-4" />
                </>
              )}

              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-bold">Classificação - Atenção!</h1>
                <p className="text-sm">
                  Você está adicionando um aluno que não está classificado para
                  essa aula.
                </p>
                <span className="text-xs text-muted-foreground">
                  <b>Aluno tier {member.tier} </b>
                </span>
              </div>
            </HoverCardContent>
          </Portal>
        </HoverCard>
      )}
    </>
  );
};

export default AlertsMemberList;
