"use client";
import React from "react";
import Detail from "@/app/components/Detail";

function getDayDetails(day: string) {
  const dailyExpenses = {
    "11/2/2025": [
      {
        id: 1,
        name: "cañas",
        quantity: 15,
        categoria: "bares y restaurantes",
      },
      {
        id: 2,
        name: "camiseta",
        quantity: 20,
        categoria: "ropa",
      },
    ],
    "4/2/2025": [
      {
        id: 3,
        name: "comida",
        quantity: 50,
        categoria: "bares y restaurantes",
      },
      {
        id: 4,
        name: "pantalon",
        quantity: 35,
        categoria: "ropa",
      },
    ],
  };

  if (day in dailyExpenses) {
    return dailyExpenses[day as keyof typeof dailyExpenses];
  }
  return [];
}

function DayDetail({ daySelected }: { daySelected: string }) {
  const expenses = getDayDetails(daySelected);
  const expensesElement = expenses.map((expense) => {
    return <Detail key={expense.id} expense={expense} />;
  });

  return (
    <ul>
      <p>Día seleccionado: {daySelected}</p>
      {expensesElement}
    </ul>
  );
}

export default DayDetail;
