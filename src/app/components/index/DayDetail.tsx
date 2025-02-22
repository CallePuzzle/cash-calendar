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
        category: "bares y restaurantes",
        bgColorClass: "bg-[#11732e]",
        image: "dumbbell",
      },
      {
        id: 2,
        name: "camiseta",
        quantity: 20,
        category: "ropa",
        bgColorClass: "bg-[#d269c9]",
        image: "camera",
      },
    ],
    "4/2/2025": [
      {
        id: 3,
        name: "comida",
        quantity: 50,
        category: "bares y restaurantes",
        bgColorClass: "bg-[#11732e]",
        image: "dumbbell",
      },
      {
        id: 4,
        name: "pantalon",
        quantity: 35,
        category: "ropa",
        bgColorClass: "bg-[#d269c9]",
        image: "dumbbell",
      },
    ],
    "20/2/2025": [
      {
        id: 5,
        name: "brookling",
        quantity: 64,
        category: "deporte",
        bgColorClass: "bg-[#f1a009]",
        image: "dumbbell",
      },
      {
        id: 6,
        name: "medicamentos",
        quantity: 57.48,
        category: "farmacia",
        bgColorClass: "bg-[#0bc90b]",
        image: "dumbbell",
      },
      {
        id: 7,
        name: "gasolina",
        quantity: 38.93,
        category: "vehículo",
        bgColorClass: "bg-[#ff2828]",
        image: "dumbbell",
      },
      {
        id: 8,
        name: "brookling",
        quantity: 64,
        category: "deporte",
        bgColorClass: "bg-[#f1a009]",
        image: "dumbbell",
      },
      {
        id: 9,
        name: "medicamentos",
        quantity: 57.48,
        category: "farmacia",
        bgColorClass: "bg-[#0bc90b]",
        image: "dumbbell",
      },
      {
        id: 10,
        name: "gasolina",
        quantity: 38.93,
        category: "vehículo",
        bgColorClass: "bg-[#ff2828]",
        image: "dumbbell",
      },
      {
        id: 11,
        name: "brookling",
        quantity: 64,
        category: "deporte",
        bgColorClass: "bg-[#f1a009]",
        image: "dumbbell",
      },
      {
        id: 12,
        name: "medicamentos",
        quantity: 57.48,
        category: "farmacia",
        bgColorClass: "bg-[#0bc90b]",
        image: "dumbbell",
      },
      {
        id: 13,
        name: "gasolina",
        quantity: 38.93,
        category: "vehículo",
        bgColorClass: "bg-[#ff2828]",
        image: "dumbbell",
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
    <ul className="bg-gray-100 h-full w-full flex flex-col items-center justify-center pt-8 pb-8">
      {selectedDay ? (
        <li className="bg-gray-300 m-px p-2 rounded-lg font-semibold text-2xl w-[80%] text-center md:w-[50%] lg:w-[70%]">
          Día seleccionado: {selectedDayToString}
        </li>
      ) : (
        <li className="bg-gray-300 m-px p-2 rounded-lg font-semibold w-[80%] text-center md:w-[50%] md:text-lg lg:w-[70%]">
          Selecciona un día
        </li>
      )}
      {expensesElement}

      {selectedDayToString && expensesElement.length === 0 ? (
        <li className="bg-blue-300 m-px p-2 rounded-lg font-semibold w-[80%] text-center md:w-[50%] md:text-lg lg:w-[70%]">
          Hoy no he generado ningún gasto
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}

export default DayDetail;
