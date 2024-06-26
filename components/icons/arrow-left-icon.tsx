import Icon from "@/components/icons/icon";
import { cn } from "@/lib/utils";
const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <Icon label="Left Icon">
    <svg
      className={cn("size-5", className)}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.3065 11.6373L21 11.6373L21 13.9515L7.3065 13.9515L13.341 20.1583L11.7503 21.7944L3 12.7944L11.7503 3.79443L13.341 5.43059L7.3065 11.6373Z"
        fill="currentColor"
      />
    </svg>
  </Icon>
);

export { ArrowLeftIcon };
