import AvatarBadge from "../avatar-badge";
import Icon from "@/components/ui/icon";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { formatBytes } from "@/utils/file";
import { cn } from "@/lib/utils";
import isFileDateExpired from "@/utils/isFileDateExpired";
import { getFormattedDate } from "@/utils/get-formatted-date";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DropzoneProps } from "@/components/ui/dropzone";

export default function FileCard({ file }: { file?: File }) {
  return (
    <div className="relative w-[300px]">
      {file ? (
        <FileAlreadyLoaded file={file} partecipantName="Dott. Nome Cognome" />
      ) : (
        <LoadFile partecipantName="Dott. Nome Cognome" />
      )}
    </div>
  );
}

const LoadFile = (props: DropzoneProps & { partecipantName: string }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { accept, disabled, children, onChange, partecipantName } = props;
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept,
    multiple: false,
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
    <section>
      <div
        {...getRootProps({ className: "dropzone" })}
        className={cn(
          "border-graytext-center justify-centerborder-2 flex h-full min-h-20 cursor-pointer flex-col items-center border-dashed duration-75 hover:border-red md:min-h-[40px]",
        )}
      >
        {partecipantName && (
          <>
            <div className="absolute top-0 flex h-10 w-full justify-between bg-gray-900 opacity-50"></div>
            <div className="absolute top-0 flex h-10 w-full items-center justify-between px-4">
              <AvatarBadge
                name="Dott. Nome Cognome"
                textClassName="text-white"
              />
            </div>
          </>
        )}
        <input {...getInputProps()} />
        <div className="flex h-[300px] flex-col items-center justify-center">
          <Button>Richiedi via email</Button>
          <Button variant="outlined" className="mt-4">
            Carica una nuova versione
          </Button>
        </div>
        <div className="w-full bg-gray-100 p-6">
          <Typography variant={"heading-xs"}>{partecipantName}_CV</Typography>
          <Typography variant="body-sm" color="inverse" className="mt-4">
            File Mancante
          </Typography>
        </div>
      </div>
    </section>
  );
};

const FileAlreadyLoaded = ({
  file,
  partecipantName,
}: {
  file: File;
  partecipantName?: string;
}) => {
  const dropDownItemsStyle = "hover:bg-gray-200 p-2";
  const isFileExpired = isFileDateExpired(file);
  return (
    <div className="min-h-full">
      {partecipantName && (
        <>
          <div className="absolute top-0 flex h-10 w-full justify-between bg-gray-900 opacity-50"></div>
          <div className="absolute top-0 flex h-10 w-full items-center justify-between px-4">
            <AvatarBadge name="Dott. Nome Cognome" textClassName="text-white" />
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
      <Image
        src="/dev/doc_template.png"
        className="min-h-[300px] object-cover"
        width={500}
        height={300}
        alt="Doc template"
      />
      <div className="bg-gray-100 p-6">
        <Typography variant={"heading-xs"}>{file?.name}</Typography>
        <Typography variant="body-sm" color="inverse" className="mt-4">
          pdf • {formatBytes(140000)} •{" "}
          <span className={cn(isFileExpired && "text-yello-500")}>
            {getFormattedDate(new Date())}
            {isFileExpired && <Icon.Info className={"text-yellow-500"} />}
          </span>
        </Typography>
      </div>
    </div>
  );
};
