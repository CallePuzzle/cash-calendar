"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/app/images/logo_cash_calendar2.png";
import burger from "@/app/images/burger_menu.png";
import Nav from "./Nav";

function Header() {
  const [open, setOpen] = useState(false);
  const handleOpenClose = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Image src={logo} alt="cash calendar logo" />
        </div>
        <nav className="nav">
          <div className="nav__burger">
            <Image src={burger} alt="burger menu" onClick={handleOpenClose} />
          </div>
          {open && <Nav isBurgerNav={true} />}
          <Nav isBurgerNav={false} />
        </nav>
      </header>
    </>
  );
}

export default Header;
