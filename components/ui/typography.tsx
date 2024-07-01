import * as React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    color: {
      primary: "text-gray-800",
      red: "text-red-500",
      secondary: "text-black",
      tertiary: "text-red",
      inverse: "text-gray-400",
      "on-color": "text-white",
      disabled: "text-gray",
    },
    variant: {
      "heading-xl": "font-johnson-display text-xl",
      "heading-lg": "font-johnson-display text-lg",
      "heading-md": "font-johnson-display text-md",
      "heading-sm": "font-johnson-display text-sm",
      "heading-link": "font-johnson-display text-sm",
      "heading-xs": "font-johnson-display text-xs",
      "heading-card":
        "font-johnson-display text-[2rem] hover:underline hover:text-red",
      "body-xl": "font-johnson-text text-[1.75rem]",
      "body-xl-italic": "font-johnson-text text-[1.75rem] italic",
      "body-xl-medium": "font-johnson-text text-[1.75rem] font-semibold",
      "body-lg": "font-johnson-text text-[1.25rem]",
      "body-md": "font-johnson-text text-[1rem]",
      "body-sm": "font-johnson-text text-[0.875rem]",
      "body-xs": "font-johnson-text text-[0.75rem]",
      "body-label": "font-johnson-text text-[1rem]",
      legal: "font-johnson-text text-[0.75rem]",
      "legal-button": "font-johnson-text text-[1rem]",
      link: "font-johnson-text text-[1rem] hover:underline",
      "footer-header-card": "font-johnson-text text-[0.875rem]",
    },
  },
  defaultVariants: {
    variant: "body-md",
    color: "primary",
  },
});

const Typography = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof typographyVariants> & { as?: React.ElementType }
>(({ color, children, as, variant, className, ...props }, ref) => {
  const Component = as ?? "p";

  return (
    <Component
      ref={ref}
      {...props}
      className={cn(typographyVariants({ color, variant }), className)}
    >
      {children}
    </Component>
  );
});

Typography.displayName = "Typography";

export { Typography };
