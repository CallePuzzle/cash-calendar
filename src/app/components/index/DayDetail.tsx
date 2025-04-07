"use client";
import React from "react";
import Detail from "@/app/components/index/Detail";
import type { IconName } from "lucide-react/dynamic";

function getDayDetails(day: string) {
  const dailyExpenses = {
    "11/2/2025": [
      {
        id: 1,
        name: "cañas",
        quantity: 15,
        category: "bares y restaurantes",
        bgColorClass: "bg-[#11732e]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#11732e]",
        image: "utensils" as IconName,
      },
      {
        id: 2,
        name: "camiseta",
        quantity: 20,
        category: "ropa",
        bgColorClass: "bg-[#d269c9]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#d269c9]",
        image: "shirt" as IconName,
      },
    ],
    "4/2/2025": [
      {
        id: 3,
        name: "comida",
        quantity: 50,
        category: "bares y restaurantes",
        bgColorClass: "bg-[#11732e]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#11732e]",
        image: "utensils" as IconName,
      },
      {
        id: 4,
        name: "pantalon",
        quantity: 35,
        category: "ropa",
        bgColorClass: "bg-[#d269c9]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#d269c9]",
        image: "shirt" as IconName,
      },
    ],
    "20/2/2025": [
      {
        id: 5,
        name: "brookling",
        quantity: 64,
        category: "deporte",
        bgColorClass: "bg-[#f1a009]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#f1a009]",
        image: "biceps-flexed" as IconName,
      },
      {
        id: 6,
        name: "medicamentos",
        quantity: 57.48,
        category: "farmacia",
        bgColorClass: "bg-[#0bc90b]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#0bc90b]",
        image: "pill" as IconName,
      },
      {
        id: 7,
        name: "gasolina",
        quantity: 38.93,
        category: "vehículo",
        bgColorClass: "bg-[#ff2828]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#ff2828]",
        image: "car-front" as IconName,
      },
      {
        id: 8,
        name: "brookling",
        quantity: 64,
        category: "deporte",
        bgColorClass: "bg-[#f1a009]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#f1a009]",
        image: "biceps-flexed" as IconName,
      },
      {
        id: 9,
        name: "medicamentos",
        quantity: 57.48,
        category: "farmacia",
        bgColorClass: "bg-[#0bc90b]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#0bc90b]",
        image: "pill" as IconName,
      },
      {
        id: 10,
        name: "gasolina",
        quantity: 38.93,
        category: "vehículo",
        bgColorClass: "bg-[#ff2828]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#ff2828]",
        image: "car-front" as IconName,
      },
      {
        id: 11,
        name: "brookling",
        quantity: 64,
        category: "deporte",
        bgColorClass: "bg-[#f1a009]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#f1a009]",
        image: "biceps-flexed" as IconName,
      },
      {
        id: 12,
        name: "medicamentos",
        quantity: 57.48,
        category: "farmacia",
        bgColorClass: "bg-[#0bc90b]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#0bc90b]",
        image: "pill" as IconName,
      },
      {
        id: 13,
        name: "gasolina",
        quantity: 38.93,
        category: "vehículo",
        bgColorClass: "bg-[#ff2828]",
        hoverShadowColorClass: "hover:shadow-[0_3px_3px_#ff2828]",
        image: "car-front" as IconName,
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

  const liClassName =
    "bg-gray-300 m-px p-2 rounded-lg font-semibold text-2xl w-[80%] text-center md:w-[50%] lg:w-[70%]";
  return (
    <div className="h-full w-full mt-8">
      <ul className="bg-gray-100 h-full w-full flex flex-col items-center justify-center pt-8 pb-8">
        {selectedDay ? (
          <li className={liClassName}>
            Día seleccionado: {selectedDayToString}
          </li>
        ) : (
          <li className={liClassName}>Selecciona un día</li>
        )}
        {expensesElement}

        {selectedDayToString && expensesElement.length === 0 ? (
          <li className={liClassName}>Hoy no he generado ningún gasto</li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default DayDetail;
