import React from "react";
import AvatarProfile from "./avatar-profile";
import { cn } from "@/lib/utils";
import { Typography, typographyVariants } from "../ui/typography";
import { FrameworkAlertbadge } from "./framework-alert-badge";
import { VariantProps } from "class-variance-authority";

type AvatarBadgeProps = {
  name: string;
  role?: string;
  error?: boolean;
  className?: string;
  variant?: "small" | "medium" | "large";
  textClassName?: string;
};

type TypographyVariants = VariantProps<typeof typographyVariants>;

function AvatarBadge({
  name,
  className,
  role,
  error,
  variant = "medium",
  textClassName,
}: AvatarBadgeProps) {
  function getTypographyVariant(
    variant: "small" | "medium" | "large",
  ): TypographyVariants["variant"] {
    switch (variant) {
      case "small":
        return "body-xs";
      case "medium":
        return "body-xs";
      case "large":
        return "body-md";
      default:
        return "body-xs";
    }
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <AvatarProfile name={name} variant={variant} />
      <div>
        <Typography variant={getTypographyVariant(variant)}>{name}</Typography>
        <div className="flex gap-1">
          {error && <FrameworkAlertbadge />}
          <Typography
            variant="body-sm"
            color="inverse"
            className={cn("capitalize", textClassName)}
          >
            {role}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default AvatarBadge;
