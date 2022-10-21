import React, { FC } from "react";

// Components
import Card from "../components/Card";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Layout from "../components/Layout";
import ListGroup from "../components/ListGroup";
import Spacer from "../components/Spacer";
import Hero from "../components/Hero";

// Types
export interface HomepageProps {
  hero: any;
  cardsData?: any;
  servicesBasics?: any;
  servicesFacilities?: any;
  servicesKitchen?: any;
  servicesBetAndBath?: any;
  servicesOutdoor?: any;
}

const Homepage: FC<HomepageProps> = ({
  hero,
  cardsData,
  servicesBasics,
  servicesFacilities,
  servicesKitchen,
  servicesBetAndBath,
  servicesOutdoor,
}) => {
  return (
    <Layout>
      <section className="anchor-block" id="main">
        <Hero {...hero} />
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
                    <Card {...cardsData[0]} />
                  </div>
                  <div className="col-10 col-sm-12 col-lg-6 col-xl-4 mb-4">
                    <Card {...cardsData[1]} />
                  </div>
                  <div className="col-10 col-sm-12 col-lg-6 col-xl-4 mb-4">
                    <Card {...cardsData[2]} />
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
                    list={servicesBasics.list}
                    float={servicesBasics.float}
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
                    list={servicesFacilities.list}
                    float={servicesFacilities.float}
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
                    list={servicesKitchen.list}
                    float={servicesKitchen.float}
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
                    list={servicesBetAndBath.list}
                    float={servicesBetAndBath.float}
                  />
                </div>
              </div>
            </div>
            <Spacer>
              <div className="container">
                <div className="row justify-content-center justify-content-sm-start">
                  <div className="col-10 col-sm-12">
                    <h3 className="mb-0">Al aire libree</h3>
                  </div>
                </div>
              </div>
            </Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12 mb-4">
                  <ListGroup
                    list={servicesOutdoor.list}
                    float={servicesOutdoor.float}
                  />
                </div>
              </div>
            </div>
            <Spacer bottomOnly></Spacer>
          </div>
        </FadeInWhenVisible>
      </section>
    </Layout>
  );
};

export default Homepage;
