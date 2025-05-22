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
import { RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { deleteLesson, updateLesson } from "../actions";

const DialogReopenLessonCalendar = ({
  id,
  onReopen,
}: {
  id: string;
  onReopen?: () => void;
}) => {
  const { toast } = useToast();

  const onClick = async () => {
    try {
      await updateLesson({ id, status: "scheduled" });
      toast({
        title: "Aula Reaberta!",
        description: "Aula foi reaberta com sucesso.",
      });
      onReopen?.();
    } catch (error) {
      toast({
        title: "Erro ao reabrir aula",
        description: "Ocorreu um erro ao tentar reabrir a aula.",
        variant: "destructive",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-slate-200 text-slate-800 hover:bg-slate-300"
        >
          <RotateCcw /> Reabrir
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deseja Reabrir a Aula?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={onClick}>Reabrir</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogReopenLessonCalendar;
