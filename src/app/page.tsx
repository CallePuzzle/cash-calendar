"use client";
import { useState } from "react";
import { Calendar } from "@/app/components/index/Calendar";
import DayDetail from "@/app/components/index/DayDetail";

export default function Index() {
  const [selectedDay, setSelectedDay] = useState<Date>();
  return (
    <section className="min-w-320 flex flex-col items-center justify-around lg:flex-row">
      <Calendar selected={selectedDay} setSelected={setSelectedDay} />
      <DayDetail selectedDay={selectedDay} />
    </section>
  );
}
