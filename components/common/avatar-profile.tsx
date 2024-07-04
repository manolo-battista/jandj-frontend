import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import { Typography } from "@/components/ui/typography";

interface AvatarProfileProps {
  index?: number;
  name: string;
  length?: number;
  maxLength?: number;
  className?: string;
}

export default function AvatarProfile(props: AvatarProfileProps) {
  const { className, index = 0, name = "", length = 0, maxLength = 4 } = props;
  const colorList = [
    "bg-[#DF8F9B]",
    "bg-[#0F68B2]",
    "bg-[#43AB45]",
    "bg-[#FDB022]",
  ];

  function getInitials() {
    let names = name.split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }

  return index < maxLength ? (
    <Avatar
      className={cn(
        "border-[2px] border-white w-7 h-7",
        index > 0 && "-ml-[7px]",
        colorList[index],
        className,
      )}
    >
      <AvatarFallback>
        <Typography className="text-white text-[14px]">
          {getInitials()}
        </Typography>
      </AvatarFallback>
    </Avatar>
  ) : (
    index === maxLength && (
      <Typography className="mt-[2px] ml-1">+{length - maxLength}</Typography>
    )
  );
}
