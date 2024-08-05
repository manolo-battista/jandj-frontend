import { Typography } from "@/components/ui/typography";
import React from "react";

type WelcomeMessageProps = {
  userName: string;
  message: string;
};

export default function WelcomeMessage({
  userName,
  message,
}: WelcomeMessageProps) {
  return (
    <>
      <Typography variant="body-xl" color="red">
        Ciao {userName}!
      </Typography>
      <Typography variant="body-lg">{message}</Typography>
    </>
  );
}
