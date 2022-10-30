import React, { ReactNode, FC } from "react";
import { GlobalStyle } from "./../shared/global.js";

// import GlobalProvider from "./../components/globalProvider";

// Components
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <main className="main" id="main">
      {children}
    </main>
    <Footer
      menu={[
        {
          name: "main",
          anchor: "#main",
          text: "Inicio",
        },
        {
          name: "units",
          anchor: "#units",
          text: "Cabinas",
        },
        {
          name: "common",
          anchor: "#common-spaces",
          text: "Espacios comúnes",
        },
        {
          name: "services",
          anchor: "#services",
          text: "Servicios",
        },
        {
          name: "drive",
          anchor: "#drive",
          text: "Cómo llegar?",
        },
        {
          name: "contact",
          anchor: "#contact",
          text: "Contáctenos",
        },
      ]}
    />
  </>
);

export default Layout;
