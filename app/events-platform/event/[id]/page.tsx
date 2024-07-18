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
import KanbanBoard from "@/components/pages/events-platform/activities-tracker/kanban-board";
import { IStatus } from "@/types/status";
import { ITabButton, ITabContent } from "@/types/tab";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "Activities Tracker", content: <KanbanBoard /> },
    { title: "Attendees", content: "Tab 2" },
    { title: "Documents", content: "Tab 3" },
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
  return <div className="min-w-[1024px] overflow-x-auto">{content}</div>;
};

export default function Page() {
  const RowItem = (props: {
    icon: ReactNode;
    title: string;
    value?: string;
  }) => (
    <div className="flex gap-2">
      {props.icon}
      <Typography className="body-xs" color="inverse">
        {props.title}
      </Typography>
      <Typography className="body-lg">{props.value ?? "N/A"}</Typography>
    </div>
  );
  return (
    <>
      <NavbarPlatform
        title={
          <div className="flex items-center gap-2">
            <StatusBadge status={IStatus.DRAFT} />
            <Typography variant="heading-card">
              New perspectives in multiple myeloma
            </Typography>
          </div>
        }
      />
      <PageContainerPlatform>
        <Typography variant="heading-card" color="red" className="mb-6">
          Event Details
        </Typography>

        <div className={cn("bg-card p-4 py-6")}>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              <div>
                <Typography variant="body-xs" className="mb-4">
                  Who and what
                </Typography>
                <div className="flex flex-col gap-4">
                  <RowItem
                    icon={<Icon.Pill className="fill-gray" />}
                    title="Product"
                  />
                  <RowItem
                    icon={<Icon.Star className="fill-gray" />}
                    title="Eventy type"
                    value="Medical Education Event"
                  />{" "}
                  <RowItem
                    icon={<Icon.Instructions className="fill-gray" />}
                    title="Event Number"
                    value="EV00305917"
                  />
                </div>
              </div>
              <div className="mt-8 grid grid-cols-12">
                <div className="col-span-6">
                  <Typography variant="body-xs" className="mb-4">
                    Attendees
                  </Typography>
                  <RowItem
                    icon={<Icon.Community className="fill-gray" />}
                    title="Attendees"
                  />
                </div>
                <div className="col-span-6">
                  <Typography variant="body-xs" className="mb-4">
                    Panel
                  </Typography>
                  <div className="flex items-center gap-2">
                    <Typography color="inverse" className="underline">
                      See the list
                    </Typography>
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
                  </div>
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
                  title="Date"
                  value="12/07/2024"
                />
                <RowItem
                  icon={<Icon.Time className="fill-gray" />}
                  title="Time"
                  value="14:00 - 16:00"
                />
                <RowItem
                  icon={<Icon.Webinar className="fill-gray" />}
                  title="Event Modality"
                  value="Hybrid"
                />
                <RowItem
                  icon={<Icon.Pin className="fill-gray" />}
                  title="Location"
                  value="Hilton Hotel Milan, Italy"
                />
                <RowItem
                  icon={<Icon.Computer className="fill-gray" />}
                  title="Platform"
                  value="Zoom Call"
                />
              </div>
            </div>
          </div>
          <Divider className="my-8" />
          <div className="flex items-center gap-3">
            <AvatarProfile name="Donatella Rossi" />
            <Typography variant="body-md">Donatella Rossi</Typography>
          </div>
        </div>

        <TabSection />
      </PageContainerPlatform>
    </>
  );
}
