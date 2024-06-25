import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface StepperProps {
  active: number;
  steps: { value: number; label: string }[];
}

export default function Stepper(props: StepperProps) {
  const { active, steps } = props;
  const lastStep = steps.length - 1;
  return (
    <div className="flex min-h-[80px]">
      {steps.map((item, index) => (
        <div key={`stepper-${item.value}`} className="flex items-center">
          <div className="relative flex flex-col items-center">
            <p className="w-[148px] -top-6 absolute text-sm text-neutral text-center">
              {item.label}
            </p>
            <div
              className={cn(
                "flex items-center justify-center rounded-full border border-primary w-6 h-6",
                (index < active ||
                  (active === lastStep && index === lastStep)) &&
                  "bg-primary",
              )}
            >
              {index === active && index !== lastStep && (
                <div className="rounded-full bg-primary w-2 h-2" />
              )}
              {(index < active || index === lastStep) && (
                <CheckIcon className="w-4 stroke-white" />
              )}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "w-[148px] h-[2px]",
                index > active - 1 ? "bg-neutral-100" : "bg-primary",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
