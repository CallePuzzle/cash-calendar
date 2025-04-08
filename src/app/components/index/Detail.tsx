import React from "react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";

interface Expense {
  name: string;
  quantity: number;
  bgColorClass: string;
  hoverShadowColorClass: string;
  category: string;
  image: IconName;
}

function Detail({ expense }: { expense: Expense }) {
  return (
    <li
      className={`flex flex-row w-[80%] md:w-[50%] lg:w-[70%] justify-start p-3 rounded-xl shadow-lg ${expense.hoverShadowColorClass}`}
    >
      <div className="flex items-center justify-center w-[20%]">
        <DynamicIcon name={expense.image} color="black" size={20} />
      </div>
      <div
        className={`${expense.bgColorClass} m-px p-3 rounded-lg hover:shadow-lg hover:cursor-pointer  flex flex-row gap-10 justify-between w-[80%] md:text-lg`}
      >
        <p>
          <b>{expense.quantity}€</b> en {expense.name}
        </p>
        <p>{expense.category}</p>
      </div>
    </li>
  );
}

export default Detail;
