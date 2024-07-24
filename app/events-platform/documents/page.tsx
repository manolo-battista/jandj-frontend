import React from "react";
import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
import DocumentCard from "@/components/common/cards/document-card";
import ActionBarPlatform from "@/components/layout/platform/action-bar-platform";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import NewTemplateDialog from "@/components/pages/events-platform/documents/new-template-dialog";
export default function Page() {
  return (
    <>
      <NavbarPlatform
        title={
          <>
            <Typography variant="body-xl" color="red">
              Hello Annie!
            </Typography>
            <Typography variant="body-lg">Welcome to your dashboard</Typography>
          </>
        }
      />
      <ActionBarPlatform
      // onSearch={(searchedText) => console.log("Cerca ", searchedText)}
      >
        <NewTemplateDialog
          trigger={
            <Button
              color="secondary"
              size="sm"
              variant="outlined"
              endIcon={<Icon.Add className="h-4 w-4" />}
            >
              Carica un nuovo template
            </Button>
          }
        />
      </ActionBarPlatform>
      <PageContainerPlatform>
        <Typography variant="heading-card" color="red">
          Template
        </Typography>
        <div className="mt-6 grid grid-cols-12 gap-6">
          {[
            "Agenda Evento",
            "Attestato di Partecipazione",
            "Curriculum Vitae",
            "Lettera per Anagrafe delle Prestazioni",
            "Minute Evento",
            "Manifestazione d’Interesse",
            "Liberatoria per Foto e Video",
            "Questionario Incarichi",
            "Questionario Incarichi",
            "Questionario Incarichi",
          ].map((template) => (
            <DocumentCard title={template} key={template} />
          ))}
        </div>
      </PageContainerPlatform>
    </>
  );
}
