import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { useStepper } from "@/hooks/useStepper";

export default function Stepper() {
  const {
    active: { value: active },
    steps,
  } = useStepper();
  const lastStep = steps.length - 1;
  return (
    <div className="flex md:min-h-[80px]">
      {steps.map((item, index) => (
        <div key={`stepper-${item.value}`} className="flex items-center">
          <div className="relative flex flex-col items-center">
            <Typography
              variant="body-md"
              color={index === active ? "tertiary" : "inverse"}
              className={cn(
                "absolute -top-8 text-center hidden md:block md:w-[152px] ",
              )}
            >
              {item.label}
            </Typography>
            <div
              className={cn(
                "flex items-center justify-center rounded-full border border-primary w-6 h-6",
                index === active && "border-red",
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
                "w-[60px] md:w-[152px] h-[2px]",
                index > active - 1 ? "bg-gray" : "bg-red",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
