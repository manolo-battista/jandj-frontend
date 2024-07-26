import React, { ReactNode, useState } from "react";
import { useDropzone, Accept } from "react-dropzone";
import { Typography } from "@/components/ui/typography";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import maxSize from "@/constants/max-file-size";
import { Button } from "@/components/ui/button";
import { formatBytes } from "@/utils/file";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { getFormattedDate } from "@/utils/get-formatted-date";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AvatarBadge from "../avatar-badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import isFileDateExpired from "@/utils/isFileDateExpired";
import { UploadingFileProps, UploadingStep } from "@/types/customDropzone";

interface CardDropzoneProps {
  value?: any;
  onChange?(file: File): void;
  accept?: Accept;
  disabled?: boolean;
  className?: string;
  file?: File;
  setLoadSteps?: UploadingStep;
  alreadyRequestViaEmail?: boolean;
  partecipantName?: string;
  enableOptions?: boolean;
}

export default function CardDropzone({
  className,
  file,
  alreadyRequestViaEmail,
  partecipantName,
  enableOptions,
}: CardDropzoneProps) {
  const [loadSteps, setLoadSteps] = useState<
    "hold" | "choose_file" | "loading" | "show_file" | "error"
  >(file ? "show_file" : "hold");
  const [selectedFile, setSelectedFile] = useState<File | null>(file ?? null);
  const [hasBeenRequested, setHasBeenRequested] = useState(
    alreadyRequestViaEmail ?? false,
  );

  return (
    <div
      className={cn(
        "border-dashe border-1 relative flex h-[400px] w-[300px] flex-col justify-between border-2 border-dashed border-gray bg-white",
        className,
        selectedFile && "border-none",
      )}
    >
      <NameAndOptionsOverlay name={partecipantName} options={enableOptions} />
      {loadSteps === "hold" && (
        <div className="flex h-full flex-col items-center justify-center gap-6">
          <RequestDocumentButton
            setIsAlreadyRequested={setHasBeenRequested}
            alreadyRequested={hasBeenRequested}
          />
          <Button
            variant="outlined"
            startIcon={<Icon.Upload className="h-6 w-6 text-red" />}
            onClick={() => setLoadSteps("choose_file")}
          >
            Carica una nuova versione
          </Button>
        </div>
      )}
      {loadSteps === "choose_file" && (
        <LoadNewFile
          onChange={(file) => setSelectedFile(file)}
          setLoadSteps={setLoadSteps}
        />
      )}
      {loadSteps === "loading" && selectedFile && (
        <UploadingFile setLoadSteps={setLoadSteps} file={selectedFile} />
      )}
      {loadSteps === "show_file" && selectedFile && (
        <FileUploaded file={selectedFile} />
      )}
      {loadSteps === "error" && <UploadignError />}

      <div className="w-full self-end bg-gray-100 p-6">
        <Typography variant="heading-sm" className="line-clamp-1">
          {file?.name ?? "FileName.text"}
        </Typography>
        <Typography variant="body-md" color="inverse">
          {selectedFile ? (
            <>
              pdf • {formatBytes(140000)} • {getFormattedDate(new Date())}
            </>
          ) : (
            "File Mancante"
          )}
        </Typography>
      </div>
    </div>
  );
}

const LoadNewFile = (props: CardDropzoneProps) => {
  const { value, onChange, accept, disabled, className } = props;
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    multiple: false,
    maxSize,
    onDrop: (acceptedFiles, fileRejections) => {
      const file = acceptedFiles[0];
      onChange?.(file);
      props.setLoadSteps?.("loading");
      fileRejections.forEach((file) => {
        file.errors.forEach((err) => {
          if (err.code === "file-too-large") {
            // TODO: file too large
          }

          if (err.code === "file-invalid-type") {
            // TODO: file invalid type
          }
          props.setLoadSteps?.("error");
        });
      });
    },
  });
  return (
    <>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="flex h-full flex-col items-center justify-center gap-4 p-8"
      >
        <input {...getInputProps()} />
        <Icon.Document className={"mb-2 h-10 w-10 text-red"} />
        <div className={cn("text-center")}>
          <Typography variant="body-md">
            Seleziona un file o trascinalo qui
          </Typography>
          <Typography variant="body-sm" color="inverse">
            JPG, PNG o PDF, dimensione non superiore a 10MB
          </Typography>
        </div>
        <Button
          variant="outlined"
          startIcon={<Icon.Upload className="h-6 w-6 text-red" />}
        >
          Seleziona File
        </Button>
      </div>
    </>
  );
};

