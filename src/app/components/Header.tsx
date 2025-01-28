import React from "react";
import "../styles/components/Header.scss";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="header">
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
