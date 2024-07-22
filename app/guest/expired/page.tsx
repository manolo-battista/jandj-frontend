import React from "react";
import { Typography } from "@/components/ui/typography";
import NeedSupport from "@/components/common/need-support";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center text-center md:p-8">
      <Typography variant="heading-lg" color="red">
        this Link has expired
      </Typography>

      <div className="my-4 flex justify-center md:mt-0">
        <NeedSupport />
      </div>

      <div className="bg-size h-[360px] w-full bg-[url('/img/guest/link-expired.png')] bg-cover bg-no-repeat" />
    </div>
  );
}
