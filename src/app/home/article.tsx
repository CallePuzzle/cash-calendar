import React from "react";
import Image from "next/image";
import logo from "@/app/images/logo_cash_calendar2.png";
import { ReactNode } from "react";

interface Props {
  title: ReactNode;
  content: ReactNode;
}

function Article({ title, content }: Props) {
  return (
    <article className="flex flex-col mb-5 border md:flex-wrap gap-2 p-3">
      <Image src={logo} alt="image" className="w-12"></Image>
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{content}</p>
    </article>
  );
}

export default Article;
