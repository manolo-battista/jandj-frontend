import React, { ReactNode } from "react";

interface NavbarPlatformProps {
  title?: ReactNode;
}

export default function NavbarPlatform(props: NavbarPlatformProps) {
  const { title } = props;
  return (
    <nav className="flex items-center border-b border-gray bg-background-active p-6 py-4">
      <div className="flex-1">{title}</div>
    </nav>
  );
}
