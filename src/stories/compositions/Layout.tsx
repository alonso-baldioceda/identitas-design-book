import React, { ReactNode, FC, useState } from "react";
import { GlobalStyle } from "./../shared/global.js";

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
  const [active, setActive] = useState(-1);
  const [language, setLanguage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
      <GlobalStyle />
      <Header {...header} />
      <main className="main" id="main">
        {children}
      </main>
      <Footer {...footer} />
    </LayoutContext.Provider>
  );
};

export default Layout;
