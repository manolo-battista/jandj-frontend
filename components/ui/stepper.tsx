import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { Typography } from "@/components/ui/typography";

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
            <Typography
              variant="body-md"
              color={index === active ? "tertiary" : "inverse"}
              className={cn("w-[148px] -top-8 absolute text-center")}
            >
              {item.label}
            </Typography>
            <div
              className={cn(
                "flex items-center justify-center rounded-full border border-primary w-6 h-6",
                (index < active ||
                  (active === lastStep && index === lastStep)) &&
                  "bg-red border-red",
              )}
            >
              {index === active && index !== lastStep && (
                <div className="rounded-full bg-red w-2 h-2" />
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
                index > active - 1 ? "bg-gray" : "bg-red",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
