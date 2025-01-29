import React from "react";
import "../styles/components/Footer.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <Link href="#header">
        <div className="footer__arrow">⬆️</div>
      </Link>

      <div className="footer__copy">
        <p>&copy; Nuriant 🐜 2025</p>
        <p>I 🖤 code</p>
      </div>
    </footer>
  );
}

export default Footer;
