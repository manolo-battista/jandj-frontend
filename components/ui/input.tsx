import * as React from "react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ startIcon, children, endIcon, className, type, ...props }, ref) => {
    return (
      <div className={cn("relative w-full", className)}>
        {startIcon && <div className="absolute left-3 top-2">{startIcon}</div>}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          )}
          ref={ref}
          {...props}
        />
        {endIcon && <div className="absolute right-3 top-2">{endIcon}</div>}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
