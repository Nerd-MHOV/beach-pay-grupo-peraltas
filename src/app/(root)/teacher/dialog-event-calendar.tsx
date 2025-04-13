import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import FormEventCalendar from "./form-event-calendar";

const DialogEventCalendar = ({
  open,
  setOpen,
  formSelected,
  setFormSelected,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formSelected: 'availability' | 'class' | 'tournament'
  setFormSelected: React.Dispatch<React.SetStateAction<'availability' | 'class' | 'tournament'>>
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eventos</DialogTitle>
        </DialogHeader>
        <FormEventCalendar formSelected={formSelected} setFormSelected={setFormSelected} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogEventCalendar;
