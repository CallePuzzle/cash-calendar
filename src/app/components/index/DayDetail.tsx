"use client";
import React from "react";
import Detail from "@/app/components/index/Detail";

function getDayDetails(day: string) {
  const dailyExpenses = {
    "11/2/2025": [
      {
        id: 1,
        name: "cañas",
        quantity: 15,
        categoria: "bares y restaurantes",
        color: "rgb(17, 115, 46)",
      },
      {
        id: 2,
        name: "camiseta",
        quantity: 20,
        categoria: "ropa",
        color: "rgb(210, 105, 201)",
      },
    ],
    "4/2/2025": [
      {
        id: 3,
        name: "comida",
        quantity: 50,
        categoria: "bares y restaurantes",
        color: "rgb(17, 115, 46)",
      },
      {
        id: 4,
        name: "pantalon",
        quantity: 35,
        categoria: "ropa",
        color: "rgb(210, 105, 201)",
      },
    ],
  };

  if (day in dailyExpenses) {
    return dailyExpenses[day as keyof typeof dailyExpenses];
  }
  return [];
}
function getSelectedDayToString(selectedDate: Date | undefined) {
  if (selectedDate) {
    const dayStringyfied = selectedDate.getDate();

    const monthStringyfied = selectedDate.getMonth() + 1;

    const yearStringyfied = selectedDate.getFullYear();

    return `${dayStringyfied}/${monthStringyfied}/${yearStringyfied}`;
  } else {
    return "";
  }
}

function DayDetail({ selectedDay }: { selectedDay: Date | undefined }) {
  const selectedDayToString = getSelectedDayToString(selectedDay);

  const expenses = getDayDetails(selectedDayToString);

  const expensesElement = expenses.map((expense) => {
    return <Detail key={expense.id} expense={expense} />;
  });
  return (
    <ul className="bg-gray-100 h-full w-full flex flex-col items-center justify-center">
      {selectedDay
        ? `Día seleccionado: ${selectedDayToString}`
        : "Selecciona un día"}
      {expensesElement}
      <p>
        {selectedDayToString && expensesElement.length === 0
          ? "Hoy no he generado ningún gasto"
          : ""}
      </p>
    </ul>
  );
}

export default DayDetail;
