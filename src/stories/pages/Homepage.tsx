import React, { FC, ReactNode } from "react";
import { Helmet } from "react-helmet";

// Components
import ButtonLink, { ButtonLinkProps } from "../components/ButtonLink";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Spacer from "../components/Spacer";
import Sphere from "../compositions/Sphere";
import Text, { TextProps } from "../components/Text";

// Compositions
import Card from "../compositions/card/Card";
import Grid from "../compositions/Grid";
import Hero, { HeroProps } from "../compositions/hero/Hero";
import Layout from "../compositions/Layout";
import ListGroup from "../compositions/ListGroup";
import { HeaderProps } from "./../compositions/header/Header";
import { FooterProps } from "./../compositions/footer/Footer";
import { ListGroupItemProps } from "../compositions/ListGroupItem";

// Hooks
import useAvailHeight from "./../../hooks/useAvailHeight";

export interface HomepageProps {
  headerProps: HeaderProps;
  heroProps: HeroProps;
  unitsProps: any;
  commonProps?: any;
  servicesProps: {
    heading: TextProps;
    list: ServiceProps[];
  };
  driveProps: {
    heading: TextProps;
    text: TextProps;
    buttonLink: ButtonLinkProps;
    icon: ReactNode;
  };
  rulesProps: {
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
  heroProps,
  unitsProps,
  commonProps,
  servicesProps,
  driveProps,
  rulesProps,
  footerProps,
}) => {
  const [heroHeight, _] = useAvailHeight();

  return (
    <Layout footer={footerProps} header={headerProps}>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://vistalagoarenal.com/",
              "name": "${process.env.GATSBY_WEBSITE_NAME}",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+50683274040",
                "contactType": "Customer Support"
              }
            }
          `}
        </script>
      </Helmet>
      <section id="top">
        <Hero {...heroProps} height={`${heroHeight}px`} />
      </section>
      <section id="units">
        {/* TODO: update background color */}
        <div className="bg-secondary-pastel">
          <FadeInWhenVisible>
            <Spacer>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-12">
                    <Text
                      text={unitsProps.title.text}
                      variant={unitsProps.title.variant}
                      classes={unitsProps.title.classes}
                    />
                  </div>
                </div>
              </div>
            </Spacer>
            <Spacer bottomOnly={true}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-12">
                    <Text
                      text={unitsProps.description.text}
                      classes={unitsProps.description.classes}
                    />
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
                    </Grid>
                  </div>
                </div>
              </div>
            </Spacer>
            <Spacer bottomOnly={true}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-12">
                    <Grid {...unitsProps.unitsGridProps}>
                      <Sphere {...unitsProps.sphereProps1} />
                      <Sphere {...unitsProps.sphereProps2} />
                      <Sphere {...unitsProps.sphereProps3} />
                    </Grid>
                  </div>
                </div>
              </div>
            </Spacer>
          </FadeInWhenVisible>
        </div>
      </section>
      <section id="common-spaces">
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text
                    text={commonProps.title.text}
                    variant={commonProps.title.variant}
                    classes={commonProps.title.classes}
                  />
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text
                    text={commonProps.description.text}
                    classes={commonProps.description.classes}
                  />
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </section>
      <section id="services">
        <FadeInWhenVisible>
          <div className="bg-primary-pastel">
            <Spacer>
              <div className="container">
                <div className="row justify-content-center justify-content-sm-start">
                  {servicesProps?.heading && (
                    <div className="col-10 col-sm-12">
                      <Text
                        text={servicesProps?.heading.text}
                        variant={servicesProps?.heading.variant}
                        classes={servicesProps?.heading.classes}
                      />
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
                        <Text
                          text={service.heading.text}
                          variant={service.heading.variant}
                          classes={service.heading.classes}
                        />
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
          </div>
        </FadeInWhenVisible>
      </section>
      <section id="drive">
        <FadeInWhenVisible>
          <Spacer>
            <div className="bg-white">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  {driveProps.heading ||
                  driveProps.text ||
                  driveProps.buttonLink ? (
                    <div className="col-10 col-sm-12 col-md-6">
                      {driveProps.heading && <Text {...driveProps.heading} />}
                      {driveProps.text && <Text {...driveProps.text} />}
                      {driveProps.buttonLink && (
                        <div className="mb-5 mb-md-0">
                          <ButtonLink {...driveProps.buttonLink} />
                        </div>
                      )}
                    </div>
                  ) : null}
                  {driveProps.icon && (
                    <div className="col-10 col-sm-12 col-md-6">
                      {driveProps.icon}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </section>
      <section id="contact">
        <h1>Contact here!</h1>
      </section>
      <section id="rules">
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12">
                  <Text
                    text={rulesProps?.heading.text}
                    variant={rulesProps?.heading.variant}
                    classes={rulesProps?.heading.classes}
                  />
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
      </section>
    </Layout>
  );
};

export default Homepage;
