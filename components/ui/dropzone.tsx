import React, { ReactNode, useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { formatBytes } from "@/utils/file";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
interface DropzoneProps {
  value?: any;
  label?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  onChange?(files: File[]): void;
  icon?: ReactNode;
  accept?: Accept;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

interface AcceptedFile extends File {
  path?: string;
}

const maxSize = 5243000; // 5Mb as bytes
export default function Dropzone(props: DropzoneProps) {
  const {
    value,
    title = "Select a file from your device",
    description = "JPG, PNG or PDF, file size no more than 10MB",
    label,
    onChange,
    icon,
    accept,
    disabled,
    className,
    children,
  } = props;
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept,
    multiple: false,
    maxSize,
    onDrop: (acceptedFiles, fileRejections) => {
      setSelectedFiles([...selectedFiles, ...acceptedFiles]);
      onChange?.([...selectedFiles, ...acceptedFiles]);
      fileRejections.forEach((file) => {
        file.errors.forEach((err) => {
          if (err.code === "file-too-large") {
            // TODO: file too large
          }

          if (err.code === "file-invalid-type") {
            // TODO: file invalid type
          }
        });
      });
    },
  });

  return (
    <>
      {label}
      <section>
        <div
          {...getRootProps({ className: "dropzone" })}
          className={cn(
            "flex min-h-20 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-gray p-8 text-center duration-75 hover:border-red md:min-h-[40px]",
            selectedFiles.length > 0 && "flex-row gap-2 md:min-h-[80px]",
            disabled && "pointer-events-none opacity-60",
            className,
          )}
        >
          <input {...getInputProps()} />
          {icon ?? <Icon.UploadCloud className="mb-2 w-10 fill-red" />}
          <div
            className={cn(
              "text-center",
              selectedFiles.length > 0 && "flex-1 text-left",
            )}
          >
            <Typography variant="body-md">{title}</Typography>
            <Typography variant="body-sm" color="inverse">
              {description}
            </Typography>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
