import React, { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface NavbarPlatformProps {
  children?: ReactNode;
  onSearch?(searchedText: string): void;
}

export default function ActionBarPlatform(props: NavbarPlatformProps) {
  const { children, onSearch } = props;
  return (
    <div className="px-6 py-2 bg-background-active border-b border-gray flex items-center">
      <div className="flex-1">{children}</div>
      <Input
        className="max-w-[40%]"
        placeholder="Cerca per nome"
        endIcon={<Icon.Search className="fill-red w-6" />}
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  );
}
