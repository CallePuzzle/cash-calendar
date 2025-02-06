import React from "react";
import Section from "@/app/home/section";
import Image from "next/image";
import logo from "@/app/images/logo_cash_calendar2.png";
function Home() {
  return (
    <>
      <div className="p-5 flex flex-col md:flex-row md:items-center md:justify-center md:gap-20">
        <Section />
        <div className="w-320 h-221 md:flex">
          <Image src={logo} alt="imagen"></Image>
        </div>
      </div>
    </>
  );
}

export default Home;
