"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { deleteLesson, getLessonById } from "./actions";

const DialogDeleteLessonCalendar = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const { data: lesson, isPending } = useQuery({
    queryKey: ["lesson", id],
    queryFn: async () => await getLessonById(id),
  });
  if (isPending) return;

  const has_attempts = (lesson?.attendances?.length || 0) > 0;

  const onDelete = async () => {
    try {
      await deleteLesson(id);
      toast({
        title: "Aula Excluida!",
        description: "Aula foi apagada.",
      });
    } catch (error) {
      toast({
        title: "Erro ao deletar aula",
        description: "Ocorreu um erro ao tentar deletar a aula.",
        variant: "destructive",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-red-200 text-red-800 hover:bg-red-300"
        >
          <Trash2 />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deseja deletar a Aula?</DialogTitle>
          <DialogDescription>
            {has_attempts && (
              <p className="p-2 text-red-400 bg-zinc-100 border-red-300 border rounded-md my-2">
                <b>Atenção</b> impossivel deletar a aula, pois existem
                <b> alunos </b> cadastrados!
              </p>
            )}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              variant="destructive"
              disabled={has_attempts}
              onClick={onDelete}
            >
              Deletar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDeleteLessonCalendar;
