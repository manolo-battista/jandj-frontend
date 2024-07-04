import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { IStatus } from "@/types/status";
import { Typography } from "@/components/ui/typography";

const badgeVariants = cva(
  "max-h-5 border-transparent uppercase inline-flex items-center rounded-md border px-2.5 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status: IStatus;
}

function StatusBadge({ className, variant, status, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className,
        status === "approved" && "bg-success text-success-800",
        status === "pending" && "bg-warning-200 text-warning-800",
        status === "cancelled" && "bg-error text-white",
        status === "postponed" && "bg-error text-white",
      )}
      {...props}
    >
      <Typography
        variant="body-xs"
        className={cn(
          status === "approved" && "bg-success text-success-800",
          status === "pending" && "bg-warning-200 text-warning-800",
          status === "cancelled" && "bg-error text-white",
          status === "postponed" && "bg-error text-white",
        )}
      >
        {status}
      </Typography>
    </div>
  );
}

export { StatusBadge, badgeVariants };
