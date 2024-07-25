import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { IStatus } from "@/types/status";
import { Typography } from "@/components/ui/typography";

const badgeVariants = cva(
  "border-transparent uppercase inline-flex items-center border px-1 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-fit",
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
        status === IStatus.DRAFT && "bg-blue-300 text-warning-800",
        status === IStatus.APPROVED && "bg-green-200 text-success-800",
        status === IStatus.CANCELLED && "bg-gray-200 text-white",
        status === IStatus.LIVE && "border-red-500 text-red",
      )}
      {...props}
    >
      <Typography
        variant="body-xs"
        className={cn(
          status === IStatus.DRAFT && "text-blue-700",
          status === IStatus.APPROVED && "text-success-700",
          status === IStatus.CANCELLED && "text-gray-700",
          status === IStatus.LIVE && "text-red",
        )}
      >
        {status === IStatus.LIVE ? (
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-red"></span>
            {status}
          </span>
        ) : (
          status
        )}
      </Typography>
    </div>
  );
}

export { StatusBadge, badgeVariants };
