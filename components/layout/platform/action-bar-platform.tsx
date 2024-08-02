"use client";
import React, { ReactNode } from "react";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface NavbarPlatformProps {
  children?: ReactNode;
  onSearch?(searchedText: string): void;
}

export default function ActionBarPlatform({
  children,
  onSearch,
}: NavbarPlatformProps) {
  return (
    <div className="flex items-center border-b border-gray bg-background-active px-6 py-2">
      <div className="flex-1">{children}</div>
      <Input
        variant="outlined"
        className="max-w-[40%] border-none"
        placeholder="Cerca per nome"
        endIcon={<Icon.Search className="size-5 fill-red" />}
        // @ts-ignore
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  );
}
