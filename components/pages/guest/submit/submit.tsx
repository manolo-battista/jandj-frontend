import { Typography } from "@/components/ui/typography";
import React from "react";
import Image from "next/image";

export default function Submit() {
  return (
    <div>
      <Typography variant="heading-lg" color="red" className="text-center">
        Your presence is confirmed!
      </Typography>
      <Typography variant="body-lg" className="text-center">
        We look forward to have you as our guest!
      </Typography>

      <div className="mt-8 flex justify-center">
        <Image
          src="/img/guest/submit-illustration.svg"
          width={400}
          height={400}
          alt="Presence confirmed"
        />
      </div>
    </div>
  );
}
