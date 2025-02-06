import React from "react";
import Section from "@/app/home/section";
import Image from "next/image";
import logo from "@/app/images/logo_cash_calendar2.png";
function Home() {
  return (
    <>
      <div className="p-5">
        <Section />
        <Image src={logo} alt="imagen"></Image>
      </div>
    </>
  );
}

export default Home;
