"use client";

import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
import Icon from "@/components/ui/icon";
import EventTypeCard from "@/components/common/cards/event-type-card";
import { Button } from "@/components/ui/button";
import { IEventType } from "@/types/event";
import CreateCorporateEventDialog from "@/components/pages/events-platform/create-event/create-corporate-event-dialog";
import { useState } from "react";

export default function Page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const eventTypes: IEventType[] = [
    {
      icon: <Icon.Hospital className="w-10 fill-red" />,
      title: "Corporate & Policy",
      description:
        "Questi eventi includono eventi istituzionali, Patient Advocacy, J&J News, Media Collaboration",
      action: "internal",
    },
    {
      icon: <Icon.Euro className="w-10 fill-red" />,
      title: "Eventi promozionali",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consectetur turpis malesuada varius bibendum cras",
      action: "iconnect",
    },
    {
      icon: <Icon.Collaboration className="w-10 fill-red" />,
      title: "Advisory Board",
      description:
        "Eventi per migliorare l’assistenza ai pazienti condividendo informazioni tra un gruppo selezionato di esperti",
      action: "iconnect",
    },
    {
      icon: <Icon.HealthcareProvider className="w-10 fill-red" />,
      title: "Fee for Services",
      description:
        "Consulenza ad hoc altamente specializzata da parte di un gruppo selezionato di esperti",
      action: "iconnect",
    },
    {
      icon: <Icon.Education className="w-10 fill-red" />,
      title: "Congressi",
      description:
        "Eventi finalizzati alla promozione della conoscienza medico-scientifica",
      action: "iconnect",
    },
    {
      icon: <Icon.Record className="w-10 fill-red" />,
      title: "Sponsorship",
      description:
        "Eventi indipendenti organizzati da terze perti per promuovere conoscenza medica senza influenza della compagnia",
      action: "iconnect",
    },
  ];
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
      <PageContainerPlatform>
        <Typography variant="heading-card" color="red">
          Create a New Event
        </Typography>
        <div className="mt-6 grid grid-cols-12 gap-6">
          {eventTypes.map((eventType, index) => (
            <EventTypeCard
              key={`event-${index}`}
              icon={eventType.icon}
              title={eventType.title}
              description={eventType.description}
              className="col-span-4"
              action={
                eventType.action === "internal" ? (
                  <Button
                    startIcon={<Icon.Add />}
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Create
                  </Button>
                ) : (
                  <Button variant="link" endIcon={<Icon.ArrowDiagonal />}>
                    Create on iConnect
                  </Button>
                )
              }
            />
          ))}
        </div>
        <CreateCorporateEventDialog
          isOpen={isDialogOpen}
          onOpenChange={(open: boolean) => !open && setIsDialogOpen(false)}
        />
      </PageContainerPlatform>
    </>
  );
}
