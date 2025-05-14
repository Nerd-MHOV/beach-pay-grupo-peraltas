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
  prev,
}: {
  id: string;
  title: string;
  prev?: React.ReactNode;
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="event-title flex items-center gap-2">
          {prev}
          {title}
        </div>
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
