import React from "react";

interface Expense {
  name: string;
  quantity: number;
  bgColorClass: string;
  category: string;
}

function Detail({ expense }: { expense: Expense }) {
  return (
    <li
      className={`${expense.bgColorClass} m-px p-3 rounded-lg flex flex-row gap-10 justify-between font-semibold w-[60%] md:w-[50%] md:text-lg lg:w-[70%]`}
    >
      <p>
        {expense.quantity}€ en {expense.name}
      </p>
      <p>{expense.category}</p>
    </li>
  );
}

export default Detail;
