import React, { ReactNode, useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { Typography } from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { formatBytes } from "@/utils/file";
import maxSize from "@/constants/max-file-size";
import { UploadingFileProps, UploadingStep } from "@/types/customDropzone";
import { Progress } from "@/components/ui/progress";

export interface DropzoneProps {
  value?: any;
  label?: string;
  onChange?(files: File): void;
  icon?: ReactNode;
  accept?: Accept;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  orientation?: "vertical" | "horizontal";
}

export default function RowDropzone(props: DropzoneProps) {
  const { label, onChange, icon, accept, disabled, className, children } =
    props;
  const [loadSteps, setLoadSteps] = useState<
    "hold" | "choose_file" | "loading" | "show_file" | "error"
  >("hold");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept,
    multiple: false,
    maxSize,
    onDrop: (acceptedFiles, fileRejections) => {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      onChange?.(file);
      if (loadSteps !== "show_file") {
        setLoadSteps("loading");
      }
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
      <section
        className={cn(
          "relative flex h-24 cursor-pointer items-center justify-between gap-1 border-2 border-dashed border-gray duration-75 hover:border-red",
          loadSteps === "loading" && "border-none",
          loadSteps === "show_file" && "cursor-auto border-none bg-gray-100",
          className,
        )}
      >
        {loadSteps === "hold" && (
          <>
            {label && (
              <div className="flex h-full w-2/6 items-center justify-center bg-gray-200 text-center">
                <Typography variant="heading-xs">{label}</Typography>
              </div>
            )}
            <div
              {...getRootProps({ className: "dropzone" })}
              className="w-full"
            >
              <input {...getInputProps()} />
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-4">
                  {icon ?? <Icon.UploadCloud className="mb-2 w-10 fill-red" />}
                  <div className="">
                    <Typography variant="body-md">
                      Seleziona un file o trascinalo qui
                    </Typography>
                    <Typography variant="body-sm" color="inverse">
                      JPG, PNG o PDF, dimensione non superiore a 10MB
                    </Typography>
                  </div>
                </div>
                <Button variant="outlined">Seleziona file</Button>
              </div>
            </div>
          </>
        )}
        {loadSteps === "loading" && selectedFile && (
          <LoadingFile file={selectedFile} setLoadSteps={setLoadSteps} />
        )}
        {loadSteps === "show_file" && selectedFile && (
          <div className="flex h-full w-full items-center justify-between gap-4 p-8">
            <div className="flex items-center gap-3">
              <Icon.Document className="w-6 fill-red" />
              <Typography variant="body-sm" className="flex">
                {selectedFile?.name}
              </Typography>
              <Typography variant="body-sm">|</Typography>
              <Typography variant="body-sm" color="inverse">
                {label}
              </Typography>
              <Typography variant="body-sm" color="inverse">
                •
              </Typography>

              <Typography color="red" variant="body-sm">
                Anteprima
              </Typography>
            </div>

            <div
              {...getRootProps({ className: "dropzone" })}
              className="flex items-center gap-2"
            >
              <input {...getInputProps()} />
              <Typography
                variant="body-sm"
                className="cursor-pointer"
                color="red"
              >
                Sostituisci Documento
              </Typography>
              •<Typography variant="body-sm">{formatBytes(140000)}</Typography>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

const LoadingFile = (props: UploadingFileProps) => {
  const { file, disabled } = props;

  setTimeout(() => {
    props.setLoadSteps?.("show_file");
  }, 1000);

  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 p-8">
      <div className="flex items-center gap-2">
        <Icon.Document className="w-8 fill-red" />
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between">
            <Typography variant="body-sm" className="flex-1 text-gray">
              {file.name}
            </Typography>
            <Typography variant="body-sm">{formatBytes(file.size)}</Typography>
          </div>
          <Progress value={100} className="mt-1" />
        </div>
      </div>
    </div>
  );
};
