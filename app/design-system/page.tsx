import React from "react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Divider from "@/components/ui/divider";

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

      <Divider />

      <Typography variant="heading-lg" className="mt-4">
        Core Color Tokens
      </Typography>
      <Typography variant="body-lg">
        Use color to create meaningful experiences while also expressing
        hierarchy, state, and brand identity
      </Typography>
      <div className="flex">
        <div className={cn("bg-red-100", colorCommonStyle)} />
        <div className={cn("bg-red-200", colorCommonStyle)} />
        <div className={cn("bg-red-300", colorCommonStyle)} />
        <div className={cn("bg-red-400", colorCommonStyle)} />
        <div className={cn("bg-red", colorCommonStyle)} />
        <div className={cn("bg-red-600", colorCommonStyle)} />
        <div className={cn("bg-red-700", colorCommonStyle)} />
        <div className={cn("bg-red-800", colorCommonStyle)} />
        <div className={cn("bg-red-900", colorCommonStyle)} />
      </div>
      <div className="flex">
        <div className={cn("bg-gray-100", colorCommonStyle)} />
        <div className={cn("bg-gray-200", colorCommonStyle)} />
        <div className={cn("bg-gray-300", colorCommonStyle)} />
        <div className={cn("bg-gray-400", colorCommonStyle)} />
        <div className={cn("bg-gray", colorCommonStyle)} />
        <div className={cn("bg-gray-600", colorCommonStyle)} />
        <div className={cn("bg-gray-700", colorCommonStyle)} />
        <div className={cn("bg-gray-800", colorCommonStyle)} />
        <div className={cn("bg-gray-900", colorCommonStyle)} />
      </div>
      <div className="flex">
        <div className={cn("bg-blue-100", colorCommonStyle)} />
        <div className={cn("bg-blue-200", colorCommonStyle)} />
        <div className={cn("bg-blue-300", colorCommonStyle)} />
        <div className={cn("bg-blue-400", colorCommonStyle)} />
        <div className={cn("bg-blue", colorCommonStyle)} />
        <div className={cn("bg-blue-600", colorCommonStyle)} />
        <div className={cn("bg-blue-700", colorCommonStyle)} />
        <div className={cn("bg-blue-800", colorCommonStyle)} />
        <div className={cn("bg-blue-900", colorCommonStyle)} />
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

      <Divider />
    </div>
  );
}
