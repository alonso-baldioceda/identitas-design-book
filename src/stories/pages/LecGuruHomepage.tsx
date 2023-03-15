import React, { FC } from "react";

// Components
import Block, { BlockProps } from "../components/Block";

// Compositions
import Hero, { HeroProps } from "../compositions/hero/Hero";
import Layout from "../compositions/Layout";
import { HeaderProps } from "../compositions/header/HeaderV1";
import { FooterProps } from "./../compositions/footer/Footer";

// Hooks
import useAvailHeight from "./../../hooks/useAvailHeight";

export interface LecGuruHomepageProps {
  location: string;
  headerProps: HeaderProps;
  topProps: { blockProps: BlockProps; heroProps: HeroProps };
  footerProps: FooterProps;
}

const LecGuruHomepage: FC<LecGuruHomepageProps> = ({
  headerProps,
  topProps,
  footerProps,
  location,
}) => {
  const [heroHeight, _] = useAvailHeight();

  return (
    <Layout footer={footerProps} header={headerProps} location={location}>
      {/* Hero */}
      <Block {...topProps.blockProps}>
        <Hero {...topProps.heroProps} height={`${heroHeight}px`} />
      </Block>
    </Layout>
  );
};

export default LecGuruHomepage;
