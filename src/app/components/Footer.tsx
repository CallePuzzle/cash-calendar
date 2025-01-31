import React from "react";
import "../styles/components/Footer.scss";
import Link from "next/link";
import Image from "next/image";
import arrow_up from "@/app/images/arrow_up.png";

function Footer() {
  return (
    <footer className="footer">
      <Link href="#header">
        <div className="footer__arrow">
          <Image src={arrow_up} alt="arrow up" className="w-6" />
        </div>
      </Link>

      <div className="footer__copy">
        <p>&copy; Nuriant 🐜 2025</p>
        <p>I 🖤 code</p>
      </div>
    </footer>
  );
}

export default Footer;
