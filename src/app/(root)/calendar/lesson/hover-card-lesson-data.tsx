import React from "react";
import { getLessonById } from "./actions";
import { useQuery } from "@tanstack/react-query";
import LoadingData from "@/components/LoadingData";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";

const HoverCardLessonData = ({ id }: { id: string }) => {
  const { data: lesson, isFetching } = useQuery({
    queryKey: ["lesson", id],
    queryFn: async () => {
      const lesson = await getLessonById(id);
      return lesson;
    },
  });

  if (isFetching || !lesson) return <LoadingData />;
  return (
    <div>
      <Separator className="my-2" />
      <h2 className="font-bold text-md">
        {format(lesson.time_start, "HH:mm")} -{" "}
        {format(lesson.time_end, "HH:mm")} - {"  "} {lesson.tier}
      </h2>
      <div className="text-sm">
        <span className="font-bold">Professor:</span> {lesson.teacher.name}
      </div>
      <div className="text-sm">
        <span className="font-bold">Quadra:</span> {lesson.courts.name}
      </div>
      <div className="text-sm">
        <span className="font-bold">Alunos:</span>

        {lesson.attendances.map((attendance) => (
          <span key={attendance.id} className="block">
            {attendance.student.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HoverCardLessonData;
