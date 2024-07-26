import { Button } from "@/components/ui/button";
import CreateDocumentDialogStepper from "./create-document-dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import Divider from "@/components/ui/divider";
import AvatarProfile from "@/components/common/avatar-profile";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AvatarBadge from "@/components/common/avatar-badge";
import DocumentAttachedsDialog from "./document-attacheds-dialog";
import mockedFile from "@/constants/mockedFile";

const mockedPartecipantsAttacheds = [
  {
    name: "Curriculum",
    required: true,
    // create file array on delivered
    delivered: [mockedFile, mockedFile, mockedFile, mockedFile],
    missing: [mockedFile, mockedFile, mockedFile, mockedFile],
  },
  {
    name: "Questionario Incarichi",
    required: true,
    delivered: [mockedFile, mockedFile, mockedFile, mockedFile],
    missing: [mockedFile, mockedFile, mockedFile, mockedFile],
  },
  {
    name: "Privacy Agreement",
    delivered: [mockedFile, mockedFile, mockedFile, mockedFile],
    missing: [mockedFile, mockedFile, mockedFile, mockedFile],
  },
  {
    name: "Transfer of value",
    delivered: [mockedFile, mockedFile, mockedFile, mockedFile],
    missing: [mockedFile, mockedFile, mockedFile, mockedFile],
  },
  {
    name: "Service Performance Form",
    delivered: [mockedFile, mockedFile, mockedFile, mockedFile],
    missing: [mockedFile, mockedFile, mockedFile, mockedFile],
  },
];

export default function EventDocuments() {
  const [tabToShow, setTabToShow] = useState<
    "by-documents" | "by-partecipants"
  >("by-documents");
  return (
    <>
      <div className="mt-6 flex justify-between">
        <CreateDocumentDialogStepper
          trigger={
            <Button
              color="secondary"
              variant="outlined"
              size={"sm"}
              endIcon={<Icon.Add className="h-4 w-4" />}
            >
              Carica un nuovo documento
            </Button>
          }
        />
        <div className="flex gap-2">
          <Button
            color="secondary"
            variant="outlined"
            textVariant={"body-xs"}
            className={cn(
              "h-6",
              tabToShow === "by-documents"
                ? "border-gray text-gray"
                : "border-gray-800",
            )}
            size={"sm"}
            startIcon={<Icon.Document className="h-4 w-4" />}
            onClick={() => setTabToShow("by-documents")}
          >
            Per Documento
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            textVariant={"body-xs"}
            className={cn(
              "h-6",
              tabToShow === "by-partecipants"
                ? "border-gray text-gray"
                : "border-gray-800",
            )}
            size={"sm"}
            startIcon={<Icon.Person className="h-4 w-4" />}
            onClick={() => setTabToShow("by-partecipants")}
          >
            Per Partecipante
          </Button>
        </div>
      </div>
      <div className="mt-6">
        {tabToShow === "by-documents" ? (
          <ByDocumentsTab />
        ) : (
          <ByPartecipantsTab />
        )}
      </div>
    </>
  );
}

