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
        className="max-w-[40%]"
        placeholder="Cerca per nome"
        endIcon={<Icon.Search className="w-6 fill-red" />}
        // @ts-ignore
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  );
}
