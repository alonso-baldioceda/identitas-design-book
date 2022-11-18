import React, { ReactNode, FC } from "react";
import { GlobalStyle } from "./../shared/global.js";

// import GlobalProvider from "./../components/globalProvider";

// Components
import Header, { HeaderProps } from "./header/Header";
import Footer, { FooterProps } from "./Footer";

// Interfaces
interface LayoutProps {
  children: ReactNode | ReactNode[];
  footer: FooterProps;
  header: HeaderProps;
}

const Layout: FC<LayoutProps> = ({ header, children, footer }) => {
  return (
    <>
      <GlobalStyle />
      <Header {...header} />
      <main className="main" id="main">
        {children}
      </main>
      <Footer {...footer} />
    </>
  );
};

export default Layout;
