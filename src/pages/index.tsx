import * as React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";

// Compositions
import Block from "./../stories/components/Block";
import Card from "./../stories/compositions/card/Card";
import Grid from "./../stories/compositions/Grid";
import Hero from "./../stories/compositions/hero/Hero";
import Layout from "./../stories/compositions/Layout";
import Sphere from "./../stories/compositions/Sphere";

// Components
import FadeInWhenVisible from "./../stories/components/FadeInWhenVisible";
import Spacer from "./../stories/components/Spacer";
import Text from "./../stories/components/Text";

// Hooks
import useAvailHeight from "./../hooks/useAvailHeight";

// Types
import LinkType from "./../shared/enums/linkType";
import Size from "./../shared/enums/size";

// Assets
import HeroImage from "./../images/home-hero.jpg";
import SphereImage1 from "./../images/tour/room1.jpg";
import SpherePreviewImage1 from "./../images/tour/room1-preview.jpg";

const data = {
  headerProps: {
    brand: {
      classes: "me-3",
      fontWeight: 700,
      svg: {
        icon: "logo",
        size: Size.sm,
      },
      text: {
        text: "Vista Lago Arenal",
        variant: "span",
      },
      to: "main",
    },
    call: {
      icon: "phone",
      classes: "mb-0",
      size: Size.xs,
      text: "call us",
      url: "tel:+50683274040",
    },
    fixed: true,
    hideCloseFrom: "d-xl-none d-flex",
    hideLanguagesFrom: "xl",
    languages: [
      {
        name: "es",
        classes: "text-uppercase me-3",
      },
      {
        name: "en",
        classes: "text-uppercase me-3",
      },
    ],
    location: "/",
    minHeight: 84,
    mobile: {
      classes: "p-4",
      hideFrom: "xl",
      isOpen: true,
      languages: [
        {
          name: "es",
          classes: "text-capitalize",
        },
        {
          name: "es",
          classes: "text-capitalize",
        },
      ],
      navigation: [
        {
          type: LinkType.Anchor,
          anchor: "top",
          text: "Inicio",
          offset: -104,
          classes: "mb-2",
        },
        {
          type: LinkType.Anchor,
          anchor: "units",
          text: "Cabinas",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: LinkType.Anchor,
          anchor: "common-spaces",
          text: "Espacios comúnes",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: LinkType.Anchor,
          anchor: "services",
          text: "Servicios",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: LinkType.Anchor,
          anchor: "drive",
          text: "Cómo llegar?",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: LinkType.Anchor,
          anchor: "contact",
          text: "Contáctenos",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: LinkType.Link,
          anchor: "info",
          text: "Info",
          classes: "mb-2",
        },
      ],
      startingAt: 82,
      mobileLanguagesLabel: {
        classes: "mb-3",
        text: "Idiomas:",
        variant: "label",
      },
    },
    navigation: [
      {
        type: LinkType.Anchor,
        anchor: "top",
        text: "Inicio",
        offset: -104,
        classes: "me-3 text-capitalize",
      },
      {
        type: LinkType.Anchor,
        anchor: "units",
        text: "Cabinas",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: LinkType.Anchor,
        anchor: "common-spaces",
        text: "Espacios comúnes",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: LinkType.Anchor,
        anchor: "services",
        text: "Servicios",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: LinkType.Anchor,
        anchor: "drive",
        text: "Cómo llegar?",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: LinkType.Anchor,
        anchor: "contact",
        text: "Contáctenos",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: LinkType.Link,
        anchor: "info",
        text: "Info",
        classes: "me-3 text-capitalize",
      },
    ],
    separator: {
      classes: "mx-3",
    },
    showCall: true,
    showLanguages: true,
    showSocials: true,
    showSwitchMode: true,
    socials: [
      {
        icon: "facebook",
        classes: "mb-0 mx-2 mx-sm-3",
        size: Size.xs,
        text: "Facebook",
        url: "https://www.facebook.com/vistalagoarenal",
      },
      {
        icon: "instagram",
        classes: "mb-0 me-2 me-sm-3",
        size: Size.xs,
        text: "Instagram",
        url: "https://www.instagram.com/vistalagoarenal/",
      },
    ],
  },
  topProps: {
    blockProps: {
      id: "top",
    },
    heroProps: {
      src: HeroImage,
      mask: true,
      panel: {
        classes: "p-2 p-lg-3 m-0 col-4 col-lg-7",
        position: "bottom-start",
        text: {
          text: "Estamos ubicados en Costa Rica, Guanacaste, Tilarán. En una loma frente al Lago Arenal.",
          classes: "mb-0",
          variant: "h1",
        },
      },
    },
  },
  unitsProps: {
    block: {
      id: "units",
      classes: "bg-secondary-pastel",
    },
    heading: {
      text: "Cabinas",
      classes: "mb-0",
      variant: "h2",
    },
    text: {
      text: "Cada una de las 4 cabinas tiene 2 camas matrimoniales. Estamos habilitadas para alojar familias y amigos de cuatro a cinco personas. Poseen una iluminación cálida que induce al reposo, equipada para suplir toda necesidad y lograr una estadía singular.",
      classes: "mb-0",
    },
    cardsGridProps: {
      xl: 3,
    },
    cardsProps: [
      {
        border: 4,
        header: {
          text: {
            classes: "mb-0 py-4 text-capitalize",
            text: "Cabina 1",
            variant: "h3",
          },
          backgroundColor: "#81B29A",
        },
        body: {
          backgroundColor: "transparent",
          list: [
            {
              svg: "bedQueen",
              svgSize: Size.sm,
              text: {
                heading: {
                  classes: "mb-0",
                  text: "2 camas matrimoniales",
                  variant: "h4",
                },
                bottom: {
                  classes: "mb-0",
                  text: "(máx. 4 personas)",
                },
              },
            },
          ],
          preCta: {
            classes: "text-center small mb-2",
            text: "Reservar por",
          },
          airbnb: {
            bold: true,
            classes: "mb-2 px-4 py-2 rounded-pill fw-bold btn-airbnb",
            disabled: false,
            targetBlank: false,
            text: "Airbnb",
            url: "https://www.google.com/",
          },
          booking: {
            bold: true,
            disabled: false,
            classes: "mb-0 px-4 py-2 rounded-pill fw-bold",
            targetBlank: false,
            text: "Booking",
            url: "https://www.google.com/",
          },
        },
      },
      {
        border: 4,
        header: {
          text: {
            classes: "mb-0 py-4 text-capitalize",
            text: "Cabina 2",
            variant: "h3",
          },
          backgroundColor: "#81B29A",
        },
        body: {
          backgroundColor: "transparent",
          list: [
            {
              svg: "bedQueen",
              svgSize: Size.sm,
              text: {
                heading: {
                  classes: "mb-0",
                  text: "2 camas matrimoniales",
                  variant: "h4",
                },
                bottom: {
                  classes: "mb-0",
                  text: "(máx. 4 personas)",
                },
              },
            },
          ],
          preCta: {
            classes: "text-center small mb-2",
            text: "Reservar por",
          },
          airbnb: {
            bold: true,
            disabled: false,
            classes: "mb-2 px-4 py-2 rounded-pill fw-bold btn-airbnb",
            targetBlank: false,
            text: "Airbnb",
            url: "https://www.google.com/",
          },
          booking: {
            bold: true,
            disabled: false,
            classes: "mb-0 px-4 py-2 rounded-pill fw-bold",
            targetBlank: false,
            text: "Booking",
            url: "https://www.google.com/",
          },
        },
      },
      {
        border: 4,
        header: {
          text: {
            classes: "mb-0 py-4 text-capitalize",
            text: "Cabina 3",
            variant: "h3",
          },
          backgroundColor: "#81B29A",
        },
        body: {
          backgroundColor: "transparent",
          list: [
            {
              svg: "",
              svgSize: Size.sm,
              text: {
                heading: {
                  classes: "mb-0",
                  text: "1 cama matrimonial",
                  variant: "h4",
                },
                bottom: {
                  classes: "mb-0",
                  text: "(máx. 2 personas)",
                },
              },
            },
          ],
          preCta: {
            classes: "text-center small mb-2",
            text: "Reservar por",
          },
          airbnb: {
            bold: true,
            disabled: false,
            classes: "mb-2 px-4 py-2 rounded-pill fw-bold btn-airbnb",
            targetBlank: false,
            text: "Airbnb",
            url: "https://www.google.com/",
          },
          booking: {
            bold: true,
            disabled: false,
            classes: "mb-0 px-4 py-2 rounded-pill fw-bold",
            targetBlank: false,
            text: "Booking",
            url: "https://www.google.com/",
          },
        },
      },
    ],
    unitsGridProps: {
      lg: 2,
      xl: 2,
    },
    sphereProps1: {
      border: 5,
      borderColor: "primary",
      height: "400px",
      id: "sphereSample1",
      image: SphereImage1,
      pitch: 6,
      preview: SpherePreviewImage1,
      sceneId: "sphereSample1",
      width: "100%",
      yaw: 40,
    },
    sphereProps2: {
      border: 5,
      borderColor: "primary",
      height: "400px",
      id: "sphereSample2",
      image: SphereImage1,
      pitch: 6,
      preview: SpherePreviewImage1,
      sceneId: "sphereSample2",
      width: "100%",
      yaw: 40,
    },
    sphereProps3: {
      border: 5,
      borderColor: "primary",
      height: "400px",
      id: "sphereSample3",
      image: SphereImage1,
      pitch: 6,
      preview: SpherePreviewImage1,
      sceneId: "sphereSample3",
      width: "100%",
      yaw: 40,
    },
  },
  footerProps: {
    contact: {
      header: {
        text: "Contáctenos",
        classes: "mb-5",
        variant: "h2",
      },
      list: [
        {
          svg: "home",
          svgSize: "xs",
          classes: "mb-3",
          text: {
            heading: {
              classes: "mb-0",
              text: "Costa Rica, Guanacaste, Río Piedras, Tilarán.",
            },
          },
        },
        {
          svg: "envelope",
          svgSize: "xs",
          classes: "mb-3",
          text: {
            heading: {
              classes: "mb-0",
              text: "vistalagoarenal@gmail.com",
            },
          },
        },
        {
          svg: "phone",
          svgSize: "xs",
          classes: "mb-3",
          text: {
            heading: {
              classes: "mb-0",
              text: "+(506) 8327 4040",
            },
          },
        },
      ],
    },
    navigation: {
      header: {
        text: "Enlaces",
        classes: "mb-5",
        variant: "h2",
      },
      list: [
        {
          type: LinkType.Anchor,
          anchor: "top",
          text: "Inicio",
          offset: -104,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Anchor,
          anchor: "units",
          text: "Cabinas",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Anchor,
          anchor: "common-spaces",
          text: "Espacios comúnes",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Anchor,
          anchor: "services",
          text: "Servicios",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Anchor,
          anchor: "drive",
          text: "Cómo llegar?",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Anchor,
          anchor: "contact",
          text: "Contáctenos",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Link,
          anchor: "info",
          text: "Info",
          classes: "mb-0 d-block",
        },
      ],
    },
  },
};

