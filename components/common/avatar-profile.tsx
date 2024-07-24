import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import { Typography, typographyVariants } from "@/components/ui/typography";
import { VariantProps } from "class-variance-authority";

type TypographyVariants = VariantProps<typeof typographyVariants>;

interface AvatarProfileProps {
  index?: number;
  name: string;
  length?: number;
  maxLength?: number;
  className?: string;
  textVariant?: TypographyVariants["variant"];
}

export default function AvatarProfile(props: AvatarProfileProps) {
  const {
    className,
    index = 0,
    name = "",
    length = 0,
    maxLength = 4,
    textVariant = "body-xs",
  } = props;
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
        "h-7 w-7 border-[2px] border-white",
        index > 0 && "-ml-[7px]",
        colorList[index],
        className,
      )}
    >
      <AvatarFallback>
        <Typography className="text-white" variant={textVariant}>
          {getInitials()}
        </Typography>
      </AvatarFallback>
    </Avatar>
  ) : (
    index === maxLength && (
      <Avatar
        className={cn(
          "flex h-7 w-7 items-center justify-center border-[2px] border-red bg-white",
          index > 0 && "-ml-[7px]",
          colorList[index],
          className,
        )}
      >
        <Typography variant={"body-xs-bold"} color="red">
          +{length - maxLength}
        </Typography>
      </Avatar>
    )
  );
}
