import React from "react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export default function Page() {
  const colorCommonStyle = "border w-8 h-8";
  return (
    <div>
      <Typography variant="heading-lg" className="mt-4">
        Typography Tokens
      </Typography>
      <Typography variant="body-lg" className="text-primary">
        Use typography to present your design and content as clearly and
        efficiently as possible.
      </Typography>
      <Typography variant="heading-xl">Heading XLarge</Typography>
      <Typography variant="heading-lg">Heading Large</Typography>
      <Typography variant="heading-md">Heading Medium</Typography>
      <Typography variant="heading-sm">Heading Small</Typography>
      <Typography variant="heading-xs">Heading XSmall</Typography>
      <Typography variant="heading-card">Heading Card</Typography>
      <Typography variant="body-xl">Body XLarge</Typography>
      <Typography variant="body-xl-medium">Body XLarge Medium</Typography>
      <Typography variant="body-xl-italic">Body XLarge Italic</Typography>
      <Typography variant="body-lg">Body Large</Typography>
      <Typography variant="body-md">Body Medium</Typography>
      <Typography variant="body-sm">Body Small</Typography>
      <Typography variant="body-xs">Body Extra Small</Typography>
      <Typography variant="legal">Legal</Typography>
      <Typography variant="legal-button">Label Button</Typography>
      <Typography variant="link">Link</Typography>

      <Typography variant="heading-lg" className="mt-4">
        Core Color Tokens
      </Typography>
      <Typography variant="body-lg">
        Use color to create meaningful experiences while also expressing
        hierarchy, state, and brand identity
      </Typography>
      <div className="flex">
        <div className={cn("bg-primary-100", colorCommonStyle)} />
        <div className={cn("bg-primary-200", colorCommonStyle)} />
        <div className={cn("bg-primary-300", colorCommonStyle)} />
        <div className={cn("bg-primary-400", colorCommonStyle)} />
        <div className={cn("bg-primary", colorCommonStyle)} />
        <div className={cn("bg-primary-600", colorCommonStyle)} />
        <div className={cn("bg-primary-700", colorCommonStyle)} />
        <div className={cn("bg-primary-800", colorCommonStyle)} />
        <div className={cn("bg-primary-900", colorCommonStyle)} />
      </div>
      <div className="flex">
        <div className={cn("bg-secondary-100", colorCommonStyle)} />
        <div className={cn("bg-secondary-200", colorCommonStyle)} />
        <div className={cn("bg-secondary-300", colorCommonStyle)} />
        <div className={cn("bg-secondary-400", colorCommonStyle)} />
        <div className={cn("bg-secondary", colorCommonStyle)} />
        <div className={cn("bg-secondary-600", colorCommonStyle)} />
        <div className={cn("bg-secondary-700", colorCommonStyle)} />
        <div className={cn("bg-secondary-800", colorCommonStyle)} />
        <div className={cn("bg-secondary-900", colorCommonStyle)} />
      </div>
      <div className="flex">
        <div className={cn("bg-tertiary-100", colorCommonStyle)} />
        <div className={cn("bg-tertiary-200", colorCommonStyle)} />
        <div className={cn("bg-tertiary-300", colorCommonStyle)} />
        <div className={cn("bg-tertiary-400", colorCommonStyle)} />
        <div className={cn("bg-tertiary", colorCommonStyle)} />
        <div className={cn("bg-tertiary-600", colorCommonStyle)} />
        <div className={cn("bg-tertiary-700", colorCommonStyle)} />
        <div className={cn("bg-tertiary-800", colorCommonStyle)} />
        <div className={cn("bg-tertiary-900", colorCommonStyle)} />
      </div>

      <div className="flex">
        <div className={cn("bg-success-100", colorCommonStyle)} />
        <div className={cn("bg-success-200", colorCommonStyle)} />
        <div className={cn("bg-success-300", colorCommonStyle)} />
        <div className={cn("bg-success-400", colorCommonStyle)} />
        <div className={cn("bg-success", colorCommonStyle)} />
        <div className={cn("bg-success-600", colorCommonStyle)} />
        <div className={cn("bg-success-700", colorCommonStyle)} />
        <div className={cn("bg-success-800", colorCommonStyle)} />
        <div className={cn("bg-success-900", colorCommonStyle)} />
      </div>

      <div className="flex">
        <div className={cn("bg-warning-100", colorCommonStyle)} />
        <div className={cn("bg-warning-200", colorCommonStyle)} />
        <div className={cn("bg-warning-300", colorCommonStyle)} />
        <div className={cn("bg-warning-400", colorCommonStyle)} />
        <div className={cn("bg-warning", colorCommonStyle)} />
        <div className={cn("bg-warning-600", colorCommonStyle)} />
        <div className={cn("bg-warning-700", colorCommonStyle)} />
        <div className={cn("bg-warning-800", colorCommonStyle)} />
        <div className={cn("bg-warning-900", colorCommonStyle)} />
      </div>

      <div className="flex">
        <div className={cn("bg-error-100", colorCommonStyle)} />
        <div className={cn("bg-error-200", colorCommonStyle)} />
        <div className={cn("bg-error-300", colorCommonStyle)} />
        <div className={cn("bg-error-400", colorCommonStyle)} />
        <div className={cn("bg-error", colorCommonStyle)} />
        <div className={cn("bg-error-600", colorCommonStyle)} />
        <div className={cn("bg-error-700", colorCommonStyle)} />
        <div className={cn("bg-error-800", colorCommonStyle)} />
        <div className={cn("bg-error-900", colorCommonStyle)} />
      </div>

      <div className="flex">
        <div className={cn("bg-neutral", colorCommonStyle)} />
        <div className={cn("bg-neutral-black", colorCommonStyle)} />
      </div>

      <Typography variant="heading-lg" className="mt-4">
        Semantic Colors
      </Typography>
      <Typography variant="body-lg">
        Detailed description according the title
      </Typography>
      <div className={cn("bg-background", colorCommonStyle)} />
      <div className={cn("bg-background-active", colorCommonStyle)} />
      <div className={cn("bg-layout-header", colorCommonStyle)} />
      <div className={cn("bg-layout-footer", colorCommonStyle)} />
      <div className={cn("bg-border", colorCommonStyle)} />
    </div>
  );
}
