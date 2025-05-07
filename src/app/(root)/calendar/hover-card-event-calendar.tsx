import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React from "react";
import { Portal } from "@radix-ui/react-portal";
import HoverCardLessonData from "./lesson/hover-card-lesson-data";

const HoverCardEventCalendar = ({
  id,
  title,
}: {
  id: string;
  title: string;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="event-title">{title}</div>
      </HoverCardTrigger>
      <Portal>
        <HoverCardContent className="" side="top">
          <h3 className="font-bold text-lg">{title}</h3>
          <HoverCardLessonData id={id} />
        </HoverCardContent>
      </Portal>
    </HoverCard>
  );
};

export default HoverCardEventCalendar;
