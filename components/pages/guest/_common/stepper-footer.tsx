import { Typography } from "@/components/ui/typography";
import React, { ReactNode } from "react";

interface StepperFooterProps {
  message: string;
  action: ReactNode;
}
export default function StepperFooter(props: StepperFooterProps) {
  const { message, action } = props;
  return (
    <div className="flex flex-col bg-white fixed w-full left-0 bottom-0 p-2 border-t items-center md:mt-8 md:relative md:border-none md:p-0 md:flex-row">
      <Typography
        variant="body-label"
        className="flex-1 text-center md:text-left mb-2 md:mb-0"
      >
        {message}
      </Typography>
      {action}
    </div>
  );
}
