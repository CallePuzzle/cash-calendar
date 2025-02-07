import React from "react";
import Link from "next/link";
import "@/app/styles/components/NavList.scss";

function NavList({ isBurgerNav }: { isBurgerNav: boolean }) {
  return (
    <ul className={isBurgerNav ? "nav__menu__burger" : "nav__menu"}>
      <li>
        <Link className="nav__menu__link" href="/home">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav__menu__link" href="/demo">
          Demo
        </Link>
      </li>
      <li>
        <Link className="nav__menu__link" href="/">
          Mi calendario
        </Link>
      </li>
      <li>
        <Link className="nav__menu__link" href="/categories">
          Categorías
        </Link>
      </li>
      <li>
        <Link className="nav__menu__link" href="/dashboard">
          Gráficas
        </Link>
      </li>
      <li>
        <Link className="nav__menu__link" href="/login">
          Login/Registro
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
