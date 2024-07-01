import useBreakpoints from "@/hooks/use-breakpoints";

export default function useMobile() {
  const { breakpoints } = useBreakpoints();

  return { isMobile: breakpoints === "xs", isTablet: breakpoints === "sm" };
}
