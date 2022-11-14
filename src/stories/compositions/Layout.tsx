import React, { ReactNode, FC } from "react";
import { GlobalStyle } from "./../shared/global.js";

// import GlobalProvider from "./../components/globalProvider";

// Components
import Header, { SocialProps } from "./Header";
import { BrandProps } from "./../components/Brand";
import Footer, {
  MenuItemProps,
  ContactItemProps,
} from "./../compositions/Footer";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  footer: {
    bgcolor?: string;
    contact: { header: string; list: ContactItemProps[] };
    navigation: { header: string; list: MenuItemProps[] };
  };
  header: {
    brand: BrandProps;
    languagesList: string[];
    navigation: MenuItemProps[];
    phone?: string;
    phoneIcon?: ReactNode;
    socials: SocialProps[];
  };
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
