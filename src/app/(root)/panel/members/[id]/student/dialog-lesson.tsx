import FormLessonCalendar from "@/app/(root)/calendar/lesson/form-lesson-calendar";
import LoadingData from "@/components/LoadingData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Lesson } from "@prisma/client";
import { DialogTrigger } from "@radix-ui/react-dialog";
import React, { Suspense } from "react";

const DialogLesson = ({
  lesson,
  trigger,
}: {
  lesson: Lesson;
  trigger: React.ReactNode;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[95vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Aula</DialogTitle>
        </DialogHeader>
        <Suspense fallback={<LoadingData />}>
          <FormLessonCalendar
            lesson={{
              id: lesson.id,
              teacher_id: lesson.teacher_id,
              date: {
                from: lesson.time_start,
                to: lesson.time_end,
              },
              court_id: lesson.courts_id,
              attendance: [],
              tier: lesson.tier,
              status: lesson.status,
            }}
            currentUserRole="operational"
          />
        </Suspense>
      </DialogContent>
    </Dialog>
  );
};

export default DialogLesson;
