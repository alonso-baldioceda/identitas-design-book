import React, { FC } from "react";

// Components
import Card from "../components/Card";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import Hero from "../components/Hero";

// Types
export interface HomepageProps {
  hero: any;
  cardsData?: any;
}

const Homepage: FC<HomepageProps> = ({ hero, cardsData }) => {
  return (
    <Layout>
      <section className="anchor-block" id="main">
        <Hero {...hero} />
      </section>
      <section className="anchor-block" id="units">
        <FadeInWhenVisible>
          <div className="bg-merino">
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
                  {cardsData.map((card: any, index: number) => (
                    <div
                      className="col-10 col-sm-12 col-lg-6 col-xl-4 mb-4"
                      key={index}
                    >
                      <Card {...card} key={index} />
                    </div>
                  ))}
                </div>
              </div>
            </Spacer>
          </div>
        </FadeInWhenVisible>
      </section>
    </Layout>
  );
};

export default Homepage;
