import * as React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import Icon from "@/components/ui/icon";

// INVIATO PER FIRMA IN INGLESE

export enum DocumentStatus {
  APPROVED = "Approved",
  MISSING = "Missing",
  PENDING = "Pending",
}

type DocumentStatusBadgeProps = {
  status: DocumentStatus;
  className?: string;
};

function DocumentStatusBadge({ className, status }: DocumentStatusBadgeProps) {
  const iconStyle = "size-6";

  return (
    <>
      {status === DocumentStatus.APPROVED && (
        <Icon.Document className={cn(iconStyle, "text-blue-700", className)} />
      )}
      {status === DocumentStatus.PENDING && (
        <Icon.DocumentPending
          className={cn(iconStyle, "text-blue-700", className)}
        />
      )}
      {status === DocumentStatus.MISSING && (
        <Icon.Close className={className} />
      )}
    </>
  );
}

export { DocumentStatusBadge };
