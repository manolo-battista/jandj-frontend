import { cn } from "@/lib/utils";
import { CategoryBadge } from "@/components/common/category-badge";
import { UsersIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { StatusBadge } from "@/components/common/status-badge";

interface EventCardProps {
  className?: string;
}
export default function EventCard(props: EventCardProps) {
  const { className } = props;
  return (
    <div className={cn("p-4 py-6 bg-card shadow-xl", className)}>
      <div className="flex items-center">
        <p className="flex-1 text-[10px] uppercase">
          MEDICAL EDUCATIONAL EVENT
        </p>
        <StatusBadge>approved</StatusBadge>
      </div>
      <p className="text-lg w-2/3">XXVII National Congress SOPSI</p>
      <div className="flex gap-1 my-2">
        <CategoryBadge>#psychiatry</CategoryBadge>
        <CategoryBadge>#neurology</CategoryBadge>
      </div>
      <div className="mt-8 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <UsersIcon className="w-4" /> <p className="text-sm">40</p>
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon className="w-4" />{" "}
          <p className="text-sm">21 - 23/02/2024</p>
        </div>
        <div className="flex items-center gap-1">
          <MapPinIcon className="w-4" />{" "}
          <p className="text-sm">Ergife Palace Hotel, Rome (IT)</p>
        </div>
      </div>
    </div>
  );
}
