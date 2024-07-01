import { twMerge } from "tailwind-merge";
import Icon from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import { formatBytes } from "@/utils/file";
import { Progress } from "@/components/ui/progress";
import React from "react";

interface UploadingFileProps {
  disabled?: boolean;
  file: { path?: string; size: number };
}
const UploadedFile = (props: UploadingFileProps) => {
  const { file, disabled } = props;
  return (
    <li
      className={twMerge(
        "flex gap-2 text-xs",
        disabled && "pointer-events-none opacity-60",
      )}
      key={file.path}
    >
      <div className="bg-background-active w-full text-md flex items-center gap-2 p-4 rounded-md">
        <Icon.Document className="w-8 fill-red" />
        <div className="w-full flex flex-col">
          <div className="flex">
            <Typography variant="body-sm" className="text-gray flex-1">
              {file.path}
            </Typography>
            <Typography variant="body-sm">{formatBytes(file.size)}</Typography>
          </div>
        </div>
      </div>
    </li>
  );
};

export default UploadedFile;