const UploadingFile = (props: UploadingFileProps) => {
  const { file, disabled } = props;

  setTimeout(() => {
    props.setLoadSteps?.("show_file");
  }, 1000);

  return (
    <div className="flex h-full flex-col justify-center gap-4 p-8">
      <div className="flex items-center gap-2">
        <Icon.Document className="w-8 fill-red" />
        <div className="flex flex-col">
          <Typography variant="body-sm" className="flex-1 text-gray">
            {file.name}
          </Typography>
          <Typography variant="body-sm">{formatBytes(file.size)}</Typography>
        </div>
      </div>

      <Progress value={100} className="mt-1" />
    </div>
  );
};

const UploadignError = () => {
  return (
    <div className="flex h-full flex-col justify-center gap-4 p-8">
      <div className="flex items-center gap-2">
        <Icon.Close className="w-8 fill-red" />
        <div className="flex flex-col">
          <Typography variant="body-sm" className="flex-1 text-gray">
            Si è verificato un errore durante il caricamento del file
          </Typography>
        </div>
      </div>

      <Progress value={100} className="mt-1" />
    </div>
  );
};

const FileUploaded = ({ file }: { file: File }) => {
  return (
    <div className="relative flex h-full flex-col justify-center gap-4 p-8">
      <Image
        src="/dev/doc_template.png"
        className="object-cover"
        alt="Doc template"
        fill
      />
    </div>
  );
};

const RequestDocumentButton = ({
  alreadyRequested,
  setIsAlreadyRequested,
}: {
  alreadyRequested: boolean;
  setIsAlreadyRequested: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (alreadyRequested) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              startIcon={
                <Icon.Email
                  className={cn(
                    "h-6 w-6 text-white",
                    alreadyRequested && "text-gray",
                  )}
                />
              }
              disabled={alreadyRequested}
              onClick={() => setIsAlreadyRequested(true)}
            >
              Richiedi via email
            </Button>
          </TooltipTrigger>
          <TooltipContent className="max-w-[150px] text-balance bg-gray-900">
            <Typography variant="body-sm" color="on-color">
              Hai già mandato una richiesta di documenti al dr. Ulrich via email
              il 15 Giu 2024.
              <p
                className="cursor-pointer underline"
                onClick={() => console.log("invia")}
              >
                Invia di nuovo
              </p>
            </Typography>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  return (
    <Button
      startIcon={
        <Icon.Email
          className={cn("h-6 w-6 text-white", alreadyRequested && "text-gray")}
        />
      }
      disabled={alreadyRequested}
      onClick={() => setIsAlreadyRequested(true)}
    >
      Richiedi via email
    </Button>
  );
};

const NameAndOptionsOverlay = ({
  file,
  name,
  options,
}: {
  file?: File;
  name?: string;
  options?: boolean;
}) => {
  const dropDownItemsStyle = "hover:bg-gray-200 p-2";
  const shouldShowLayer = name || options;
  return (
    <>
      {shouldShowLayer && (
        <>
          <div className="absolute top-0 z-10 flex h-10 w-full justify-between bg-gray-900 opacity-50"></div>
          <div className="absolute top-0 z-20 flex h-10 w-full items-center justify-between px-4">
            {name && (
              <AvatarBadge
                name={name ?? "Nome e cognome"}
                textClassName="text-white"
              />
            )}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Icon.DotsMenu className="text-white" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-fit rounded-none bg-white shadow-md">
                <DropdownMenuItem
                  className={dropDownItemsStyle}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Typography variant="legal">Visualizza</Typography>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={dropDownItemsStyle}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Typography variant="legal">Scarica</Typography>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={dropDownItemsStyle}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Typography variant="legal">Sostituisci</Typography>
                </DropdownMenuItem>
                {file && isFileDateExpired(file) && (
                  <DropdownMenuItem
                    className={dropDownItemsStyle}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Typography variant="legal">
                      Indica come aggiornato
                    </Typography>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem
                  className={dropDownItemsStyle}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Typography variant="legal">Elimina</Typography>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
    </>
  );
};
