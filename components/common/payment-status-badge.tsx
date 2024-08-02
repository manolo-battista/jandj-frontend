import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ITaskPriority } from "@/types/kanban-board";
import Icon from "@/components/ui/icon";

const badgeVariants = cva(
  "border-transparent capitalize inline-flex items-center border px-1 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none h-fit w-fit",
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

// INVIATO PER FIRMA IN INGLESE

export enum PaymentStatus {
  PAID = "pagato",
  PENDING = "in attesa",
  TO_PAY = "da pagare",
  IN_PROCESSING = "in eleborazione",
}

export interface PaymentStatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status: PaymentStatus;
}

function PaymentStatusBadge({
  className,
  variant,
  status,
  ...props
}: PaymentStatusBadgeProps) {
  const iconStyle = "w-3 h-3 mr-1";

  const startIcon = (status: PaymentStatus) => {
    switch (status) {
      case PaymentStatus.PAID:
        return <Icon.Check className={cn(iconStyle, "text-green-700")} />;
      case PaymentStatus.PENDING:
        return <Icon.Loading className={cn(iconStyle, "text-gray-600")} />;
      case PaymentStatus.TO_PAY:
        return <Icon.Payment className={cn(iconStyle, "text-yellow-700")} />;
      case PaymentStatus.IN_PROCESSING:
        return <Icon.Share className={cn(iconStyle, "text-blue-700")} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className,
        status === PaymentStatus.PAID && "bg-green-200",
        status === PaymentStatus.PENDING && "bg-gray-200",
        status === PaymentStatus.TO_PAY && "bg-warning-200",
        status === PaymentStatus.IN_PROCESSING && "bg-blue-200",
      )}
      {...props}
    >
      <Typography
        variant="body-xs"
        className={cn(
          "flex items-center text-nowrap",
          status === PaymentStatus.PAID && "text-success-700",
          status === PaymentStatus.PENDING && "text-gray-600",
          status === PaymentStatus.TO_PAY && "text-yellow-700",
          status === PaymentStatus.IN_PROCESSING && "text-blue-700",
        )}
      >
        {startIcon(status)}
        {status}
      </Typography>
    </div>
  );
}

export { PaymentStatusBadge };
