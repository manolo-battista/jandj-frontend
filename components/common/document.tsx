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
    <div className="flex items-center gap-1">
      <Icon.Document className={cn("w-5 fill-blue-700", className)} />
      <Typography variant="body-xs" color="inverse">
        {type}
      </Typography>
    </div>
  );
}
