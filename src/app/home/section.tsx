import React from "react";
import Article from "@/app/home/article";

function Section() {
  return (
    <section className="md:w-1/2 pr-3">
      <Article />
      <Article />
      <Article />
      <Article />
    </section>
  );
}

export default Section;
