import Icon from "@/components/icons/icon";
import { cn } from "@/lib/utils";

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <Icon label="Right Icon">
    <svg
      className={cn("size-4", className)}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6935 13.9515L3 13.9515L3 11.6373L16.6935 11.6373L10.659 5.43059L12.2497 3.79443L21 12.7944L12.2497 21.7944L10.659 20.1583L16.6935 13.9515Z"
        fill="currentColor"
      />
    </svg>
    ;
  </Icon>
);

export { ArrowRightIcon };