const ByDocumentsTab = () => {
  const [activeAttachments, setActiveAttachments] = useState<{
    delivered: File[];
    missing: File[];
  } | null>(null);
  const documentsRowDialogStyle = "cursor-pointer hover:bg-white group";

  const DocumentsRow = ({
    name,
    required,
    delivered = [],
    missing = [],
    className,
    onClick,
  }: {
    name: string;
    required?: boolean;
    delivered?: File[];
    missing?: File[];
    className?: string;
    onClick?: () => void;
  }) => {
    return (
      <div className={className} onClick={onClick}>
        <div className="grid grid-cols-12 gap-4 py-6">
          <div className="col-span-3 flex gap-2">
            <Icon.Document className="h-4 w-4" />
            <div className="mt-[-5px]">
              <Typography variant={"body-md"}>{name}</Typography>
              {required && (
                <Typography
                  variant={"body-xs"}
                  className="w-fit bg-red-200 px-1 text-red-700"
                >
                  Obbligatorio
                </Typography>
              )}
            </div>
          </div>
          <div
            className="col-span-3 flex cursor-pointer items-center gap-1"
            onClick={() => console.log("download file")}
          >
            <Icon.DownloadPdf className="text-red" />
            <Typography variant={"body-sm"} color="inverse">
              Template
            </Typography>
          </div>
          <div className="col-span-2 flex items-center">
            {delivered?.length > 0 && (
              <>
                {delivered.map((_, index) => (
                  <AvatarProfile
                    index={index}
                    key={index}
                    name="Utente Prova"
                    length={delivered.length}
                  />
                ))}
                <Typography
                  variant={"body-sm"}
                  color="inverse"
                  className="ml-2"
                >
                  Raccolti
                </Typography>
              </>
            )}
          </div>
          <div className="col-span-2 flex items-center">
            {missing?.length > 0 && (
              <>
                {missing.map((_, index) => (
                  <AvatarProfile
                    index={index}
                    key={index}
                    name="Utente Prova"
                    length={delivered.length}
                  />
                ))}
                <Typography
                  variant={"body-sm"}
                  color="inverse"
                  className="ml-2"
                >
                  Mancanti
                </Typography>
              </>
            )}
          </div>
        </div>
        <Divider className="mt-0 group-hover:bg-red" />
      </div>
    );
  };

  return (
    <>
      <Typography variant={"body-sm"} color="red">
        Allegati evento
      </Typography>
      <div className="mt-2">
        <DocumentsRow name={"Agenda"} />
        <DocumentsRow name={"DAP"} />
      </div>
      <Typography variant={"body-sm"} color="red" className="mt-6">
        Allegati Partecipante
      </Typography>
      <div className="mt-2">
        {mockedPartecipantsAttacheds.map((partecipant, index) => (
          <DocumentsRow
            key={index}
            name={partecipant.name}
            required={partecipant.required}
            delivered={partecipant.delivered}
            missing={partecipant.missing}
            className={documentsRowDialogStyle}
            onClick={() =>
              setActiveAttachments({
                delivered: partecipant.delivered,
                missing: partecipant.missing,
              })
            }
          />
        ))}
      </div>
      <DocumentAttachedsDialog
        isOpen={!!activeAttachments}
        onOpenChange={(open) => {
          if (!open) setActiveAttachments(null);
        }}
        attachments={activeAttachments}
      />
    </>
  );
};

const ByPartecipantsTab = () => {
  const iconStyle = "w-6 h-6 text-blue-700";
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-none">
          <TableHead className="w-[300px]">
            <Typography variant="body-sm">Partcipanti</Typography>
          </TableHead>
          <TableHead className="w-[200px]">
            <Typography variant="body-sm">Obbligatorio</Typography>
          </TableHead>
          <TableHead className="w-[200px]">
            <Typography variant="body-sm">Altri</Typography>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border-b-gray">
          <TableCell>
            <AvatarBadge name={"Dott. Mario Rossi"} />
          </TableCell>

          <TableCell>
            <div className="flex w-full gap-10">
              <div className="flex flex-col items-center">
                <Icon.Document className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  CV
                </Typography>
              </div>
              <div className="flex flex-col items-center">
                <Icon.DocumentPending className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  QI
                </Typography>
              </div>
            </div>
          </TableCell>

          <TableCell className="w-[300px]">
            <div className="flex w-full gap-10">
              <div className="flex flex-col items-center">
                <Icon.Document className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  SPF
                </Typography>
              </div>

              <div className="flex flex-col items-center">
                <Icon.DocumentPending className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  TOV
                </Typography>
              </div>

              <div className="flex flex-col items-center">
                <Icon.DocumentPending className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  Pub List
                </Typography>
              </div>
            </div>
          </TableCell>
        </TableRow>
        <TableRow className="border-b-gray">
          <TableCell>
            <AvatarBadge name={"Dott. Mario Rossi"} />
          </TableCell>

          <TableCell>
            <div className="flex w-full gap-10">
              <div className="flex flex-col items-center">
                <Icon.Document className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  CV
                </Typography>
              </div>
              <div className="flex flex-col items-center">
                <Icon.DocumentPending className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  QI
                </Typography>
              </div>
            </div>
          </TableCell>

          <TableCell className="w-[300px]">
            <div className="flex w-full gap-10">
              <div className="flex flex-col items-center">
                <Icon.Close className={cn(iconStyle, "text-red")} />
                <Typography variant="body-sm" color="inverse">
                  SPF
                </Typography>
              </div>

              <div className="flex flex-col items-center">
                <Icon.DocumentPending className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  TOV
                </Typography>
              </div>

              <div className="flex flex-col items-center">
                <Icon.Document className={iconStyle} />
                <Typography variant="body-sm" color="inverse">
                  Pub List
                </Typography>
              </div>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};