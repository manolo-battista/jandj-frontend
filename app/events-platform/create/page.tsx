import React, { ReactNode } from "react";
import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
import Icon from "@/components/ui/icon";
import EventTypeCard from "@/components/common/cards/event-type-card";
import { Button } from "@/components/ui/button";

interface IEventType {
  icon: ReactNode;
  title: string;
  description: string;
  action: "internal" | "iconnect";
}

export default function Page() {
  const eventTypes: IEventType[] = [
    {
      icon: <Icon.Hospital className="w-10 fill-red" />,
      title: "Corporate & Policy",
      description:
        "Tese events include Institutional events, Patient Advocacy, J&J News, Media Collaboration",
      action: "internal",
    },
    {
      icon: <Icon.Collaboration className="w-10 fill-red" />,
      title: "Advisory Board",
      description:
        "Events to improve patients’ assistance through insights sharing and collaboration from a select group of experts",
      action: "iconnect",
    },
    {
      icon: <Icon.HealthcareProvider className="w-10 fill-red" />,
      title: "Fee for Services",
      description:
        "Tailored high-specialized advice from a select group of experts",
      action: "iconnect",
    },
    {
      icon: <Icon.Education className="w-10 fill-red" />,
      title: "Medical Education",
      description:
        "3rd-party-organized independent aimed at promoting medical scientific knowledge without corporate influence",
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
        <div className="grid grid-cols-12 gap-6 mt-6">
          {eventTypes.map((eventType, index) => (
            <EventTypeCard
              key={`event-${index}`}
              icon={eventType.icon}
              title={eventType.title}
              description={eventType.description}
              className="col-span-6"
              action={
                eventType.action === "internal" ? (
                  <Button startIcon={<Icon.Add />}>Create</Button>
                ) : (
                  <Button variant="link" endIcon={<Icon.ArrowDiagonal />}>
                    Create on iConnect
                  </Button>
                )
              }
            />
          ))}
        </div>
      </PageContainerPlatform>
    </>
  );
}
