import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { useStepper } from "@/hooks/use-stepper";
import Icon from "./icon";

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
                "absolute -top-8 hidden text-center md:block md:w-[152px]",
              )}
            >
              {item.label}
            </Typography>
            <div
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray",
                index === active && "border-red",
                (index < active ||
                  (active === lastStep && index === lastStep)) &&
                  "border-red bg-red",
              )}
            >
              {index === active && index !== lastStep && (
                <div className="h-2 w-2 rounded-full bg-red" />
              )}
              {(index < active || index === lastStep) && (
                <Icon.Check className="h-20 w-20 fill-white" />
              )}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "h-[2px] w-[60px] md:w-[152px]",
                index > active - 1 ? "bg-gray" : "bg-red",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
