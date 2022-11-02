import React, { FC } from "react";
import { Helmet } from "react-helmet";

// Components
import Card from "../components/Card";
import Drive from "../components/Drive";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ListGroup from "../components/ListGroup";
import Spacer from "../components/Spacer";
import Sphere from "../components/Sphere";

// Types
export interface HomepageProps {
  heroProps: any;
  cardsProps?: any;
  sphereProps1?: any;
  sphereProps2?: any;
  sphereProps3?: any;
  servicesBasicsProps?: any;
  servicesFacilitiesProps?: any;
  servicesKitchenProps?: any;
  servicesBetAndBathProps?: any;
  servicesOutdoorProps?: any;
  driveProps?: any;
  rulesProps?: any;
  footerProps?: any;
}

const Homepage: FC<HomepageProps> = ({
  heroProps,
  cardsProps,
  sphereProps1,
  sphereProps2,
  sphereProps3,
  servicesBasicsProps,
  servicesFacilitiesProps,
  servicesKitchenProps,
  servicesBetAndBathProps,
  servicesOutdoorProps,
  driveProps,
  rulesProps,
  footerProps,
}) => {
  return (
    <Layout footer={footerProps}>
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
                  <div className="col-10 col-sm-12 col-lg-6 col-xl-4 mb-4">
                    <Card {...cardsProps[0]} />
                  </div>
                  <div className="col-10 col-sm-12 col-lg-6 col-xl-4 mb-4">
                    <Card {...cardsProps[1]} />
                  </div>
                  <div className="col-10 col-sm-12 col-lg-6 col-xl-4 mb-4">
                    <Card {...cardsProps[2]} />
                  </div>
                </div>
              </div>
            </Spacer>
            <Spacer bottomOnly={true}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-6">
                    {/* <div className="mb-3"> */}
                    <Sphere {...sphereProps1} />
                    {/* </div> */}
                  </div>
                  <div className="col-10 col-sm-6">
                    <div className="mb-3">
                      <Sphere {...sphereProps2} />
                    </div>
                  </div>
                  <div className="col-10 col-sm-6">
                    <div className="mb-3">
                      <Sphere {...sphereProps3} />
                    </div>
                  </div>
                  <div className="col-10 col-sm-6">
                    {/* <Album
                      images={units}
                      alts={unitsImagesAlts}
                      border="acapulco"
                    /> */}
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
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12">
                  <Spacer>
                    <h2 className="m-0">Services</h2>
                  </Spacer>
                </div>
              </div>
            </div>
            <Spacer bottomOnly={true}>
              <div className="container">
                <div className="row justify-content-center justify-content-sm-start">
                  <div className="col-10 col-sm-12">
                    <h3 className="mb-0">Basics</h3>
                  </div>
                </div>
              </div>
            </Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12 mb-4">
                  <ListGroup
                    list={servicesBasicsProps.list}
                    float={servicesBasicsProps.float}
                  />
                </div>
              </div>
            </div>
            <Spacer>
              <div className="container">
                <div className="row justify-content-center justify-content-sm-start">
                  <div className="col-10 col-sm-12">
                    <h3 className="mb-0">Instalaciones</h3>
                  </div>
                </div>
              </div>
            </Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12 mb-4">
                  <ListGroup
                    list={servicesFacilitiesProps.list}
                    float={servicesFacilitiesProps.float}
                  />
                </div>
              </div>
            </div>
            <Spacer>
              <div className="container">
                <div className="row justify-content-center justify-content-sm-start">
                  <div className="col-10 col-sm-12">
                    <h3 className="mb-0">Comedor</h3>
                  </div>
                </div>
              </div>
            </Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12 mb-4">
                  <ListGroup
                    list={servicesKitchenProps.list}
                    float={servicesKitchenProps.float}
                  />
                </div>
              </div>
            </div>
            <Spacer>
              <div className="container">
                <div className="row justify-content-center justify-content-sm-start">
                  <div className="col-10 col-sm-12">
                    <h3 className="mb-0">Cama y baño</h3>
                  </div>
                </div>
              </div>
            </Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12 mb-4">
                  <ListGroup
                    list={servicesBetAndBathProps.list}
                    float={servicesBetAndBathProps.float}
                  />
                </div>
              </div>
            </div>
            <Spacer>
              <div className="container">
                <div className="row justify-content-center justify-content-sm-start">
                  <div className="col-10 col-sm-12">
                    <h3 className="mb-0">Al aire libre</h3>
                  </div>
                </div>
              </div>
            </Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12 mb-4">
                  <ListGroup
                    list={servicesOutdoorProps.list}
                    float={servicesOutdoorProps.float}
                  />
                </div>
              </div>
            </div>
            <Spacer bottomOnly></Spacer>
          </div>
        </FadeInWhenVisible>
      </section>
      <section className="anchor-block" id="drive">
        <FadeInWhenVisible>
          <Spacer>
            <div className="bg-white">
              <Drive {...driveProps} />
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
                <div className="col-10 col-sm-12 mb-4">
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
