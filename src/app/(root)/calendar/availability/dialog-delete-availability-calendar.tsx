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
import { deleteAvailability, getAvailabilityById } from "./actions";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

const DialogDeleteAvailabilityCalendar = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const { data: availability, isPending } = useQuery({
    queryKey: ["availability", id],
    queryFn: async () => await getAvailabilityById(id),
  });
  if (isPending) return;

  const has_lessons = (availability?.lessons?.length || 0) > 0;

  const onDelete = async () => {
    try {
      await deleteAvailability(id);
      toast({
        title: "Disponibilidade Excluida!",
        description: "Professor não está mais disponível neste período.",
      });
    } catch (error) {
      toast({
        title: "Erro ao deletar disponibilidade",
        description: "Ocorreu um erro ao tentar deletar a disponibilidade.",
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
          <Trash2 /> Excluir
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Deseja deletar a Disponibilidade ?</DialogTitle>
          <DialogDescription>
            {has_lessons && (
              <p className="p-2 text-red-400 bg-zinc-100 border-red-300 border rounded-md my-2">
                <b>Atenção</b> impossivel deletar a disponibilidade, pois
                existem
                <b> aulas </b> cadastradas para este período!
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
              disabled={has_lessons}
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

export default DialogDeleteAvailabilityCalendar;
