import React, { FC, ReactNode } from "react";

// Components
import ContactPoint, { ContactPointProps } from "../components/ContactPoint";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Spacer from "../components/Spacer";
import Sphere from "../compositions/Sphere";
import Text, { TextProps } from "../components/Text";
import Drive, { DriveProps } from "../components/Drive";
import Block, { BlockProps } from "../components/Block";
import Contact, { ContactProps } from "../compositions/forms/templates/Contact";

// Compositions
import Card from "../compositions/card/Card";
import Grid from "../compositions/Grid";
import Hero, { HeroProps } from "../compositions/hero/Hero";
import Layout from "../compositions/Layout";
import ListGroup from "../compositions/ListGroup";
import { HeaderProps } from "../compositions/header/HeaderV1";
import { FooterProps } from "./../compositions/footer/Footer";
import { ListGroupItemProps } from "../compositions/ListGroupItem";

// Hooks
import useAvailHeight from "./../../hooks/useAvailHeight";

// Assets
import Map from "./../../images/svg/navigator.svg";

export interface HomepageProps {
  location: string;
  headerProps: HeaderProps;
  contactPointProps: ContactPointProps;
  topProps: { blockProps: BlockProps; heroProps: HeroProps };
  unitsProps: any;
  commonProps: any;
  servicesProps: {
    blockProps: BlockProps;
    heading: TextProps;
    list: ServiceProps[];
  };
  driveProps: {
    blockProps: BlockProps;
    content: DriveProps;
    icon: ReactNode;
  };
  contactProps: {
    blockProps: BlockProps;
    heading: TextProps;
    formData: ContactProps;
  };
  rulesProps: {
    blockProps: BlockProps;
    heading: TextProps;
    float: boolean;
    list: ListGroupItemProps[];
  };
  footerProps: FooterProps;
}

interface ServiceProps {
  heading: TextProps;
  float?: boolean;
  list: ListGroupItemProps[];
  classes?: string;
}

const Homepage: FC<HomepageProps> = ({
  headerProps,
  contactPointProps,
  topProps,
  unitsProps,
  commonProps,
  servicesProps,
  driveProps,
  contactProps,
  rulesProps,
  footerProps,
  location,
}) => {
  const [heroHeight, _] = useAvailHeight();

  // console.log("contactProps", contactProps);

  return (
    <Layout footer={footerProps} header={headerProps} location={location}>
      <ContactPoint {...contactPointProps} />
      {/* Hero */}
      <Block {...topProps.blockProps}>
        <Hero {...topProps.heroProps} height={`${heroHeight}px`} />
      </Block>
      {/* Units */}
      <Block {...unitsProps.block}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text {...unitsProps.heading} />
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text {...unitsProps.text} />
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-10 col-sm-12">
                  <Grid {...unitsProps.cardsGridProps}>
                    <Card {...unitsProps.cardsProps[0]} />
                    <Card {...unitsProps.cardsProps[1]} />
                    <Card {...unitsProps.cardsProps[2]} />
                    <Card {...unitsProps.cardsProps[3]} />
                  </Grid>
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row">
                <div className="col-10 col-sm-6 mb-3 mb-md-5">
                  <Sphere {...unitsProps.sphereProps1} />
                </div>
                <div className="col-10 col-sm-6 mb-3 mb-md-5">
                  <Sphere {...unitsProps.sphereProps2} />
                </div>
                <div className="col-10 col-sm-6 mb-3 mb-md-5">
                  <Sphere {...unitsProps.sphereProps3} />
                </div>
                {/* <div className="col-10 col-sm-6 mb-3 mb-md-5">
                  <Gallery images={images} />
                </div> */}
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </Block>
      {/* Common spaces */}
      <Block {...commonProps.blockProps}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text {...commonProps.heading} />
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text {...commonProps.text} />
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </Block>
      {/* Services */}
      <Block {...servicesProps.blockProps}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                {servicesProps?.heading && (
                  <div className="col-10 col-sm-12">
                    <Text {...servicesProps.heading} />
                  </div>
                )}
              </div>
            </div>
          </Spacer>
          {servicesProps?.list.map((service: ServiceProps, index: number) => (
            <div key={index} id={`service-${service.heading.text}`}>
              <Spacer bottomOnly={true}>
                <div className="container">
                  <div className="row justify-content-center justify-content-sm-start">
                    <div className="col-10 col-sm-12">
                      <Text {...service.heading} />
                    </div>
                  </div>
                </div>
              </Spacer>
              <Spacer bottomOnly={true}>
                <div className="container">
                  <div className="row justify-content-center justify-content-sm-start">
                    <div className="col-10 col-sm-12">
                      <ListGroup
                        list={service.list}
                        float={service.float}
                        classes={service.classes}
                      />
                    </div>
                  </div>
                </div>
              </Spacer>
            </div>
          ))}
        </FadeInWhenVisible>
      </Block>
      {/* Drive */}
      <Block {...driveProps.blockProps}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                {driveProps && (
                  <div className="col-10 col-sm-12 col-md-6">
                    <Drive {...driveProps.content} />
                  </div>
                )}
                <div className="col-10 col-sm-12 col-md-6">
                  <img src={Map} alt="drive" />
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </Block>
      {/* Contact */}
      <Block {...contactProps.blockProps}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text {...contactProps.heading} />
                  {contactProps.formData ? (
                    <Contact formData={contactProps.formData} />
                  ) : null}
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </Block>
      {/* Rules */}
      <Block {...rulesProps.blockProps}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12">
                  <Text {...rulesProps.heading} />
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12">
                  <ListGroup list={rulesProps.list} float={rulesProps.float} />
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </Block>
    </Layout>
  );
};

export default Homepage;
