import { cn } from "@/lib/utils";
import React from "react";
import { Typography } from "@/components/ui/typography";
import Icon from "@/components/ui/icon";

interface DocumentProps {
  index?: number;
  type: "CV" | "QI";
  className?: string;
}

export default function Document(props: DocumentProps) {
  const { className, index = 0, type = "" } = props;

  return (
    <div className="flex gap-1 items-center">
      <Icon.Document className={cn("fill-blue-700 w-5", className)} />
      <Typography variant="body-xs" color="inverse">
        {type}
      </Typography>
    </div>
  );
}
