import React from "react";
import "../styles/components/Footer.scss";
import Link from "next/link";
import Image from "next/image";
import arrow_up from "@/app/images/arrow_up.png";
import logo from "@/app/images/logo_cash_calendar2.png";

function Footer() {
  return (
    <footer className="footer">
      <Link href="#header">
        <div className="footer__arrow">
          <Image src={arrow_up} alt="arrow up" className="w-6" />
        </div>
      </Link>
      <div className="footer__content">
        <div className="footer__content__copy">
          <p>&copy; Nuriant 🐜 2025</p>
          <p>I 🖤 code</p>
        </div>
        <div className="footer__content__logo">
          <Image src={logo} alt="cash calendar logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
