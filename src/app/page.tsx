"use client";
import { useState } from "react";
import { Calendar } from "@/app/components/Calendar";
import DayDetail from "./components/DayDetail";

export default function Index() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  return (
    <section className="min-w-320 flex flex-col items-center justify-around lg:flex-row">
      <Calendar selected={selectedDay} setSelected={setSelectedDay} />
      <DayDetail selectedDay={selectedDay} />
    </section>
  );
}
