import React, { ReactNode, FC, useState } from "react";
import { GlobalStyle } from "./../shared/global.js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./../../../.storybook/Theme.js";
import { I18nextProvider } from "react-i18next";

// Components
import Header, { HeaderProps } from "./header/Header";
import Footer, { FooterProps } from "./footer/Footer";

// Contexts
import LayoutContext from "./LayoutContext";

// Hooks
import useDark from "./../../hooks/useDark";

import i18next from "./../../i18e";

// Interfaces
interface LayoutProps {
  children: ReactNode | ReactNode[];
  footer: FooterProps;
  header: HeaderProps;
  location: string;
}

const Layout: FC<LayoutProps> = ({ children, footer, header, location }) => {
  const [isDark, setIsDark] = useDark();
  const [active, setActive] = useState<number>(-1);
  const [language, setLanguage] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        <I18nextProvider i18n={i18next}>
          <GlobalStyle theme={isDark} />
          <Header {...header} location={location} />
          <main className="main" id="main">
            {children}
          </main>
          <Footer {...footer} location={location} />
        </I18nextProvider>
      </ThemeProvider>
    </LayoutContext.Provider>
  );
};

export default Layout;
