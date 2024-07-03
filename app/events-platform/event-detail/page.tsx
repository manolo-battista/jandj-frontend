"use client";
import { StatusBadge } from "@/components/common/status-badge";
import Divider from "@/components/ui/divider";
import { Typography } from "@/components/ui/typography";
import { ITabButton, ITabContent } from "@/types/tab";
import { useState } from "react";

export default function EventDetail() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <StatusBadge status="pending" />
          <Typography variant="heading-card" color="primary">
            Event Name
          </Typography>
        </div>
        <div>Box Ricerca</div>
      </div>

      <Divider className="my-6" />

      <div className="flex item-center justify-between">
        <Typography variant="heading-card" color="red">
          Event Details
        </Typography>
        <div className="flex items-center gap-2">
          <p>sync iconnect</p>
          <p>report</p>
        </div>
      </div>
      <div className="bg-white w-full h-fit p-6">Detail box</div>

      <div className="mt-6">
        <TabSection />
      </div>
    </>
  );
}

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "Activities Tracker", content: "Tab 1" },
    { title: "Attendees", content: "Tab 2" },
    { title: "Documents", content: "Tab 3" },
  ];
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-10">
        {tabs.map((tab, idx) => (
          <TabButton
            key={idx}
            title={tab.title}
            isActive={activeTab === idx}
            onClick={() => setActiveTab(idx)}
          />
        ))}
      </div>
      <TabContent content={tabs[activeTab].content} />
    </div>
  );
};

const TabButton = ({ title, isActive, onClick }: ITabButton) => {
  return (
    <button onClick={onClick}>
      <Typography variant="heading-sm" color={isActive ? "red" : "primary"}>
        {title}
      </Typography>
    </button>
  );
};

const TabContent = ({ content }: ITabContent) => {
  return <div>{content}</div>;
};
