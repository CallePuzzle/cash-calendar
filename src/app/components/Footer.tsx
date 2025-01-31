import React from "react";
import "../styles/components/Footer.scss";
import Link from "next/link";
import Image from "next/image";
import arrow_up from "@/app/images/arrow_up.png";
import logo from "@/app/images/logo_cash_calendar2.png";
import git_hub from "@/app/images/github_icon.webp";
import nuria from "@/app/images/Nuria_photo.png";
import { Heart } from "lucide-react";
import { Github } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <Link href="#header">
        <div className="footer__arrow">
          <Image src={arrow_up} alt="arrow up" className="w-6" />
        </div>
      </Link>
      <div className="footer__content">
        <div className="footer__content__icons">
          <Link
            href={"https://github.com/CallePuzzle/cash-calendar"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6" />
          </Link>
          <p>
            We <Heart className="w-4" /> code
          </p>
        </div>
        <div className="footer__content__contributors">
          <p>Contributors</p>
          <Image
            src={nuria}
            alt="image of Nuria"
            className="w-10 rounded-full"
          />
          <p>&copy; Nuriant 🐜 2025</p>
        </div>

        <div className="footer__content__logo">
          <Image src={logo} alt="cash calendar logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
