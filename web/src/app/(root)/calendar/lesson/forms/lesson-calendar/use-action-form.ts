import { Lesson } from "@prisma/client";
import { createLesson, updateLesson } from "../../actions";
import { useToast } from "@/hooks/use-toast";


export const useActionForm = () => {
  const { toast } = useToast();
  const createLessonFn = async (
    data: Omit<
      Lesson,
      | "id"
      | "created_at"
      | "updated_at"
      | "status"
      | "cancellation_reason"
      | "observation"
    > & {
      attendances_object: {
        id: string;
        replacement: string | null;
      }[];
    },
    onCreate?: () => void
  ) => {
    try {
      await createLesson(data);
      toast({
        title: "Aula criada com sucesso!",
        description: "A aula foi criada com sucesso.",
      });
      onCreate?.();
    } catch (error) {
      toast({
        title: "Erro ao criar aula",
        description: "Ocorreu um erro ao criar a aula.",
        variant: "destructive",
      });
    }
  };

  const updateLessonFn = async (
    data: Omit<
      Lesson,
      | "created_at"
      | "updated_at"
      | "status"
      | "cancellation_reason"
      | "observation"
    > & {
      attendances_object: {
        id: string;
        replacement: string | null;
      }[];
    }
  ) => {
    try {
      await updateLesson(data);
      toast({
        title: "Aula atualizada com sucesso!",
        description: "A aula foi atualizada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao atualizar aula",
        description: "Ocorreu um erro ao atualizar a aula.",
        variant: "destructive",
      });
    }
  };

  return {
    createLessonFn,
    updateLessonFn,
  };
}