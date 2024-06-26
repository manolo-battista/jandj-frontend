import { Typography } from "@/components/ui/typography";
import React, { ReactNode } from "react";

interface StepperFooterProps {
  message: string;
  action: ReactNode;
}
export default function StepperFooter(props: StepperFooterProps) {
  const { message, action } = props;
  return (
    <div className="mt-8 flex">
      <Typography variant="body-lg" className="flex-1">
        {message}
      </Typography>
      {action}
    </div>
  );
}
