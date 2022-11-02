import React, { ReactNode, FC } from "react";
import { GlobalStyle } from "./../shared/global.js";

// import GlobalProvider from "./../components/globalProvider";

// Components
import Footer from "./footer/Footer";

// Types
interface MenuItemProps {
  anchor: string;
  name: string;
  text: string;
}

interface ContactItemProps {
  icon: ReactNode;
  text: string;
}

interface LayoutProps {
  footer: {
    bgcolor?: string;
    // contact: { header: string; list: ContactItemProps[] };
    // navigation: { header: string; list: MenuItemProps[] };
    // TODO: fix these types
    contact: { header: string; list: any };
    navigation: { header: string; list: any };
  };
  children: ReactNode | ReactNode[];
}

const Layout: FC<LayoutProps> = ({ children, footer }) => {
  return (
    <>
      <GlobalStyle />
      <main className="main" id="main">
        {children}
      </main>
      <Footer
        bgcolor={footer.bgcolor}
        contact={footer.contact}
        navigation={footer.navigation}
      />
    </>
  );
};

export default Layout;
