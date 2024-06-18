import React from "react";
import Divider from "@/components/ui/divider";
import EventCard from "@/components/common/event-card";

export default function Page() {
  return (
    <div>
      <h3 className="text-primary text-xl font-semibold">Hello Annie!</h3>
      <p className="text-sm font-semibold">Welcome to your dashboard</p>
      <Divider className="mt-4" />

      <h4 className="mt-6 text-primary text-lg">Your current projects</h4>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1].map((_, index) => (
          <EventCard key={index} />
        ))}
      </div>

      <h4 className="mt-6 text-primary text-lg">Past activities</h4>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 2, 3].map((_, index) => (
          <EventCard key={index} />
        ))}
      </div>
    </div>
  );
}
