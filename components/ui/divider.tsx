import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export default function Divider(props: DividerProps) {
  return (
    <div className={cn("my-1 h-[1px] w-full bg-border", props.className)} />
  );
}
