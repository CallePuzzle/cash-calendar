import React from "react";
import "../styles/components/Header.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo_cash_calendar.jpg";

function Header() {
  return (
    <>
      <header className="header">
        <div>
          <Image src={logo} alt="logo de cash calendar" />
        </div>
        <h1 className="header__title">Cash Calendar</h1>
        <nav className="nav">
          <ul className="nav__menu">
            <li>
              <Link className="nav__menu__link" href="/welcome">
                Bienvenida
              </Link>
            </li>
            <li>
              <Link className="nav__menu__link" href="/">
                Mi calendario
              </Link>
            </li>
            {/* <li>
            <Link className="nav__menu__link" href="">Categorías</Link>
          </li>
          <li>
            <Link className="nav__menu__link" href="">Estadísticas</Link>
          </li>
          <li>
            <Link className="nav__menu__link" href="">Mi perfil</Link>
          </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
