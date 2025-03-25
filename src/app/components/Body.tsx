"use client";
import "@/app/styles/body.scss";
import { Geist, Geist_Mono } from "next/font/google";
import React, { useState } from "react";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function Body({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  return (
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased ${
        open ? "no-scroll" : ""
      }`}
    >
      <Header open={open} setOpen={setOpen} />
      {children}
      <Footer />
    </body>
  );
}

export default Body;
