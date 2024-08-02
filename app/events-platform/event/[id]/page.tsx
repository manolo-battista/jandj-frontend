"use client";
import React, { ReactNode, useState } from "react";
import { Typography } from "@/components/ui/typography";
import NavbarPlatform from "@/components/layout/platform/navbar-platform";
import PageContainerPlatform from "@/components/layout/platform/page-container-platform";
import { StatusBadge } from "@/components/common/status-badge";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import AvatarProfile from "@/components/common/avatar-profile";
import Divider from "@/components/ui/divider";
import { IStatus } from "@/types/status";
import { ITabButton, ITabContent } from "@/types/tab";
import EventKanbanBoard from "@/components/pages/events-platform/event-activities-tracker/kanban-board";
import EventAttendees from "@/components/pages/events-platform/event-attendees/event-attendees";
import EventDocuments from "@/components/pages/events-platform/event-documents/event-documents";
import { Button } from "@/components/ui/button";
import { FrameworkAlertbadge } from "@/components/common/framework-alert-badge";
import Link from "next/link";

export default function Page() {
  const RowItem = (props: {
    icon: ReactNode;
    title: string;
    value?: string;
    children?: ReactNode;
    link?: string;
  }) => (
    <div className="flex items-center gap-2">
      {props.icon}
      <Typography variant="body-md" color="inverse">
        {props.title}
      </Typography>

      {props.value && (
        <>
          {props.link ? (
            <Link href={props.link} target="_blank">
              <Typography className="underline" variant="body-lg">
                {props.value}
              </Typography>
            </Link>
          ) : (
            <Typography variant="body-lg">{props.value ?? "N/A"}</Typography>
          )}
        </>
      )}

      {props.children}
    </div>
  );
  return (
    <>
      <NavbarPlatform
        title={
          <div className="flex items-center gap-2">
            <StatusBadge status={IStatus.DRAFT} />
            <Typography variant="heading-card">Nome Evento</Typography>
          </div>
        }
      />
      <PageContainerPlatform>
        <div className="flex items-center justify-between">
          <Typography variant="heading-card" color="red">
            Dettagli Evento
          </Typography>
          <div className="flex items-center gap-3">
            <Button
              variant="default"
              color="secondary"
              onClick={() => console.log("connect")}
              startIcon={<Icon.Lifecycle />}
            >
              Sincronizza con iConnect
            </Button>
            <Button
              variant="default"
              color="secondary"
              onClick={() => console.log("connect")}
              startIcon={<Icon.Document />}
            >
              Genera Report
            </Button>
          </div>
        </div>

        <div className={cn("mt-6 bg-card p-4 py-6")}>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div>
                <Typography variant="body-xs" className="mb-4">
                  Chi e cosa
                </Typography>
                <div className="flex flex-col gap-4">
                  <RowItem
                    icon={<Icon.Pill className="fill-gray" />}
                    title="Prodotto"
                    value="N/A"
                  />
                  <RowItem
                    icon={<Icon.Star className="fill-gray" />}
                    title="Tipo di evento"
                    value="Medical Education Event"
                  />{" "}
                  <RowItem
                    icon={<Icon.Instructions className="fill-gray" />}
                    title="Numero Evento"
                    value="EV00305917"
                  />
                  <RowItem
                    icon={<Icon.Person className="fill-gray" />}
                    title="Partecipanti"
                  >
                    <div className="flex">
                      {[0, 1, 2, 3].map((attendee, index) => (
                        <AvatarProfile
                          index={index}
                          key={index}
                          name="Utente Prova"
                          length={4}
                        />
                      ))}
                    </div>
                  </RowItem>
                  <FrameworkAlertbadge />
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <Typography variant="body-xs" className="mb-4">
                When and where
              </Typography>
              <div className="flex flex-col gap-4">
                <RowItem
                  icon={<Icon.Calendar className="fill-gray" />}
                  title="Data e ora di inizio"
                  value="21 Lug 2024 - 14:00"
                />
                <RowItem
                  icon={<Icon.Time className="fill-gray" />}
                  title="Data e ora di fine"
                  value="21 Lug 2024 - 18:00"
                />
                <RowItem
                  icon={<Icon.Webinar className="fill-gray" />}
                  title="Modalità"
                  value="Ibrido"
                />
                <RowItem
                  icon={<Icon.Pin className="fill-gray" />}
                  title="Luogo"
                  value="Hilton Hotel Milan, Italy"
                  link="Hilton Hotel Milan, Italy"
                />
                <RowItem
                  icon={<Icon.Computer className="fill-gray" />}
                  title="Piattaforma"
                  value="Zoom Call"
                  link="Zoom Call"
                />
              </div>
            </div>
          </div>
          <Divider className="my-8" />
          <div className="flex items-center gap-3">
            <AvatarProfile name="Donatella Rossi" />
            <Typography variant="body-md" color="inverse">
              Event Owner
            </Typography>
            <Typography variant="body-md">Donatella Rossi</Typography>
          </div>
        </div>

        <TabSection />
      </PageContainerPlatform>
    </>
  );
}

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "Attività", content: <EventKanbanBoard /> },
    { title: "Partecipanti", content: <EventAttendees /> },
    { title: "Documenti", content: <EventDocuments /> },
  ];
  return (
    <div className="mt-6 w-full">
      <div className="flex items-center justify-center gap-10">
        {tabs.map((tab, idx) => (
          <TabButton
            key={idx}
            title={tab.title}
            isActive={activeTab === idx}
            onClick={() => setActiveTab(idx)}
          />
        ))}
      </div>
      <Divider className="my-0" />
      <TabContent content={tabs[activeTab].content} />
    </div>
  );
};

const TabButton = ({ title, isActive, onClick }: ITabButton) => {
  return (
    <button
      onClick={onClick}
      className={cn("px-4", isActive ? "border-b-2 border-red-500" : "")}
    >
      <Typography variant="heading-sm" color={isActive ? "red" : "primary"}>
        {title}
      </Typography>
    </button>
  );
};

const TabContent = ({ content }: ITabContent) => {
  return <div className="relative">{content}</div>;
};
