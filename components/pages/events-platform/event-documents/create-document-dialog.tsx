import AvatarBadge from "@/components/common/avatar-badge";
import EventTypeCard from "@/components/common/cards/event-type-card";
import { SimpleDialog } from "@/components/common/simple-dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";

type CreateDocumentDialogStepperProps = {
  trigger: React.ReactNode;
};

type StepsProps =
  | "event-documents"
  | "partecipants"
  | "home"
  | "partecipant-documents";

type PartecipantProps = {
  name: string;
  role: string;
  onClick?: () => void;
};

export default function CreateDocumentDialog({
  trigger,
}: CreateDocumentDialogStepperProps) {
  const [activeStep, setActiveStep] = useState<StepsProps>("home");
  const [selectedPartecipant, setSelectedPartecipant] =
    useState<PartecipantProps | null>();
  return (
    <SimpleDialog trigger={trigger}>
      {activeStep === "home" && <HomeScreen setActiveStep={setActiveStep} />}
      {activeStep === "event-documents" && (
        <EventAttachementsScreen setActiveStep={setActiveStep} />
      )}
      {activeStep === "partecipants" && (
        <PartecipantsScreen
          setActiveStep={setActiveStep}
          setSelectedPartecipant={setSelectedPartecipant}
        />
      )}
      {activeStep === "partecipant-documents" && selectedPartecipant && (
        <PartecipantDocumentsScreen
          setActiveStep={setActiveStep}
          partecipant={selectedPartecipant}
        />
      )}
    </SimpleDialog>
  );
}

const HomeScreen = ({
  setActiveStep,
}: {
  setActiveStep: (step: StepsProps) => void;
}) => {
  return (
    <>
      <Typography variant="heading-md" color="red" className="mt-4">
        Carica un nuovo documento
      </Typography>
      <Typography variant="heading-sm" color="red" className="mt-4">
        Che tipo di documento vuoi aggiungere?
      </Typography>
      <div className="mt-6 flex justify-between gap-4">
        <EventTypeCard
          className="w-1/2 bg-gray-100"
          icon={<Icon.Star className="w-10 fill-red" />}
          title={"Allegati evento"}
          description={"Descrizione documenti evento"}
          action={
            <Button
              onClick={() => setActiveStep("event-documents")}
              endIcon={<Icon.ArrowRight className="text-white" />}
            >
              Seleziona
            </Button>
          }
        />
        <EventTypeCard
          className="w-1/2 bg-gray-100"
          icon={<Icon.Star className="w-10 fill-red" />}
          title={"Allegati evento"}
          description={"Descrizione documenti evento"}
          action={
            <Button
              onClick={() => setActiveStep("partecipants")}
              endIcon={<Icon.ArrowRight className="text-white" />}
            >
              Seleziona
            </Button>
          }
        />
      </div>
    </>
  );
};

const EventAttachementsScreen = ({
  setActiveStep,
}: {
  setActiveStep: (step: StepsProps) => void;
}) => {
  return (
    <>
      <BackButton onClick={() => setActiveStep("home")} />
      <Typography variant="heading-md" color="red" className="mt-4">
        Carica un nuovo documento
      </Typography>
    </>
  );
};

const PartecipantsScreen = ({
  setActiveStep,
  setSelectedPartecipant,
}: {
  setActiveStep: (step: StepsProps) => void;
  setSelectedPartecipant: React.Dispatch<
    React.SetStateAction<PartecipantProps | null | undefined>
  >;
}) => {
  const PartecipantRow = (partecipant: PartecipantProps) => {
    const { name, role, onClick } = partecipant;
    return (
      <div className="flex items-center justify-between p-3" onClick={onClick}>
        <AvatarBadge name={name} role={role} />
        <Button endIcon={<Icon.ArrowRight className="text-white" />}>
          Seleziona
        </Button>
      </div>
    );
  };

  return (
    <>
      <BackButton onClick={() => setActiveStep("home")} />
      <Typography variant="heading-md" color="red" className="mt-4">
        Allegati Partecipante
      </Typography>
      <div>
        <PartecipantRow
          name="Dott. Nome e Cognome"
          role="Specializzazione"
          onClick={() => {
            setSelectedPartecipant({
              name: "Dott. Nome e Cognome",
              role: "Specializzazione",
            });
            setActiveStep("partecipant-documents");
          }}
        />
      </div>
    </>
  );
};

const PartecipantDocumentsScreen = ({
  setActiveStep,
  partecipant,
}: {
  setActiveStep: (step: StepsProps) => void;
  partecipant: PartecipantProps;
}) => {
  return (
    <>
      <BackButton onClick={() => setActiveStep("partecipants")} />
      <Typography variant="heading-md" color="red" className="mt-4">
        {partecipant.name}
      </Typography>
    </>
  );
};

const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex cursor-pointer items-center gap-2" onClick={onClick}>
      <Icon.ArrowLeft className="w-8 fill-red" />
      <Typography variant="body-label" color="red">
        Indietro
      </Typography>
    </div>
  );
};
