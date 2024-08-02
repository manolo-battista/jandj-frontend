import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import Icon from "../ui/icon";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function FrameworkAlertbadge({ className, ...props }: BadgeProps) {
  return (
    <div
      className="flex w-fit items-center gap-1 bg-error-100 px-1 font-bold"
      {...props}
    >
      <Icon.Alert className="size-4 text-red" />
      <Typography variant="body-xs" color="red">
        Out Of Framework
      </Typography>
    </div>
  );
}

export { FrameworkAlertbadge };
