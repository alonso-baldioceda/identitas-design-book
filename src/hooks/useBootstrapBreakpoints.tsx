import { useState, useEffect } from "react";

type BootstrapBreakpoint = "xs" | "sm" | "md" | "lg" | "xl";

const useBootstrapBreakpoints = (): BootstrapBreakpoint => {
  const [breakpoint, setBreakpoint] = useState<BootstrapBreakpoint>("xs");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 576) {
        setBreakpoint("xs");
      } else if (windowWidth >= 576 && windowWidth < 768) {
        setBreakpoint("sm");
      } else if (windowWidth >= 768 && windowWidth < 992) {
        setBreakpoint("md");
      } else if (windowWidth >= 992 && windowWidth < 1200) {
        setBreakpoint("lg");
      } else {
        setBreakpoint("xl");
      }
    };

    handleResize(); // Set initial breakpoint on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};

export default useBootstrapBreakpoints;
