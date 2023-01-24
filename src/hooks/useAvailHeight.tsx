import { useState, useEffect } from "react";

const useAvailHeight = () => {
  const [availHeight, setAvailHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const main = document.getElementById("main");

      if (main) {
        const header = document.querySelector("header");

        if (header) {
          const headerHeight = header.clientHeight;

          const vh = Math.max(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0
          );

          const HeroHeight = vh - headerHeight;
          setAvailHeight(HeroHeight ? HeroHeight : 0);

          if (header.classList.contains("fixed")) {
            main.style.paddingTop = `${headerHeight}px`;
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [availHeight, setAvailHeight] as const;
};

export default useAvailHeight;
