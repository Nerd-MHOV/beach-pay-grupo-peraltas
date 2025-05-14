import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Download } from "lucide-react";
import React from "react";
import { getLessons } from "./lesson/actions";
import { DateRange } from "react-day-picker";

const handleOnClick = async () => {
  /* eslint-disable @typescript-eslint/no-require-imports */
  const html2pdf = require("html2pdf.js");
  const element = document.getElementById("pdf-week-lessons-teacher");
  html2pdf(element, {
    margin: 10,
    filename: `horario-aulas.pdf`,
    jsPDF: {
      orientation: "landscape",
    },
  });
};

const weekString = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
const PDFWeekLessonsTeacher = ({
  dataLessons,
  dataDate,
}: {
  dataLessons: Awaited<ReturnType<typeof getLessons>>;
  dataDate: DateRange | undefined;
}) => {
  const times = [
    ...new Set(
      dataLessons.map((lesson) => {
        return format(lesson.time_start, "HH:mm", {
          locale: ptBR,
        });
      })
    ),
  ];

  if (dataLessons.length === 0) return;

  return (
    <div id="pdf-week-lessons-teacher">
      <div className="flex items-center justify-between">
        <div className="flex flex-col py-4">
          <h1 className=" text-2xl font-extrabold px-2">
            Horário de aulas: {dataLessons[0].teacher.name}
          </h1>
          <h2 className="text-lg px-2 font-bold">
            Aulas da semana: {dataDate?.from?.getDate()} à{" "}
            {dataDate?.to?.getDate()} de{" "}
            {format(dataDate?.to || new Date(), "LLL, y", {
              locale: ptBR,
            })}
          </h2>
        </div>
        <Button
          onClick={handleOnClick}
          variant={"ghost"}
          data-html2canvas-ignore
        >
          <Download /> PDF
        </Button>
      </div>

      <Table className="border-collapse border border-slate-200">
        <TableHeader>
          <TableRow className="bg-slate-200">
            <TableHead>Hora</TableHead>
            {weekString.map((day, index) => (
              <TableHead key={index} className="capitalize">
                {day}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {times.map((time, indexTime) => (
            <TableRow
              key={indexTime}
              className={indexTime % 2 === 0 ? "" : "bg-slate-50"}
            >
              <TableCell>{time}</TableCell>
              {weekString.map((day, indexDay) => {
                const lesson = dataLessons.find(
                  (lesson) =>
                    format(lesson.time_start, "HH:mm", {
                      locale: ptBR,
                    }) === time &&
                    new Date(lesson.time_start).getDay() === indexDay
                );
                if (lesson) {
                  return (
                    <TableCell
                      key={indexDay}
                      className="border-collapse border border-slate-200"
                    >
                      {lesson.attendances.map((student, indexStudent) => (
                        <div
                          key={`${lesson.time_start}-${indexStudent}`}
                          className="text-sm"
                        >
                          {student.student.name}
                        </div>
                      ))}
                    </TableCell>
                  );
                }
                return (
                  <TableCell
                    key={indexDay}
                    className="border-collapse border border-slate-200"
                  ></TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PDFWeekLessonsTeacher;
