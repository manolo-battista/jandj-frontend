import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ITaskPriority } from "@/types/kanban-board";
import Icon from "@/components/ui/icon";

const badgeVariants = cva(
  "border-transparent capitalize inline-flex items-center border px-1 py-0.5 text-[10px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 h-fit w-fit",
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

export enum AttendeeStatus {
  APPROVED = "approvato",
  TO_APPROVE = "da approvare",
  SENT_FOR_SIGNATURE = "inviato per firma",
  MISS_APPROVED = "manca approvazione",
  TO_PAY = "da pagare",
  REJECTED = "rifiutato",
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status: AttendeeStatus;
}

function AttendeeStatusBadge({
  className,
  variant,
  status,
  ...props
}: BadgeProps) {
  const iconStyle = "w-3 h-3 mr-1";

  const startIcon = (status: AttendeeStatus) => {
    switch (status) {
      case AttendeeStatus.APPROVED:
        return <Icon.Check className={cn(iconStyle, "text-green-700")} />;
      case AttendeeStatus.TO_APPROVE:
        return (
          <Icon.QuestionMark className={cn(iconStyle, "text-yellow-700")} />
        );
      case AttendeeStatus.SENT_FOR_SIGNATURE:
        return <Icon.Share className={cn(iconStyle, "text-blue-700")} />;
      case AttendeeStatus.MISS_APPROVED:
        return <Icon.Loading className={cn(iconStyle, "text-gray-600")} />;
      case AttendeeStatus.TO_PAY:
        return <Icon.Payment className={cn(iconStyle, "text-yello-700")} />;
      case AttendeeStatus.REJECTED:
        return <Icon.Close className={cn(iconStyle, "text-red-700")} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className,
        status === AttendeeStatus.APPROVED && "bg-success-200",
        status === AttendeeStatus.TO_APPROVE && "bg-warning-200",
        status === AttendeeStatus.SENT_FOR_SIGNATURE && "bg-blue-200",
        // status === AttendeeStatus.MISS_APPROVED && "bg-gray-200",
        status === AttendeeStatus.TO_PAY && "bg-warning-200",
        status === AttendeeStatus.REJECTED && "bg-red-200",
      )}
      {...props}
    >
      <Typography
        variant="body-xs"
        className={cn(
          "flex items-center",
          status === AttendeeStatus.APPROVED && "text-success-700",
          status === AttendeeStatus.TO_APPROVE && "text-yellow-700",
          status === AttendeeStatus.SENT_FOR_SIGNATURE && "text-blue-700",
          status === AttendeeStatus.MISS_APPROVED && "text-gray-600",
          status === AttendeeStatus.TO_PAY && "text-yello-700",
          status === AttendeeStatus.REJECTED && "text-red-700",
        )}
      >
        {startIcon(status)}
        {status}
      </Typography>
    </div>
  );
}

export { AttendeeStatusBadge, badgeVariants };
