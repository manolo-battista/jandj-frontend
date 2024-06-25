import type { Metadata } from "next";
import "./globals.css";

// @ts-ignore
export const metadata: Metadata = {
  title: "J&J - HCP Platform",
  description: "HCP Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
