import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ReactNode } from "react";

const buttonVariants = cva(
  "rounded-full cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outlined: "",
        link: "",
      },
      color: {
        primary: "",
        secondary: "",
        tertiary: "",
        success: "",
        error: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
    },
    compoundVariants: [
      //   default
      {
        color: "primary",
        variant: "default",
        className: "bg-red text-white hover:bg-red-600",
      },
      //   outlined
      {
        color: "primary",
        variant: "outlined",
        className: "border border-red text-red",
      },
      //   link
      {
        color: "primary",
        variant: "link",
        className: "text-red",
      },

      // secondary
      //   outlined
      {
        color: "secondary",
        variant: "outlined",
        className:
          "border border-gray-800 text-gray-800 hover:border-transparent hover:bg-gray-300",
      },
    ],
    defaultVariants: {
      variant: "default",
      color: "primary",
      size: "default",
    },
  },
);

// @ts-ignore
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  color?: "primary" | "secondary";
  asChild?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      startIcon,
      endIcon,
      color,
      className,
      variant,
      size,
      asChild = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <button
        className={cn(
          buttonVariants({ variant, color, className, size }),
          disabled && "bg-gray-200 text-gray-400 border-0 cursor-not-allowed",
        )}
        ref={ref}
        {...props}
      >
        {startIcon}
        <Typography
          // @ts-ignore
          color={cn(
            "on-color",
            (variant === "outlined" || variant === "link") && "red",
          )}
          className={cn(startIcon && "ml-2", endIcon && "mr-2")}
        >
          {children}
        </Typography>
        {endIcon}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
