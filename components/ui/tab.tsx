import { ITabButton, ITabContent } from "@/types/tab";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import React from "react";

export const TabButton = ({ title, isActive, onClick }: ITabButton) => {
  return (
    <button
      onClick={onClick}
      className={cn("px-4", isActive ? "border-b-2 border-red-500" : "")}
    >
      <Typography variant="heading-sm" color={isActive ? "red" : "primary"}>
        {title}
      </Typography>
    </button>
  );
};

export const TabContent = ({ content }: ITabContent) => {
  return <div>{content}</div>;
};
