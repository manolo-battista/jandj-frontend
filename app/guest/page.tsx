import React from "react";
import Stepper from "@/components/ui/stepper";

const steps = [
  { value: 0, label: "Confirm Participaton" },
  { value: 1, label: "Check CV" },
  { value: 2, label: "Fill QI form" },
  { value: 3, label: "Submit" },
];
export default function Page() {
  return (
    <div>
      <div className="p-6 flex justify-center w-full">
        <Stepper active={0} steps={steps} />
      </div>
    </div>
  );
}
