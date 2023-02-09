import { useState, useEffect } from "react";

const useIsDark = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    if (isDark) {
      document.body.className += " theme-dark";
    } else {
      document.body.className = document.body.className.replace(
        " theme-dark",
        ""
      );
    }
  }, [isDark]);

  return [isDark, setIsDark] as const;
};

export default useIsDark;
