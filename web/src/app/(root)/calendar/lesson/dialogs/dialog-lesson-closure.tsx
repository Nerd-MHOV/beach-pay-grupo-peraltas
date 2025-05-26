import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import FormLessonClosure from "../form-lesson-closure";
import { useQuery } from "@tanstack/react-query";
import { getLessonById } from "../actions";
import LoadingData from "@/components/LoadingData";

const DialogLessonClosure = ({
  id,
  onClosure,
}: {
  id: string;
  onClosure?: VoidFunction;
}) => {
  const { data: lesson, isPending } = useQuery({
    queryKey: ["lesson"],
    queryFn: async () => await getLessonById(id),
  });

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Encerrar Aula</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Fechamento</DialogTitle>
        </DialogHeader>
        {!lesson || isPending ? (
          <LoadingData message="buscando aula..." />
        ) : (
          <FormLessonClosure
            lesson={lesson}
            onClosure={() => {
              setIsOpen(false);
              onClosure?.();
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DialogLessonClosure;
