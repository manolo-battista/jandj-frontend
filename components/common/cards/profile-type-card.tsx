import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Typography } from "@/components/ui/typography";

interface ProfileTypeCardProps {
  className?: string;
  icon: ReactNode;
  title: string;
  description: string;
  action: ReactNode;
}

export default function ProfileTypeCard({
  className,
  icon,
  title,
  description,
  action,
}: ProfileTypeCardProps) {
  return (
    <div className={cn("bg-background-active p-4 py-6", className)}>
      <div className={"flex gap-4"}>
        <div className="mx-2 mt-4">{icon}</div>
        <div>
          <Typography variant="body-lg">{title}</Typography>
          <Typography variant="body-md" className="min-h-[60px] text-gray">
            {description}
          </Typography>
        </div>
      </div>
      <div className="mt-4 flex justify-end">{action}</div>
    </div>
  );
}
