import React, { FC } from "react";
import { Helmet } from "react-helmet";

// Components
import ButtonLink from "../components/ButtonLink";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Spacer from "../components/Spacer";
import Sphere from "../components/Sphere";

// Compositions
import Card from "../compositions/Card";
import Grid from "../compositions/Grid";
import Hero from "../compositions/Hero";
import Layout from "../compositions/Layout";
import ListGroup from "../compositions/ListGroup";

// Types
export interface HomepageProps {
  headerProps: any;
  heroProps: any;
  cardsGridProps: any;
  cardsProps?: any;
  unitsGridProps?: any;
  sphereProps1?: any;
  sphereProps2?: any;
  sphereProps3?: any;
  services?: any;
  driveProps?: any;
  rulesProps?: any;
  footerProps?: any;
}

const Homepage: FC<HomepageProps> = ({
  headerProps,
  heroProps,
  cardsGridProps,
  cardsProps,
  unitsGridProps,
  sphereProps1,
  sphereProps2,
  sphereProps3,
  services,
  driveProps,
  rulesProps,
  footerProps,
}) => {
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
      <section className="anchor-block" id="main">
        <Hero {...heroProps} />
      </section>
      <section className="anchor-block" id="units">
        <FadeInWhenVisible>
          {/* TODO: update background color */}
          <div className="bg-secondary-pastel">
            <Spacer>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-12">
                    <h2 className="mb-5">Cabinas</h2>
                    <p className="mb-0">
                      Cada una de las 4 cabinas tiene 2 camas matrimoniales.
                      Estamos habilitadas para alojar familias y amigos de
                      cuatro a cinco personas. Poseen una iluminación cálida que
                      induce al reposo, equipada para suplir toda necesidad y
                      lograr una estadía singular.
                    </p>
                  </div>
                </div>
              </div>
            </Spacer>
            <Spacer bottomOnly={true}>
              <div className="container">
                <div className="row justify-content-center justify-content-md-start">
                  <div className="col-10 col-sm-12">
                    <Grid {...cardsGridProps}>
                      <Card {...cardsProps[0]} />
                      <Card {...cardsProps[1]} />
                      <Card {...cardsProps[2]} />
                    </Grid>
                  </div>
                </div>
              </div>
            </Spacer>
            <Spacer bottomOnly={true}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-12">
                    <Grid {...unitsGridProps}>
                      <Sphere {...sphereProps1} />
                      <Sphere {...sphereProps2} />
                      <Sphere {...sphereProps3} />
                    </Grid>
                  </div>
                </div>
              </div>
            </Spacer>
          </div>
        </FadeInWhenVisible>
      </section>
      <section className="anchor-block" id="common-spaces">
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <h2 className="mb-5">Espacios comúnes</h2>
                  <p className="mb-0">
                    Nuestras áreas comunes convocan a una experiencia de vínculo
                    social y personal enlazados a la naturaleza, una cocina
                    totalmente equipada, espacio de trabajo y hermosos jardines
                    que adornan los rústicos corredores.
                  </p>
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </section>
      <section className="anchor-block" id="services">
        <FadeInWhenVisible>
          <div className="bg-primary-pastel">
            <Spacer>
              <div className="container">
                <div className="row justify-content-center justify-content-sm-start">
                  <div className="col-10 col-sm-12">
                    <h2 className="m-0">{services.heading}</h2>
                  </div>
                </div>
              </div>
            </Spacer>
            {/* TODO: remove any */}
            {services?.list.map((service: any, index: number) => {
              return (
                <div key={index}>
                  <Spacer bottomOnly={true}>
                    <div className="container">
                      <div className="row justify-content-center justify-content-sm-start">
                        <div className="col-10 col-sm-12">
                          <h3 className="mb-0">{service.heading}</h3>
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
                          />
                        </div>
                      </div>
                    </div>
                  </Spacer>
                </div>
              );
            })}
          </div>
        </FadeInWhenVisible>
      </section>
      <section className="anchor-block" id="drive">
        <FadeInWhenVisible>
          <Spacer>
            <div className="bg-white">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-10 col-sm-12 col-md-6">
                    <h2 className="mb-5">{driveProps.heading}</h2>
                    <p className="mb-5">{driveProps.text}</p>
                    <div className="mb-5 mb-md-0">
                      <ButtonLink
                        appearance={driveProps.buttonAppearance}
                        bold
                        mb={0}
                        px={4}
                        py={2}
                        rounded
                        targetBlank={driveProps.targetBlank}
                        text={driveProps.cta}
                        url={driveProps.url}
                      />
                    </div>
                  </div>
                  <div className="col-10 col-sm-12 col-md-6">
                    {driveProps.icon}
                  </div>
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </section>
      <section className="anchor-block" id="rules">
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12">
                  <h3 className="mb-0">Rules</h3>
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
