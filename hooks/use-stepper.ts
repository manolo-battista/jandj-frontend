import { useRouter, useSearchParams } from "next/navigation";

const steps = [
  { value: 0, name: "confirm-participation", label: "Confirm Participation" },
  { value: 1, name: "check-cv", label: "Check CV" },
  { value: 2, name: "fill-qi-form", label: "Fill QI form" },
  { value: 3, name: "submit", label: "Submit" },
];

export function useStepper() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsStep = searchParams.get("step") ?? "confirm-participation";

  const active =
    steps.filter(
      (item) => item.name === paramsStep || item.value === Number(paramsStep),
    )?.[0] ?? steps[0];

  function onNextStep() {
    const nextStep = steps[steps.indexOf(active) + 1];
    router.push(`/guest?step=${nextStep.name}`);
  }

  function onPreviousStep() {
    const previousStep = steps[steps.indexOf(active) - 1];
    router.push(`/guest?step=${previousStep.name}`);
  }

  return { active, steps, onNextStep, onPreviousStep };
}
