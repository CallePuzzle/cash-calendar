import React from "react";
import "../styles/components/Header.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo_cash_calendar2.png";
import burguer from "@/app/images/burguer_menu.png";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Image src={logo} alt="cash calendar logo" />
        </div>
        <nav className="nav">
          <div className="nav__burguer">
            <Image src={burguer} alt="burguer menu" />
          </div>
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
