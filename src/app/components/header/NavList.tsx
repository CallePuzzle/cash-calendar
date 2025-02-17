import React from "react";
import Link from "next/link";
import "@/app/styles/components/NavList.scss";

function NavList({
  isBurgerNav,
  setOpen,
}: {
  isBurgerNav: boolean;
  setOpen: (value: boolean) => void;
}) {
  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <ul className={isBurgerNav ? "nav__menu__burger" : "nav__menu"}>
      <li>
        <Link
          className="nav__menu__link"
          href="/home"
          onClick={handleCloseMenu}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="nav__menu__link"
          href="/demo"
          onClick={handleCloseMenu}
        >
          Demo
        </Link>
      </li>
      <li>
        <Link className="nav__menu__link" href="/" onClick={handleCloseMenu}>
          Mi calendario
        </Link>
      </li>
      <li>
        <Link
          className="nav__menu__link"
          href="/categories"
          onClick={handleCloseMenu}
        >
          Categorías
        </Link>
      </li>
      <li>
        <Link
          className="nav__menu__link"
          href="/dashboard"
          onClick={handleCloseMenu}
        >
          Gráficas
        </Link>
      </li>
      <li>
        <Link
          className="nav__menu__link"
          href="/login"
          onClick={handleCloseMenu}
        >
          Login/Registro
        </Link>
      </li>
    </ul>
  );
}

export default NavList;
