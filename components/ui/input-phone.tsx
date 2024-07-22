import * as React from "react";
import { cn } from "@/lib/utils";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import { Typography } from "@/components/ui/typography";
import { cva, VariantProps } from "class-variance-authority";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const inputPhoneVariants = cva("h-10 px-3 py-2 indent-10", {
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

export interface InputPhoneProps
    extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'>,
        VariantProps<typeof inputPhoneVariants> {
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
    onChange?(phone: string): void
}

const InputPhone = React.forwardRef<HTMLInputElement, InputPhoneProps>(
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
            onChange,
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
                        <PhoneInput
                            country={'it'}
                            inputProps={{
                                className: cn(inputPhoneVariants({ variant }), hasError && 'border-error text-error'),
                            }}
                            {...props}
                            buttonClass={cn('!rounded-none !border-0 !border-b !border-gray')}
                            onChange={phone => onChange?.(phone)}
                        />
                    ) : (
                        <Typography
                            variant="body-sm"
                            className={cn(inputPhoneVariants({ variant }))}
                        >
                            {props.value}
                        </Typography>
                    )}
                    {endIcon && <div className="absolute right-3 top-2">{endIcon}</div>}
                </div>
                <Typography variant="body-xs" className={cn("mt-1", hasError && 'text-error')}>
                    {helperText}
                </Typography>
            </div>
        );
    },
);
InputPhone.displayName = "InputPhone";

export { InputPhone };
