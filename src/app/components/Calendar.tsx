"use client";

import React from "react";

import { Calendar as CalendarUI } from "@/components/ui/calendar";

function Calendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <CalendarUI
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  );
}
export default Calendar;
