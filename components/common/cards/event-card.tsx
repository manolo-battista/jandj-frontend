import { cn } from "@/lib/utils";
import { Tag } from "@/components/common/tag";
import { StatusBadge } from "@/components/common/status-badge";
import { Typography } from "@/components/ui/typography";
import Divider from "@/components/ui/divider";
import Icon from "@/components/ui/icon";
import React from "react";
import { IStatus } from "@/types/status";
import AvatarProfile from "@/components/common/avatar-profile";
import { FrameworkAlertbadge } from "../framework-alert-badge";

interface EventCardProps {
  variant?: "default" | "compact";
  className?: string;
  status: IStatus;
  onClick?(): void;
  alert?: boolean;
}
export default function EventCard(props: EventCardProps) {
  const { variant = "default", status, className, onClick, alert } = props;
  const isCompact = variant == "compact";
  const isCancelled = status === IStatus.CANCELLED;

  const mockAttendees = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div
      onClick={() => !isCancelled && onClick?.()}
      className={cn(
        "relative bg-card p-4 py-6",
        className,

        onClick && "cursor-pointer",
      )}
    >
      <div className={cn(isCancelled && "cursor-disabled opacity-50")}>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="body-xs" className="flex-1 uppercase">
            MEDICAL EDUCATIONAL EVENT
          </Typography>
          <StatusBadge status={status} />
        </div>
        <Typography variant="heading-card" className="mb-10 w-2/3">
          Event name
        </Typography>
        <div className="mb-3 flex gap-1">
          <Tag>Event Number 123456</Tag>
          {alert && <FrameworkAlertbadge />}
          <FrameworkAlertbadge />
        </div>

        {!isCompact && (
          <div className="mb-[70px] flex">
            {mockAttendees.map((item, index) => (
              <AvatarProfile
                className="size-6"
                index={index}
                key={index}
                name="Utente Prova"
                length={mockAttendees.length}
              />
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2">
          {/* {!isCompact && (
            <div className="flex items-center gap-3">
              <Icon.Person className="w-5 fill-gray" />
              <Typography variant="body-xs">40</Typography>
            </div>
          )} */}
          <div className="flex items-center gap-3">
            <Icon.Calendar className="size-4 fill-gray" />
            <Typography variant="body-xs">Data (Ex. 21-23 Feb 2024)</Typography>
          </div>
          {!isCompact && (
            <div className="flex items-center gap-3">
              <Icon.Pin className="size-4 fill-gray" />
              <Typography variant="body-xs">
                Luogo (Ex. Ergife Palace Hotel, Rome (IT))
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
