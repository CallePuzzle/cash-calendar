import React from "react";

interface Expense {
  name: string;
  quantity: number;
}

function Detail({ expense }: { expense: Expense }) {
  return (
    <li>
      <p>
        Me he gastado {expense.quantity}€ en {expense.name}
      </p>
    </li>
  );
}

export default Detail;
