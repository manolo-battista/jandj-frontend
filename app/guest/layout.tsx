"use client";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Stepper from "@/components/ui/stepper";
import React, { useRef } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="p-4 lg:p-40 lg:py-8 lg:pt-0">{children}</div>
      <Footer />
    </>
  );
}
