import useScreenSize from "@/hooks/use-screen-size";

export default function useBreakpoints() {
  const { width } = useScreenSize();

  function getBreakpoints() {
    if (width < 640) return "xs";
    if (width < 1280) return "sm";
    if (width < 1920) return "md";
    return "lg";
  }

  return { breakpoints: getBreakpoints() };
}
