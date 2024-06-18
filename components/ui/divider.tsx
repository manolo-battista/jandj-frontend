import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

export default function Divider(props: DividerProps) {
  return <div className={cn("h-1 bg-primary w-28", props.className)} />;
}
