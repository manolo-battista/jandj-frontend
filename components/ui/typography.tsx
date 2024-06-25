import * as React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const typographyVariants = cva("", {
  variants: {
    variant: {
      "heading-xl": "johnson-display text-6xl",
      data: "text-typography-body text-5xl font-medium",
      "heading-lg":
        "text-typography-body text-4xl font-medium leading-[2.625rem]",
      "heading-md": "text-typography-body text-2xl font-medium leading-8",
      "heading-sm": "text-typography-body text-xl font-medium leading-6",
      body: "text-typography-body font-medium leading-6",
      "body-sm": "text-typography-body text-sm font-medium leading-5",
      "body-xs": "text-typography-body text-xs font-medium leading-[0.875rem]",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

const Typography = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> &
    VariantProps<typeof typographyVariants> & { as?: React.ElementType }
>(({ children, as, variant, className, ...props }, ref) => {
  const Component = as ?? "p";

  return (
    <Component
      ref={ref}
      {...props}
      className={cn(typographyVariants({ variant }), className)}
    >
      {children}
    </Component>
  );
});

Typography.displayName = "Typography";

export { Typography };
