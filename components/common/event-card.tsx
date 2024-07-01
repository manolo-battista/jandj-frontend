import { cn } from "@/lib/utils";
import { Tag } from "@/components/common/tag";
import { StatusBadge } from "@/components/common/status-badge";
import { Typography } from "@/components/ui/typography";
import Divider from "@/components/ui/divider";
import Icon from "@/components/ui/icon";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IStatus } from "@/types/status";

interface EventCardProps {
  variant?: "default" | "compact";
  className?: string;
  status: IStatus;
}
export default function EventCard(props: EventCardProps) {
  const { variant = "default", status, className } = props;
  const isCompact = variant == "compact";
  return (
    <div className={cn("p-4 py-6 bg-card shadow-xl", className)}>
      <div className="flex items-center">
        <Typography variant="body-xs" className="flex-1 uppercase">
          MEDICAL EDUCATIONAL EVENT
        </Typography>
        <StatusBadge status={status} />
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
          {[0, 1, 2, 3].map((item, index) => (
            <Avatar
              key={index}
              className={cn(
                "border border-white bg-[#DF8F9B] w-7 h-7",
                index > 0 && "-ml-2",
              )}
            >
              <AvatarImage src="/profile_image.png" alt="profile" />
              <AvatarFallback>LU</AvatarFallback>
            </Avatar>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3">
        {!isCompact && (
          <div className="flex items-center gap-3">
            <Icon.Person className="fill-gray w-4" />
            <Typography variant="body-xs">40</Typography>
          </div>
        )}
        <div className="flex items-center gap-3">
          <Icon.Calendar className="fill-gray w-4" />
          <Typography variant="body-xs">21 - 23/02/2024</Typography>
        </div>
        {!isCompact && (
          <div className="flex items-center gap-3">
            <Icon.Pin className="fill-gray w-4" />
            <Typography variant="body-xs">
              Ergife Palace Hotel, Rome (IT)
            </Typography>
          </div>
        )}
        {!isCompact && (
          <>
            <Divider />
            <div className="flex items-center gap-3">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/profile_image.png" alt="profile" />
                <AvatarFallback>LU</AvatarFallback>
              </Avatar>
              <Typography variant="body-md">
                Owner (Ex. Donatella Rossi)
              </Typography>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
