import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ITaskPriority } from "@/types/kanban-board";

const badgeVariants = cva(
  "border-transparent uppercase inline-flex items-center border px-1 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-fit w-fit",
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
  priority: ITaskPriority | "placeholder";
}

function PriorityBadge({ className, variant, priority, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className,
        priority === "placeholder" && "bg-gray-200",
        priority === ITaskPriority.URGENT && "bg-error-100 text-white",
        priority === ITaskPriority.LOW_PRIORITY && "bg-blue-100",
        priority === ITaskPriority.MEDIUM_PRIORITY && "bg-warning-100",
        priority === ITaskPriority.HIGHT_PRIORITY && "bg-yellow-300",
      )}
      {...props}
    >
      <Typography
        variant="body-xs"
        className={cn(
          priority === "placeholder" && "text-gray-700",
          priority === ITaskPriority.URGENT && "text-error-700",
          priority === ITaskPriority.LOW_PRIORITY && "text-blue-900",
          priority === ITaskPriority.MEDIUM_PRIORITY && "text-warning-600",
          priority === ITaskPriority.HIGHT_PRIORITY && "text-yellow-800",
        )}
      >
        {priority === "placeholder" ? "SCEGLI UNA PRIORITÀ" : priority}
      </Typography>
    </div>
  );
}

export { PriorityBadge, badgeVariants };
