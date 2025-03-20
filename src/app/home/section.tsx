import React from "react";
import Article from "@/app/home/article";

function Section() {
  return (
    <section className="md:w-1/2 pr-3">
      <Article
        title="Título del Artículo 1"
        content="Este es el contenido del párrafo
        del artículo 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quae rem magni placeat consectetur vel minima perferendis. Inventore culpa odio, ipsa ipsam voluptatem animi, veritatis itaque harum rem consequatur adipisci!"
      ></Article>
      <Article
        title="Título del Artículo 2"
        content="Este es el contenido del párrafo
        del artículo 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quae rem magni placeat consectetur vel minima perferendis. Inventore culpa odio, ipsa ipsam voluptatem animi, veritatis itaque harum rem consequatur adipisci!"
      ></Article>
      <Article
        title="Título del Artículo 3"
        content="Este es el contenido del párrafo
        del artículo 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quae rem magni placeat consectetur vel minima perferendis. Inventore culpa odio, ipsa ipsam voluptatem animi, veritatis itaque harum rem consequatur adipisci!"
      ></Article>
      <Article
        title="Título del Artículo 4"
        content="Este es el contenido del párrafo
        del artículo 4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quae rem magni placeat consectetur vel minima perferendis. Inventore culpa odio, ipsa ipsam voluptatem animi, veritatis itaque harum rem consequatur adipisci!"
      ></Article>
    </section>
  );
}

export default Section;
