import React from "react";
import Section from "@/app/home/section";
import Image from "next/image";
import logo from "@/app/images/logo_cash_calendar2.png";
function Home() {
  return (
    <>
      <div className="p-5 flex flex-col md:p-0 md:flex-row md:items-center md:justify-around md:gap-20">
        <Section />
        <div className="w-320 h-221 flex justify-center">
          <Image src={logo} alt="imagen"></Image>
        </div>
      </div>
    </>
  );
}

export default Home;