const IndexPage = ({ data: graphqlData, location }: any) => {
  const { t } = useTranslation();
  const [heroHeight, _] = useAvailHeight();

  const translateServices: any = t("services", {
    returnObjects: true,
  });

  // const { basics, facilities, kitchen, betAndBath, outdoor } =
  //   translateServices || [{}];

  console.log("services", translateServices, t(`commonSpaces.heading`));

  return (
    <Layout
      header={data.headerProps}
      footer={data.footerProps}
      location={location.pathname}
    >
      {/* Hero */}
      <Block {...data.topProps.blockProps}>
        <Hero {...data.topProps.heroProps} height={`${heroHeight}px`} />
      </Block>
      {/* Units */}
      <Block {...data.unitsProps.block}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text {...data.unitsProps.heading} />
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text {...data.unitsProps.text} />
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center justify-content-md-start">
                <div className="col-10 col-sm-12">
                  <Grid {...data.unitsProps.cardsGridProps}>
                    <Card {...data.unitsProps.cardsProps[0]} />
                    <Card {...data.unitsProps.cardsProps[1]} />
                    <Card {...data.unitsProps.cardsProps[2]} />
                  </Grid>
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Grid {...data.unitsProps.unitsGridProps}>
                    <Sphere {...data.unitsProps.sphereProps1} />
                    <Sphere {...data.unitsProps.sphereProps2} />
                    <Sphere {...data.unitsProps.sphereProps3} />
                  </Grid>
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </Block>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "home-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 2200)
      }
    }
    units: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "units" }
      }
      sort: { order: ASC, fields: name }
    ) {
      totalCount
      edges {
        node {
          base
          name
          id
          childImageSharp {
            gatsbyImageData(width: 1100)
          }
        }
      }
    }
    common: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "common" }
      }
      sort: { order: ASC, fields: name }
    ) {
      totalCount
      edges {
        node {
          base
          name
          id
          childImageSharp {
            gatsbyImageData(width: 1100)
          }
        }
      }
    }
  }
`;
