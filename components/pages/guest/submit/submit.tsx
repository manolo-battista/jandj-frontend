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

      <div className="flex justify-center mt-8">
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
