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
    <div className={cn("p-4 py-6 bg-background-active", className)}>
      <div className={"flex gap-4"}>
        <div className="mt-4 mx-2">{icon}</div>
        <div>
          <Typography variant="body-lg">{title}</Typography>
          <Typography variant="body-md" className="text-gray min-h-[60px]">
            {description}
          </Typography>
        </div>
      </div>
      <div className="mt-4 flex justify-end">{action}</div>
    </div>
  );
}