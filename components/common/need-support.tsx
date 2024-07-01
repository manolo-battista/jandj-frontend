import { Typography } from "@/components/ui/typography";
import React from "react";

export default function NeedSupport() {
  return (
    <Typography variant="body-label">
      Need human support?&nbsp;
      <span className="text-red hover:underline text-center md:text-left">
        Book an appointment
      </span>
    </Typography>
  );
}
