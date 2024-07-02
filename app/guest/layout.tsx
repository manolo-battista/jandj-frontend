"use client";
import NavbarGuest from "@/components/layout/guest/navbar-guest";
import FooterGuest from "@/components/layout/guest/footer-guest";
import Stepper from "@/components/ui/stepper";
import React, { useRef } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarGuest />
      <div className="p-4 lg:p-40 lg:py-8 lg:pt-0">{children}</div>
      <FooterGuest />
    </>
  );
}
