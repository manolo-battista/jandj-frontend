import DocumentCard from "@/components/common/cards/document-card";
import FileCard from "@/components/common/cards/file-card";
import CardDropzone from "@/components/common/dropzones/card-dropzone";
import { SimpleDialog } from "@/components/common/simple-dialog";
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import Dropzone from "@/components/ui/dropzone";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";

type DocumentAttachedsDialogProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => false | void;
  attachments?: {
    delivered: File[];
    missing: File[];
  } | null;
};

export default function DocumentAttachedsDialog({
  isOpen,
  onOpenChange,
  attachments,
}: DocumentAttachedsDialogProps) {
  const [files, setFiles] = useState<File[]>([]);
  console.log(files);
  return (
    <SimpleDialog isOpen={isOpen} onOpenChange={onOpenChange}>
      <Typography variant="heading-md" color={"red"} className="mt-4">
        Curriculum Vitae
      </Typography>
      <Alert variant="error">
        <AlertContent>
          <AlertTitle>Documenti mancanti</AlertTitle>
          <AlertDescription>
            Questi partecipanti devono validare o condividere “Curriculum
            Vitae”:
          </AlertDescription>
          {/* <AlertAction>Vedi dettagli</AlertAction> */}
        </AlertContent>
        <ul className="list-disc pl-20">
          <li>
            <Typography variant={"body-sm"}>Nome Cognome</Typography>
          </li>
          <li>
            <Typography variant={"body-sm"}>Nome Cognome</Typography>
          </li>
          <li>
            <Typography variant={"body-sm"}>Nome Cognome</Typography>
          </li>
        </ul>
      </Alert>

      <Typography variant="heading-sm" color={"red"} className="mt-4">
        Template
      </Typography>
      <DocumentCard title="CV Template" />

      <Typography variant="heading-sm" color={"red"} className="mt-10">
        Documenti dei partecipanti
      </Typography>
      <div className="flex flex-wrap gap-2">
        {attachments?.delivered.map((file, idx) => (
          <CardDropzone
            file={file}
            key={idx}
            enableOptions={true}
            partecipantName="Dott. Nome Cognome"
          />
        ))}
        {attachments?.missing.map((_, idx) => <CardDropzone key={idx} />)}
      </div>
    </SimpleDialog>
  );
}
