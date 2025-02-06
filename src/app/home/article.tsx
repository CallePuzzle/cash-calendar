import React from "react";
import Image from "next/image";
import logo from "@/app/images/logo_cash_calendar2.png";
function Article() {
  return (
    <article className="flex flex-col gap-2 pb-6">
      <Image src={logo} alt="image" className="w-12"></Image>
      <h1 className="text-xl font-bold">Título del artículo 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        velit? Quam est illum itaque hic amet similique quisquam saepe ratione
        tempore laboriosam, aut odit mollitia doloremque. Magni aut maxime
        quisquam!
      </p>
    </article>
  );
}

export default Article;
