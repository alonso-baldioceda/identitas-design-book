import React, { ReactNode, FC } from "react";
import { GlobalStyle } from "./../shared/global.js";

// import GlobalProvider from "./../components/globalProvider";

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
  return (
    <LayoutContext.Provider
      value={{
        active: 0,
        language: 0,
        isOpen: false,
        setActive: undefined,
        setLanguage: undefined,
        toggleMenu: undefined,
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
