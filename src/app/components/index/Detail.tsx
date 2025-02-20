import React from "react";

interface Expense {
  name: string;
  quantity: number;
  color: string;
  category: string;
}

function Detail({ expense }: { expense: Expense }) {
  const bgColor = `bg-[${expense.color}]`;
  return (
    <li className={`${bgColor} m-px p-px rounded-lg w-[60%] `}>
      <div className="p-3 flex flex-row gap-10 justify-between">
        <p>
          {expense.quantity}€ en {expense.name}
        </p>
        <p>{expense.category}</p>
      </div>
    </li>
  );
}

export default Detail;
