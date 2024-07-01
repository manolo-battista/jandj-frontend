import { cn } from "@/lib/utils";
import { Tag } from "@/components/common/tag";
import { StatusBadge } from "@/components/common/status-badge";
import { Typography } from "@/components/ui/typography";
import Divider from "@/components/ui/divider";
import Icon from "@/components/ui/icon";
import React from "react";

interface EventCardProps {
  className?: string;
}
export default function EventCard(props: EventCardProps) {
  const { className } = props;
  return (
    <div className={cn("p-4 py-6 bg-card shadow-xl", className)}>
      <div className="flex items-center">
        <Typography variant="body-xs" className="flex-1 uppercase">
          MEDICAL EDUCATIONAL EVENT
        </Typography>
        <StatusBadge>approved</StatusBadge>
      </div>
      <Typography variant="heading-card" className="w-2/3">
        Event name
      </Typography>
      <div className="flex gap-1 my-2">
        <Tag>#psychiatry</Tag>
        <Tag>#neurology</Tag>
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Icon.Leader className="fill-gray" />
          <Typography variant="body-md">40</Typography>
        </div>
        <div className="flex items-center gap-3">
          <Icon.Calendar className="fill-gray" />
          <Typography variant="body-md">21 - 23/02/2024</Typography>
        </div>
        <div className="flex items-center gap-3">
          <Icon.Hospital className="fill-gray" />
          <Typography variant="body-md">
            Ergife Palace Hotel, Rome (IT)
          </Typography>
        </div>
        <Divider />
        <div className="flex items-center gap-3">
          <Icon.AuthorizedPermit className="fill-gray" />
          <Typography variant="body-md">Owner (Ex. Donatella Rossi)</Typography>
        </div>
      </div>
    </div>
  );
}
