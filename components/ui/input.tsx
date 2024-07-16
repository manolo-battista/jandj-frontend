import * as React from "react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Typography } from "@/components/ui/typography";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  readOnly?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { readOnly, startIcon, children, endIcon, className, type, ...props },
    ref,
  ) => {
    const commonStyle = "h-10 px-3 py-2";
    return (
      <div className={cn("relative w-full", className)}>
        {startIcon && <div className="absolute left-3 top-2">{startIcon}</div>}
        {!readOnly ? (
          <input
            type={type}
            className={cn(
              commonStyle,
              "flex h-10 px-3 py-2 placeholder:text-muted-foreground w-full rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            )}
            ref={ref}
            {...props}
            onChange={(e) => console.log(e.target.value)}
          />
        ) : (
          <Typography className={cn(commonStyle)}>{props.value}</Typography>
        )}
        {endIcon && <div className="absolute right-3 top-2">{endIcon}</div>}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
