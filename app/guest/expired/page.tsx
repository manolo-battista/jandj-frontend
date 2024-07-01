import React from "react";
import { Typography } from "@/components/ui/typography";
import NeedSupport from "@/components/common/need-support";
import Image from "next/image";

export default function Page() {
  return (
    <div className="text-center flex flex-col items-center md:p-8">
      <Typography variant="heading-lg" color="red">
        this Link has expired
      </Typography>

      <div className="my-4 md:mt-0 flex justify-center">
        <NeedSupport />
      </div>

      <div className="w-full h-[360px] bg-[url('/img/guest/link-expired.png')] bg-no-repeat bg-cover bg-size" />
    </div>
  );
}
