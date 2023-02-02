import React, { FC } from "react";

// Components
// import FadeInWhenVisible from "../components/FadeInWhenVisible";
// import Spacer from "../components/Spacer";
// import Text, { TextProps } from "../components/Text";
// import Block, { BlockProps } from "../components/Block";

// Compositions
import Layout from "../compositions/Layout";
import { HeaderProps } from "./../compositions/header/Header";
import { FooterProps } from "./../compositions/footer/Footer";

export interface InfoProps {
  headerProps: HeaderProps;
  footerProps: FooterProps;
}

const Info: FC<InfoProps> = ({ headerProps, footerProps }) => {
  return (
    <Layout footer={footerProps} header={headerProps}>
      <h1>Info</h1>
      <p>text!</p>
    </Layout>
  );
};

export default Info;
