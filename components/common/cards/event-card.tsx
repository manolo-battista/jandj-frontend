import { cn } from "@/lib/utils";
import { Tag } from "@/components/common/tag";
import { StatusBadge } from "@/components/common/status-badge";
import { Typography } from "@/components/ui/typography";
import Divider from "@/components/ui/divider";
import Icon from "@/components/ui/icon";
import React from "react";
import { IStatus } from "@/types/status";
import AvatarProfile from "@/components/common/avatar-profile";

interface EventCardProps {
  variant?: "default" | "compact";
  className?: string;
  status: IStatus;
  onClick?(): void;
}
export default function EventCard(props: EventCardProps) {
  const { variant = "default", status, className, onClick } = props;
  const isCompact = variant == "compact";
  const isCancelled = status === "cancelled";

  const mockAttendees = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      onClick={() => !isCancelled && onClick?.()}
      className={cn(
        "relative p-4 py-6 bg-card",
        className,

        onClick && "cursor-pointer",
      )}
    >
      <div className="absolute right-4 top-4">
        <StatusBadge status={status} />
      </div>
      <div className={cn(isCancelled && "opacity-50 cursor-disabled")}>
        <div className={cn("flex items-center")}>
          <Typography variant="body-xs" className="flex-1 uppercase">
            MEDICAL EDUCATIONAL EVENT
          </Typography>
        </div>
        <Typography variant="heading-card" className="w-2/3">
          Event name
        </Typography>
        <div className="flex gap-1 my-2">
          <Tag>#psychiatry</Tag>
          <Tag>#neurology</Tag>
        </div>

        {!isCompact && (
          <div className="flex">
            {mockAttendees.map((item, index) => (
              <AvatarProfile
                index={index}
                key={index}
                name="Utente Prova"
                length={mockAttendees.length}
              />
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3">
          {!isCompact && (
            <div className="flex items-center gap-3">
              <Icon.Person className="fill-gray w-5" />
              <Typography variant="body-xs">40</Typography>
            </div>
          )}
          <div className="flex items-center gap-3">
            <Icon.Calendar className="fill-gray w-5" />
            <Typography variant="body-xs">21 - 23/02/2024</Typography>
          </div>
          {!isCompact && (
            <div className="flex items-center gap-3">
              <Icon.Pin className="fill-gray w-5" />
              <Typography variant="body-xs">
                Ergife Palace Hotel, Rome (IT)
              </Typography>
            </div>
          )}
          {!isCompact && (
            <>
              <Divider />
              <div className="flex items-center gap-3">
                <AvatarProfile name="Marco Rossi" />
                <Typography variant="body-md">
                  Owner (Ex. Donatella Rossi)
                </Typography>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
