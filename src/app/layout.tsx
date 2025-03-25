import type { Metadata } from "next";
import "./globals.css";
import Body from "@/app/components/Body";

export const metadata: Metadata = {
  title: "Cash Calendar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body children={children} />
    </html>
  );
}
