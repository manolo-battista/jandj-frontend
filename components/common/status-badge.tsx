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
        status === IStatus.URGENT && "bg-error-100 text-white",
        status === IStatus.CANCELLED && "bg-gray-200 text-white",
        status === IStatus.LIVE && "border-red-500 text-red",
        status === IStatus.LOW_PRIORITY && "bg-blue-100",
        status === IStatus.MEDIUM_PRIORITY && "bg-warning-100",
        status === IStatus.HIGHT_PRIORITY && "bg-yellow-300",
      )}
      {...props}
    >
      <Typography
        variant="body-xs"
        className={cn(
          status === IStatus.DRAFT && "text-blue-700",
          status === IStatus.APPROVED && "text-success-700",
          status === IStatus.URGENT && "text-error-900",
          status === IStatus.CANCELLED && "text-gray-700",
          status === IStatus.LIVE && "text-red",
          status === IStatus.LOW_PRIORITY && "text-blue-900",
          status === IStatus.MEDIUM_PRIORITY && "text-yellow-500",
          status === IStatus.HIGHT_PRIORITY && "text-yellow-800",
        )}
      >
        {status === IStatus.LIVE ? (
          <div className="flex gap-1 items-center">
            <div className="h-2 w-2 bg-red rounded-full"></div>
            {status}
          </div>
        ) : (
          status
        )}
      </Typography>
    </div>
  );
}

export { StatusBadge, badgeVariants };
