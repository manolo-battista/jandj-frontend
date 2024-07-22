import { cn } from "@/lib/utils";
import { Tag } from "@/components/common/tag";
import { StatusBadge } from "@/components/common/status-badge";
import { Typography } from "@/components/ui/typography";
import Divider from "@/components/ui/divider";
import Icon from "@/components/ui/icon";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IStatus } from "@/types/status";
import AvatarProfile from "@/components/common/avatar-profile";
import Document from "@/components/common/document";
import { Badge } from "@/components/ui/badge";

interface CrmCardProps {
  variant?: "default" | "compact";
  className?: string;
}
export default function CrmCard(props: CrmCardProps) {
  const { variant = "default", className } = props;
  const isCompact = variant == "compact";

  const mockAttendees = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={cn("bg-card p-4 py-6", className)}>
      <div className="flex items-center gap-2 text-left">
        <AvatarProfile name="Utente Prova" className="h-12 w-12" />
        <div>
          <Typography variant="heading-sm">Dr. Name Surname</Typography>
          <Typography variant="body-sm" color="inverse">
            Hematology
          </Typography>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Icon.Email className="w-5 fill-gray" />
          <Typography variant="body-xs">name.surname@hospital.com</Typography>
        </div>
        <div className="flex items-center gap-3">
          <Icon.Phone className="w-5 fill-gray" />
          <Typography variant="body-xs">+39 1234567890</Typography>
        </div>
        <div className="flex items-center gap-3">
          <Icon.Hospital className="w-5 fill-gray" />
          <Typography variant="body-xs">Niguarda hospital</Typography>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Document type="CV" />
          <Document type="QI" />
        </div>
        <>
          <Divider />
          <Typography variant="body-md">
            Attended to 1 event in the last 12 months
          </Typography>
        </>
      </div>
    </div>
  );
}
