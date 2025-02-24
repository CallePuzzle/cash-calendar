"use client";
import React, { useState } from "react";
import "@/app/styles/components/Header.scss";
import Image from "next/image";
import logo from "@/app/images/logo_cash_calendar2.png";
import { Logs } from "lucide-react";
import NavList from "@/app/components/header/NavList";
import Link from "next/link";

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
          <Link href={"/"}>
            <Image src={logo} alt="cash calendar logo" />
          </Link>
        </div>
        <nav className="nav">
          <div className="nav__burger">
            <Logs color="black" size={25} onClick={handleOpenClose} />
          </div>
          {open && <NavList isBurgerNav={true} setOpen={setOpen} />}
          <NavList isBurgerNav={false} setOpen={setOpen} />
        </nav>
      </header>
    </>
  );
}

export default Header;
