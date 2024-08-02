import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import { Typography, typographyVariants } from "@/components/ui/typography";

interface AvatarProfileProps {
  index?: number;
  name: string;
  length?: number;
  maxLength?: number;
  className?: string;
  textClassName?: string;
  variant?: "small" | "medium" | "large";
  showCount?: boolean;
}

function getTypographyVariant(variant: "small" | "medium" | "large") {
  switch (variant) {
    case "small":
      return "body-xxs";
    case "medium":
      return "body-xs";
    case "large":
      return "body-md";
    default:
      return "body-xs";
  }
}

export default function AvatarProfile(props: AvatarProfileProps) {
  const {
    className,
    index = 0,
    name = "",
    length = 0,
    maxLength = 3,
    variant = "medium",
    showCount = true,
    textClassName,
  } = props;
  const colorList = ["bg-[#0F68B2]", "bg-[#43AB45]", "bg-[#FDB022]"];

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
        "h-7 w-7 border-[1px] border-white",
        index > 0 && index !== 0 && "-ml-[5px]",
        colorList[index],
        variant === "small" && "-ml-[7px] size-4",
        variant === "medium" && "size-7",
        variant === "large" && "size-12",
        className,
      )}
    >
      <AvatarFallback>
        <Typography
          className={cn("text-white", textClassName)}
          variant={getTypographyVariant(variant)}
        >
          {getInitials()}
        </Typography>
      </AvatarFallback>
    </Avatar>
  ) : (
    index === maxLength && showCount && (
      <Avatar
        className={cn(
          "flex size-7 items-center justify-center border-[2px] border-red bg-white",
          index > 0 && "-ml-[5px]",
          colorList[index],
          variant === "small" && "-ml-[10px] size-4",
          variant === "medium" && "size-7",
          variant === "large" && "size-12",
          className,
        )}
      >
        <Typography
          variant={"body-xs-bold"}
          color="red"
          className={textClassName}
        >
          +{length - maxLength}
        </Typography>
      </Avatar>
    )
  );
}
