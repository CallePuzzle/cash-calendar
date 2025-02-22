import React from "react";
import "@/app/styles/components/Footer.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo_cash_calendar2.png";
import { ArrowUp } from "lucide-react";
import { HeartPulse } from "lucide-react";
import { Github } from "lucide-react";
import Contributors from "./contributors";

function Footer() {
  return (
    <footer className="footer">
      <Link href="#header">
        <div className="footer__arrow">
          <ArrowUp color="black" size={20} />
        </div>
      </Link>
      <div className="footer__content">
        <div className="footer__content__icons">
          <Link
            href={"https://github.com/CallePuzzle/cash-calendar"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="black" size={16} />
          </Link>
          <p>
            We <HeartPulse color="red" size={12} /> code
          </p>
        </div>
        <div>
          <Contributors />
        </div>
        <div className="footer__content__logo">
          <Image src={logo} alt="cash calendar logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
