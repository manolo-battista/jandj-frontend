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

export enum ApprovationStatus {
  APPROVED = "approvato",
  TO_APPROVE = "da approvare",
  IN_PROGRESS = "in approvazione",
  REJECTED = "rifiutato",
}

export interface ApprovationStatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  status: ApprovationStatus;
}

function ApprovationStatusBadge({
  className,
  variant,
  status,
  ...props
}: ApprovationStatusBadgeProps) {
  const iconStyle = "w-3 h-3 mr-1";

  const startIcon = (status: ApprovationStatus) => {
    switch (status) {
      case ApprovationStatus.APPROVED:
        return <Icon.Check className={cn(iconStyle, "text-green-700")} />;
      case ApprovationStatus.TO_APPROVE:
        return (
          <Icon.QuestionMark className={cn(iconStyle, "text-yellow-700")} />
        );
      case ApprovationStatus.IN_PROGRESS:
        return <Icon.Share className={cn(iconStyle, "text-blue-700")} />;
      case ApprovationStatus.REJECTED:
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
        status === ApprovationStatus.APPROVED && "bg-green-200",
        status === ApprovationStatus.TO_APPROVE && "bg-warning-200",
        status === ApprovationStatus.IN_PROGRESS && "bg-blue-200",
        status === ApprovationStatus.REJECTED && "bg-error-200",
      )}
      {...props}
    >
      <Typography
        variant="body-xs"
        className={cn(
          "flex items-center text-nowrap",
          status === ApprovationStatus.APPROVED && "text-success-700",
          status === ApprovationStatus.TO_APPROVE && "text-yellow-700",
          status === ApprovationStatus.IN_PROGRESS && "text-blue-700",
          status === ApprovationStatus.REJECTED && "text-red-700",
        )}
      >
        {startIcon(status)}
        {status}
      </Typography>
    </div>
  );
}

export { ApprovationStatusBadge };
