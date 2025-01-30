import React from "react";
import Link from "next/link";
import "@/app/styles/components/NavList.scss";

function NavList({ isBurgerNav }: { isBurgerNav: boolean }) {
  return (
    <ul className={isBurgerNav ? "nav__menu__burger" : "nav__menu"}>
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
      <li>
        <Link className="nav__menu__link" href="">
          Categorías
        </Link>
      </li>
      <li>
        <Link className="nav__menu__link" href="">
          Estadísticas
        </Link>
      </li>
      <li>
        <Link className="nav__menu__link" href="">
          Mi perfil
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
