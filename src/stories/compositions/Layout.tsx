import React, { ReactNode, FC, useState, useEffect } from "react";
import { GlobalStyle } from "./../shared/global.js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./../../../.storybook/Theme.js";

// Components
import Header, { HeaderProps } from "./header/Header";
import Footer, { FooterProps } from "./footer/Footer";

// Contexts
import LayoutContext from "./LayoutContext";

// Interfaces
interface LayoutProps {
  children: ReactNode | ReactNode[];
  footer: FooterProps;
  header: HeaderProps;
  location: any;
}

const Layout: FC<LayoutProps> = ({ children, footer, header, location }) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [active, setActive] = useState<number>(-1);
  const [language, setLanguage] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // TODO: Add a useEffect to set the active state based on the location prop
  // TODO: Move this to a hook
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

  return (
    <LayoutContext.Provider
      value={{
        active,
        language,
        isDark,
        isOpen,
        setActive,
        setLanguage,
        setIsOpen,
        setIsDark,
      }}
    >
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle theme={isDark} />
        <Header {...header} location={location} />
        <main className="main" id="main">
          {children}
        </main>
        <Footer {...footer} location={location} />
      </ThemeProvider>
    </LayoutContext.Provider>
  );
};

export default Layout;
