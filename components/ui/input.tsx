import * as React from "react";
import { cn } from "@/lib/utils";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import { Typography } from "@/components/ui/typography";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva("h-10 px-3 py-2", {
  variants: {
    variant: {
      filled:
        "bg-background-active border-b border-gray placeholder-gray flex h-10 w-full px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
      outlined:
        "bg-background placeholder:text-muted-foreground placeholder:text-gray flex h-10 w-full rounded-md border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  readOnly?: boolean;
  value?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: HTMLInputElement["placeholder"];
  required?: boolean;
  hasError?: boolean;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      required,
      label,
      variant,
      readOnly,
      startIcon,
      children,
      endIcon,
      className,
      type,
      hasError,
      helperText,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="flex flex-col">
        {label && (
          <Typography variant="legal" className="mb-1">
            {label}
            {required && <span className="text-red">*</span>}
          </Typography>
        )}
        <div className={cn("relative w-full", className)}>
          {startIcon && (
            <div className="absolute left-3 top-2">{startIcon}</div>
          )}
          {!readOnly ? (
            <input
              type={type}
              className={cn(
                inputVariants({ variant }),
                hasError && "border-error text-error",
              )}
              ref={ref}
              {...props}
              onChange={(e) => console.log(e.target.value)}
            />
          ) : (
            <Typography
              variant="body-sm"
              className={cn(inputVariants({ variant }))}
            >
              {props.value}
            </Typography>
          )}
          {endIcon && <div className="absolute right-3 top-2">{endIcon}</div>}
        </div>
        <Typography
          variant="body-xs"
          className={cn("mt-1", hasError && "text-error")}
        >
          {helperText}
        </Typography>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
