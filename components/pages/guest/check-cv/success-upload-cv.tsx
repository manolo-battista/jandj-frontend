import { Button } from "@/components/ui/button";
import Dropzone from "@/components/ui/dropzone";
import React, { useState } from "react";
import NeedSupport from "@/components/common/need-support";
import UploadingFile from "@/components/common/file/uploading-file";
import UploadedFile from "@/components/common/file/uploaded-file";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function SuccessUploadCv() {
  return (
    <div className="text-center">
      <Typography variant="body-lg">
        We stored your latest CV document in our systems
        <div className="py-8 pb-20 flex justify-center">
          <Image
            src="/img/guest/success-upload.svg"
            width={100}
            height={100}
            alt="Success upload"
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Button className="min-w-[160px]">Continue</Button>
        </div>
      </Typography>
    </div>
  );
}
