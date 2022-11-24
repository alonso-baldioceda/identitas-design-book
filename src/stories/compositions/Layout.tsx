import React, { ReactNode, FC, useState } from "react";
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
}

const Layout: FC<LayoutProps> = ({ header, children, footer }) => {
  const [isDark, setIsDark] = useState("light");
  const [active, setActive] = useState(-1);
  const [language, setLanguage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Dark mode button toggler
  // const darkModeHandler = () => {
  //   setIsDark(isDark === "light" ? "dark" : "light");
  // };

  return (
    <LayoutContext.Provider
      value={{
        active,
        language,
        isOpen,
        setActive,
        setLanguage,
        setIsOpen,
      }}
    >
      <ThemeProvider theme={isDark === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle theme={isDark} />
        <Header {...header} />
        <main className="main" id="main">
          {children}
        </main>
        <Footer {...footer} />
      </ThemeProvider>
    </LayoutContext.Provider>
  );
};

export default Layout;
