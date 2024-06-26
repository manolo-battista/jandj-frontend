import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { ReactNode } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        outlined: "",
        secondary: "",
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
        className:
          "rounded-full bg-red text-white hover:bg-red-600 cursor-pointer",
      },
      //   outlined
      {
        color: "primary",
        variant: "outlined",
        className:
          " rounded-full bg-white border border-red text-red cursor-pointer",
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
  color?: "primary";
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
          color={cn("on-color", variant === "outlined" && "red")}
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
