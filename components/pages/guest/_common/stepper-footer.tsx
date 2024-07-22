import { Typography } from "@/components/ui/typography";
import React, { ReactNode } from "react";

interface StepperFooterProps {
  message: string;
  action: ReactNode;
}
export default function StepperFooter(props: StepperFooterProps) {
  const { message, action } = props;
  return (
    <div className="fixed bottom-0 left-0 flex w-full flex-col items-center border-t bg-white p-2 md:relative md:mt-8 md:flex-row md:border-none md:p-0">
      <Typography
        variant="body-label"
        className="mb-2 flex-1 text-center md:mb-0 md:text-left"
      >
        {message}
      </Typography>
      {action}
    </div>
  );
}
