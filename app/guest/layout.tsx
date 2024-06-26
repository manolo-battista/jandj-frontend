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
      <div className="min-h-[65vh]">
        <div className="p-6 flex flex-col items-center justify-center w-full">
          <Stepper />
        </div>
        <div className="p-4 md:p-40 md:py-8 md:pt-0">{children}</div>
      </div>
      <Footer />
    </>
  );
}
