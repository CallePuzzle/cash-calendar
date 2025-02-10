"use client";
import { useState } from "react";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import "@/app/styles/components/calendar.scss";

export function Calendar() {
  const [selected, setSelected] = useState<Date>();
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      mode="single"
      classNames={{
        day: `${defaultClassNames.day} md:text-5xl`,
        weekdays: `${defaultClassNames.weekdays} md:text-5xl`,
        caption_label: `${defaultClassNames.caption_label} md:text-4xl`,
        footer: `${defaultClassNames.footer} md:text-3xl lg:text-xl`,
      }}
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
