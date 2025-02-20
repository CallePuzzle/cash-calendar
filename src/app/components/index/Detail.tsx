import React from "react";

interface Expense {
  name: string;
  quantity: number;
  color: string;
}

function Detail({ expense }: { expense: Expense }) {
  return (
    <li className={`bg-[${expense.color}] m-px p-px rounded-lg`}>
      <p className="p-3">
        Me he gastado {expense.quantity}€ en {expense.name}
      </p>
    </li>
  );
}

export default Detail;
