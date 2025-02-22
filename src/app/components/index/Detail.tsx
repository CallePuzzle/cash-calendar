import React from "react";

interface Expense {
  name: string;
  quantity: number;
  bgColorClass: string;
  category: string;
}

function Detail({ expense }: { expense: Expense }) {
  return (
    <li className="flex flex-row w-[80%] md:w-[50%] lg:w-[70%] bg-blue-200 justify-between">
      <div className="flex items-center justify-center w-[20%]">Icono</div>
      <div
        className={`${expense.bgColorClass} m-px p-3 rounded-lg flex flex-row gap-10 justify-between font-semibold w-[80%] md:text-lg`}
      >
        <p>
          {expense.quantity}€ en {expense.name}
        </p>
        <p>{expense.category}</p>
      </div>
    </li>
  );
}

export default Detail;
