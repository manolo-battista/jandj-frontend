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

export enum ContractStatus {
  APPROVED = "approvato",
  PENDING = "in attesa",
  TO_SIGN = "da firmare",
  SENT_FOR_SIGNATURE = "inviato per firma",
  REJECTED = "rifiutato",
}

export interface ContractStatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status: ContractStatus;
}

function ContractStatusBadge({
  className,
  variant,
  status,
  ...props
}: ContractStatusBadgeProps) {
  const iconStyle = "w-3 h-3 mr-1";

  const startIcon = (status: ContractStatus) => {
    switch (status) {
      case ContractStatus.APPROVED:
        return <Icon.Check className={cn(iconStyle, "text-green-700")} />;
      case ContractStatus.PENDING:
        return <Icon.Loading className={cn(iconStyle, "text-gray-600")} />;
      case ContractStatus.TO_SIGN:
        return (
          <Icon.QuestionMark className={cn(iconStyle, "text-yellow-700")} />
        );
      case ContractStatus.REJECTED:
        return <Icon.Close className={cn(iconStyle, "text-red-700")} />;
      case ContractStatus.SENT_FOR_SIGNATURE:
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
        status === ContractStatus.APPROVED && "bg-green-200",
        status === ContractStatus.PENDING && "bg-gray-200",
        status === ContractStatus.TO_SIGN && "bg-warning-200",
        status === ContractStatus.REJECTED && "bg-error-200",
        status === ContractStatus.SENT_FOR_SIGNATURE && "bg-blue-200",
      )}
      {...props}
    >
      <Typography
        variant="body-xs"
        className={cn(
          "flex items-center text-nowrap",
          status === ContractStatus.APPROVED && "text-success-700",
          status === ContractStatus.PENDING && "text-gray-600",
          status === ContractStatus.TO_SIGN && "text-yellow-700",
          status === ContractStatus.REJECTED && "text-red-700",
          status === ContractStatus.SENT_FOR_SIGNATURE && "text-blue-700",
        )}
      >
        {startIcon(status)}
        {status}
      </Typography>
    </div>
  );
}

export { ContractStatusBadge };
