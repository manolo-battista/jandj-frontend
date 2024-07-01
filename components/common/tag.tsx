import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

const badgeVariants = cva(
  " inline-flex items-center rounded-sm border px-1 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-tag px-2 pl-1",
        secondary: "bg-tag",
        outlined: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Tag({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <div className="w-1 h-4 rounded-md mx-1 bg-red" />
      <Typography variant="footer-header-card">{props.children}</Typography>
    </div>
  );
}

export { Tag, badgeVariants };
