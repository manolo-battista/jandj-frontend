import React, { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface NavbarPlatformProps {
  title?: ReactNode;
}

export default function NavbarPlatform(props: NavbarPlatformProps) {
  const { title } = props;
  return (
    <nav className="p-6 py-4 bg-background-active border-b border-gray flex items-center">
      <div className="flex-1">{title}</div>
    </nav>
  );
}
