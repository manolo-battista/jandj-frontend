import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export default function Divider(props: DividerProps) {
  return (
    <div className={cn("my-6 w-full h-[1px] bg-border", props.className)} />
  );
}
