import React, { ReactNode, useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { formatBytes } from "@/utils/file";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {horizontal} from "@hello-pangea/dnd/src/state/axis";
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
  orientation?: "vertical" | "horizontal"
}

interface AcceptedFile extends File {
  path?: string;
}

const maxSize = 5243000; // 5Mb as bytes
export default function Dropzone(props: DropzoneProps) {
  const {
    value,
    orientation = 'vertical',
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
            "min-h-20 md:min-h-[40px] flex cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed border-gray p-8 text-center duration-75 hover:border-red",
            selectedFiles.length > 0 || orientation == 'horizontal' && "flex-row md:min-h-[80px] gap-2",
            disabled && "pointer-events-none opacity-60",
            className,
          )}
        >
          <input {...getInputProps()} />
          {icon ?? <Icon.UploadCloud className="w-10 mb-2 fill-red" />}
          <div
            className={cn(
              "text-center",
              selectedFiles.length > 0 || orientation == 'horizontal' && "text-left flex-1",
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
