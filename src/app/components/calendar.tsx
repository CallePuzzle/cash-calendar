"use client";
import { useState } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "@/app/styles/components/calendar.scss";

export function Calendar() {
  const [selected, setSelected] = useState<Date>();
  // const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      mode="single"
      // classNames={{
      //   today: `border-red-500`, // Add a border to today's date
      //   selected: `bg-red-500 border-amber-500 text-white`, // Highlight the selected day
      //   root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
      //   chevron: `${defaultClassNames.chevron} fill-amber-500`, // Change the color of the chevron
      // }}
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
