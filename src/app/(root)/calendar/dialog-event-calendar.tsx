import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import FormEventCalendar from "./form-event-calendar";
import { FormFieldProps, SetFormFieldProps } from "./calendar-client-component";

const DialogEventCalendar = ({
  open,
  setOpen,
  formFields,
  setFormFields,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formFields: FormFieldProps;
  setFormFields: SetFormFieldProps;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eventos</DialogTitle>
        </DialogHeader>
        <FormEventCalendar
          formFields={formFields}
          setFormFields={setFormFields}
        />
      </DialogContent>
    </Dialog>
  );
};

export default DialogEventCalendar;
