import React from "react";
import AvatarProfile from "./avatar-profile";
import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import Icon from "../ui/icon";

type AvatarBadgeProps = {
  name: string;
  role?: string;
  error?: boolean;
  className?: string;
};

export default function AvatarBadge({
  name,
  className,
  role,
  error,
}: AvatarBadgeProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <AvatarProfile name={name} />
      <div className="">
        <Typography variant="body-md">{name}</Typography>
        <div className="flex gap-1">
          {error && (
            <div className="gap-1">
              <Icon.Alert className="text-red" />
              <Typography variant="body-sm" color="red">
                Out of Framework
              </Typography>
            </div>
          )}
          <Typography variant="body-sm" color="inverse">
            {role}
          </Typography>
        </div>
      </div>
    </div>
  );
}
