import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import { useLocation } from "@reach/router";

// Compositions
import { ListGroupItemProps } from "../stories/compositions/ListGroupItem";
import Contact from "./../stories/compositions/Contact";
import Card from "./../stories/compositions/card/Card";
import Grid from "./../stories/compositions/Grid";
import Hero from "./../stories/compositions/hero/Hero";
import Layout from "./../stories/compositions/Layout";
import ListGroup from "./../stories/compositions/ListGroup";
import Sphere from "./../stories/compositions/Sphere";

// Components
// The Album component is not used in the Storybook, but it is used in the
// Gatsby components because it uses gatsby-plugin-image
import Gallery from "../components/gallery/Gallery";
import Block from "./../stories/components/Block";
import Drive from "./../stories/components/Drive";
import FadeInWhenVisible from "./../stories/components/FadeInWhenVisible";
import Spacer from "./../stories/components/Spacer";
import Text, { TextProps } from "./../stories/components/Text";

// Hooks
import useAvailHeight from "./../hooks/useAvailHeight";
import useBootstrapBreakpoints from "./../hooks/useBootstrapBreakpoints";

// Assets
import HeroImage from "./../images/home-hero.jpg";
import SphereImage1 from "./../images/tour/room1.jpg";
import SpherePreviewImage1 from "./../images/tour/room1-preview.jpg";
import SphereImage2 from "./../images/tour/room2.jpg";
import SpherePreviewImage2 from "./../images/tour/room2-preview.jpg";
import SphereImage3 from "./../images/tour/bath.jpg";
import SpherePreviewImage3 from "./../images/tour/bath-preview.jpg";
import SphereCommonImage1 from "./../images/tour/common1.jpg";
import SphereCommonPreviewImage1 from "./../images/tour/common1-preview.jpg";
import SphereCommonImage2 from "./../images/tour/common2.jpg";
import SphereCommonPreviewImage2 from "./../images/tour/common2-preview.jpg";
import Map from "./../images/svg/navigator.svg";

// Types
interface ServiceProps {
  heading: TextProps;
  float?: boolean;
  list: ListGroupItemProps[];
  classes?: string;
}

const IndexPage = ({ data: graphqlData }: any) => {
  const { t } = useTranslation();
  const location = useLocation();
  const heroHeight = useAvailHeight();
  const breakpoint = useBootstrapBreakpoints();

  const setSphereHeight = (size: string) => {
    switch (size) {
      case "sm":
        return 350;
      case "md":
        return 350;
      case "lg":
        return 400;
      case "xl":
        return 400;
      default:
        return 300;
    }
  };

  const sphereSize = setSphereHeight(breakpoint);

  // GraphQL
  const { unitsImgs, commonImgs } = graphqlData || [];

  // Translations
  const navigation: any = t("nav", { returnObjects: true });
  const header: any = t("header", { returnObjects: true });
  const hero: any = t("hero", { returnObjects: true });
  const units: any = t("units", { returnObjects: true });
  // const unitsGallery: any = t("unitsGallery", { returnObjects: true });
  const commonSpaces: any = t("commonSpaces", { returnObjects: true });
  // const commonGallery: any = t("commonGallery", { returnObjects: true });
  const services: any = t("services", { returnObjects: true });
  const drive: any = t("drive", { returnObjects: true });
  const contact: any = t("contact", { returnObjects: true });
  const rules: any = t("rules", { returnObjects: true });
  const footer: any = t("footer", { returnObjects: true });

  const data = {
    headerProps: {
      brand: {
        classes: "me-3",
        fontWeight: 700,
        svg: {
          icon: "logo",
          size: "sm",
        },
        text: {
          text: t(header.brand),
          variant: "span",
        },
        to: "main",
      },
      call: {
        icon: "phone",
        classes: "mb-0 me-2 me-sm-3",
        size: "xs",
        text: t(header.call),
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
          classes: "text-uppercase me-0",
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
            type: "anchor",
            anchor: "top",
            text: t(navigation.main),
            offset: -104,
            classes: "mb-2",
          },
          {
            type: "anchor",
            anchor: "units",
            text: t(navigation.units),
            offset: -80,
            classes: "mb-2",
          },
          {
            type: "anchor",
            anchor: "common-spaces",
            text: t(navigation.commonSpaces),
            offset: -80,
            classes: "mb-2",
          },
          {
            type: "anchor",
            anchor: "services",
            text: t(navigation.services),
            offset: -80,
            classes: "mb-2",
          },
          {
            type: "anchor",
            anchor: "drive",
            text: t(navigation.drive),
            offset: -80,
            classes: "mb-2",
          },
          {
            type: "anchor",
            anchor: "contact",
            text: t(navigation.contact),
            offset: -80,
            classes: "mb-2",
          },
          {
            type: "link",
            anchor: "info",
            text: t(navigation.info),
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
          type: "anchor",
          anchor: "top",
          text: t(navigation.main),
          offset: -104,
          classes: "me-3 text-capitalize",
        },
        {
          type: "anchor",
          anchor: "units",
          text: t(navigation.units),
          offset: -80,
          classes: "me-3 text-capitalize",
        },
        {
          type: "anchor",
          anchor: "common-spaces",
          text: t(navigation.commonSpaces),
          offset: -80,
          classes: "me-3 text-capitalize",
        },
        {
          type: "anchor",
          anchor: "services",
          text: t(navigation.services),
          offset: -80,
          classes: "me-3 text-capitalize",
        },
        {
          type: "anchor",
          anchor: "drive",
          text: t(navigation.drive),
          offset: -80,
          classes: "me-3 text-capitalize",
        },
        {
          type: "anchor",
          anchor: "contact",
          text: t(navigation.contact),
          offset: -80,
          classes: "me-3 text-capitalize",
        },
        {
          type: "link",
          anchor: "info",
          text: t(navigation.info),
          classes: "me-3 text-capitalize",
        },
      ],
      separator: {
        classes: "mx-3 d-none d-xl-block",
      },
      socials: [
        {
          icon: "facebook",
          classes: "mb-0 mx-2 mx-sm-3",
          size: "xs",
          text: "Facebook",
          url: "https://www.facebook.com/vistalagoarenal",
        },
        {
          icon: "instagram",
          classes: "mb-0 me-2 me-sm-3",
          size: "xs",
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
            text: t(hero.heading),
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
        text: t(units.heading),
        classes: "mb-0",
        variant: "h2",
      },
      text: {
        text: t(units.text),
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
              text: t(units.list.unit1.heading),
              variant: "h3",
            },
            backgroundColor: "#81B29A",
          },
          body: {
            backgroundColor: "transparent",
            list: [
              {
                svg: "bedQueen",
                svgSize: "sm",
                text: {
                  heading: {
                    classes: "mb-0",
                    text: t(units.list.unit1.text),
                    variant: "h4",
                  },
                  bottom: {
                    classes: "mb-0",
                    text: t(units.list.unit1.max),
                  },
                },
              },
            ],
            preCta: {
              classes: "text-center small mb-2",
              text: t(`booking`),
            },
            airbnb: {
              bold: true,
              classes: "mb-2 px-4 py-2 rounded-pill fw-bold btn-airbnb",
              disabled: false,
              targetBlank: false,
              text: t(`OtaAirbnb`),
              url: "https://www.google.com/",
            },
            booking: {
              bold: true,
              disabled: false,
              classes: "mb-0 px-4 py-2 rounded-pill fw-bold",
              targetBlank: false,
              text: t(`OtaBooking`),
              url: "https://www.google.com/",
            },
          },
        },
        {
          border: 4,
          header: {
            text: {
              classes: "mb-0 py-4 text-capitalize",
              text: t(units.list.unit2.heading),
              variant: "h3",
            },
            backgroundColor: "#81B29A",
          },
          body: {
            backgroundColor: "transparent",
            list: [
              {
                svg: "bedQueen",
                svgSize: "sm",
                text: {
                  heading: {
                    classes: "mb-0",
                    text: t(units.list.unit2.text),
                    variant: "h4",
                  },
                  bottom: {
                    classes: "mb-0",
                    text: t(units.list.unit2.max),
                  },
                },
              },
            ],
            preCta: {
              classes: "text-center small mb-2",
              text: t(`booking`),
            },
            airbnb: {
              bold: true,
              disabled: false,
              classes: "mb-2 px-4 py-2 rounded-pill fw-bold btn-airbnb",
              targetBlank: false,
              text: t(`OtaAirbnb`),
              url: "https://www.google.com/",
            },
            booking: {
              bold: true,
              disabled: false,
              classes: "mb-0 px-4 py-2 rounded-pill fw-bold",
              targetBlank: false,
              text: t(`OtaBooking`),
              url: "https://www.google.com/",
            },
          },
        },
        {
          border: 4,
          header: {
            text: {
              classes: "mb-0 py-4 text-capitalize",
              text: t(units.list.unit3.heading),
              variant: "h3",
            },
            backgroundColor: "#81B29A",
          },
          body: {
            backgroundColor: "transparent",
            list: [
              {
                svg: "",
                svgSize: "sm",
                text: {
                  heading: {
                    classes: "mb-0",
                    text: t(units.list.unit3.text),
                    variant: "h4",
                  },
                  bottom: {
                    classes: "mb-0",
                    text: t(units.list.unit3.max),
                  },
                },
              },
            ],
            preCta: {
              classes: "text-center small mb-2",
              text: t(`booking`),
            },
            airbnb: {
              bold: true,
              disabled: false,
              classes: "mb-2 px-4 py-2 rounded-pill fw-bold btn-airbnb",
              targetBlank: false,
              text: t(`OtaAirbnb`),
              url: "https://www.google.com/",
            },
            booking: {
              bold: true,
              disabled: false,
              classes: "mb-0 px-4 py-2 rounded-pill fw-bold",
              targetBlank: false,
              text: t(`OtaBooking`),
              url: "https://www.google.com/",
            },
          },
        },
      ],
      sphereProps1: {
        border: 5,
        borderColor: "primary",
        height: `${sphereSize}px`,
        id: "sphereUnits1",
        image: SphereImage1,
        pitch: 6,
        preview: SpherePreviewImage1,
        sceneId: "sphereUnits1",
        width: "100%",
        yaw: 40,
      },
      sphereProps2: {
        border: 5,
        borderColor: "primary",
        height: `${sphereSize}px`,
        id: "sphereUnits2",
        image: SphereImage2,
        pitch: 6,
        preview: SpherePreviewImage2,
        sceneId: "sphereUnits2",
        width: "100%",
        yaw: 40,
      },
      sphereProps3: {
        border: 5,
        borderColor: "primary",
        height: `${sphereSize}px`,
        id: "sphereUnits3",
        image: SphereImage3,
        pitch: 6,
        preview: SpherePreviewImage3,
        sceneId: "sphereUnits3",
        width: "100%",
        yaw: 40,
      },
    },
    commonProps: {
      blockProps: {
        id: "common-spaces",
      },
      heading: {
        text: t(commonSpaces.heading),
        classes: "mb-0",
        variant: "h2",
      },
      text: {
        text: t(commonSpaces.text),
        classes: "mb-0",
      },
      sphereProps1: {
        border: 5,
        borderColor: "primary",
        height: `${sphereSize}px`,
        id: "sphereCommon1",
        image: SphereCommonImage1,
        pitch: 6,
        preview: SphereCommonPreviewImage1,
        sceneId: "sphereCommon1",
        width: "100%",
        yaw: 40,
      },
      sphereProps2: {
        border: 5,
        borderColor: "primary",
        height: `${sphereSize}px`,
        id: "sphereCommon2",
        image: SphereCommonImage2,
        pitch: 6,
        preview: SphereCommonPreviewImage2,
        sceneId: "sphereCommon2",
        width: "100%",
        yaw: 40,
      },
    },
    servicesProps: {
      blockProps: {
        id: "services",
        classes: "bg-primary-pastel",
      },
      heading: {
        text: t(services.heading),
        classes: "mb-0",
        variant: "h2",
      },
      list: [
        {
          heading: {
            classes: "mb-0",
            text: t(services.basics.heading),
            variant: "h3",
          },
          float: true,
          list: [
            {
              svg: "wifi",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.basics.list[0].heading),
                },
              },
            },
            {
              svg: "washing",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.basics.list[1].heading),
                },
              },
            },
            {
              svg: "dryer",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.basics.list[2].heading),
                },
              },
            },
            {
              svg: "towels",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.basics.list[3].heading),
                },
                bottom: {
                  classes: "mb-0",
                  text: t(services.basics.list[3].subheading),
                  variant: "small",
                },
              },
            },
            {
              svg: "hotWater",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.basics.list[4].heading),
                },
              },
            },
          ],
        },
        {
          heading: {
            classes: "mb-0",
            text: t(services.facilities.heading),
            variant: "h3",
          },
          float: true,
          list: [
            {
              svg: "parking",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.facilities.list[0].heading),
                },
              },
            },
            {
              svg: "footprint",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.facilities.list[1].heading),
                },
              },
            },
          ],
        },
        {
          heading: {
            classes: "mb-0",
            text: t(services.kitchen.heading),
            variant: "h3",
          },
          float: true,
          list: [
            {
              svg: "kitchen",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.kitchen.list[0].heading),
                },
                bottom: {
                  classes: "mb-0",
                  text: t(services.kitchen.list[0].subheading),
                  variant: "small",
                },
              },
            },
            {
              svg: "oven",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.kitchen.list[1].heading),
                },
              },
            },
            {
              svg: "silverware",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.kitchen.list[2].heading),
                },
              },
            },
            {
              svg: "refrigerator",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.kitchen.list[3].heading),
                },
              },
            },
            {
              svg: "stove",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.kitchen.list[4].heading),
                },
              },
            },
            {
              svg: "coffeeMaker",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.kitchen.list[5].heading),
                },
              },
            },
            {
              svg: "oil",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.kitchen.list[6].heading),
                },
                bottom: {
                  classes: "mb-0",
                  text: t(services.kitchen.list[6].subheading),
                  variant: "small",
                },
              },
            },
            {
              svg: "barbecueUtensils",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.kitchen.list[7].heading),
                },
              },
            },
          ],
        },
        {
          heading: {
            classes: "mb-0",
            text: t(services.betAndBath.heading),
            variant: "h3",
          },
          float: true,
          list: [
            {
              svg: "pillow",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.betAndBath.list[0].heading),
                },
              },
            },
            {
              svg: "bedLinens",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.betAndBath.list[1].heading),
                },
              },
            },
            {
              svg: "shampoo",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.betAndBath.list[2].heading),
                },
              },
            },
          ],
        },
        {
          heading: {
            classes: "mb-0",
            text: t(services.outdoor.heading),
            variant: "h3",
          },
          float: true,
          list: [
            {
              svg: "patio",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.outdoor.list[0].heading),
                },
              },
            },
            {
              svg: "garden",
              svgSize: "sm",
              text: {
                heading: {
                  classes: "mb-0",
                  text: t(services.outdoor.list[1].heading),
                },
              },
            },
          ],
        },
      ],
    },
    driveProps: {
      blockProps: {
        id: "drive",
      },
      content: {
        heading: {
          text: t(drive.heading),
          classes: "mb-5",
          variant: "h2",
        },
        text: {
          text: t(drive.text),
          classes: "mb-5",
        },
        buttonLink: {
          classes:
            "mb-0 px-4 py-2 rounded-pill fw-bold mb-5 mb-md-0 btn-primary",
          targetBlank: true,
          text: t(drive.cta),
          url: "https://goo.gl/maps/M2zvgGvrKBoyRzNH9",
        },
      },
      icon: <Map />,
    },
    contactProps: {
      blockProps: {
        id: "contact",
      },
      heading: {
        text: t(contact.heading),
        classes: "mb-5",
        variant: "h2",
      },
      formData: {
        fields: [
          {
            error: {
              classes: "invalid px-2",
              text: t(contact.validation.firstnameRequired),
            },
            input: {
              classes: "form-control",
              name: "firstname",
              placeholder: t(contact.firstname),
            },
            label: {
              classes: "form-label",
              idFor: "firstname",
              text: t(contact.firstname),
              variant: "label",
            },
            required: true,
          },
          {
            error: {
              classes: "invalid px-2",
              text: t(contact.validation.lastnameRequired),
            },
            input: {
              classes: "form-control",
              name: "lastname",
              placeholder: t(contact.lastname),
            },
            label: {
              classes: "form-label",
              idFor: "lastname",
              text: t(contact.lastname),
              variant: "label",
            },
            required: true,
          },
          {
            error: {
              classes: "invalid px-2",
              text: t(contact.validation.emailRequired),
            },
            input: {
              classes: "form-control",
              name: "email",
              placeholder: t(contact.email),
              type: "email",
            },
            label: {
              classes: "form-label",
              idFor: "email",
              text: t(contact.email),
              variant: "label",
            },
            required: true,
          },
          {
            error: {
              classes: "invalid px-2",
              text: t(contact.validation.phoneRequired),
            },
            input: {
              classes: "form-control",
              name: "phone",
              placeholder: t(contact.phone),
            },
            label: {
              classes: "form-label",
              idFor: "phone",
              text: t(contact.phone),
              variant: "label",
            },
            required: true,
          },
          {
            error: {
              classes: "invalid px-2",
              text: t(contact.validation.subjectRequired),
            },
            input: {
              classes: "form-control",
              name: "subject",
              placeholder: t(contact.subject),
            },
            label: {
              classes: "form-label",
              idFor: "subject",
              text: t(contact.subject),
              variant: "label",
            },
            required: true,
          },
          {
            error: {
              classes: "invalid px-2",
              text: t(contact.validation.messageRequired),
            },
            input: {
              classes: "form-control",
              name: "message",
              placeholder: t(contact.message),
              rows: 3,
            },
            label: {
              classes: "form-label",
              idFor: "message",
              text: t(contact.message),
              variant: "label",
            },
            required: true,
          },
          {
            classes: "mb-0 px-4 py-2 rounded-pill fw-bold btn-primary",
            type: "submit",
          },
        ],
      },
    },
    rulesProps: {
      blockProps: {
        id: "rules",
      },
      heading: {
        text: t(rules.heading),
        classes: "mb-0",
        variant: "h2",
      },
      float: true,
      list: [
        {
          svg: "clock",
          svgSize: "sm",
          text: {
            heading: {
              classes: "mb-0",
              text: t(rules.list[0].heading),
            },
          },
        },
        {
          svg: "clock",
          svgSize: "sm",
          text: {
            heading: {
              classes: "mb-0",
              text: t(rules.list[1].heading),
            },
          },
        },
        {
          svg: "smoke",
          svgSize: "sm",
          text: {
            heading: {
              classes: "mb-0",
              text: t(rules.list[2].heading),
            },
          },
        },
        {
          svg: "party",
          svgSize: "sm",
          text: {
            heading: {
              classes: "mb-0",
              text: t(rules.list[3].heading),
            },
          },
        },
      ],
    },
    footerProps: {
      contact: {
        header: {
          text: t(footer.contact),
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
                text: t(footer.address),
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
          text: t(footer.links),
          classes: "mb-5",
          variant: "h2",
        },
        list: [
          {
            type: "anchor",
            anchor: "top",
            text: t(navigation.main),
            offset: -104,
            classes: "mb-3 d-block",
          },
          {
            type: "anchor",
            anchor: "units",
            text: t(navigation.units),
            offset: -80,
            classes: "mb-3 d-block",
          },
          {
            type: "anchor",
            anchor: "common-spaces",
            text: t(navigation.commonSpaces),
            offset: -80,
            classes: "mb-3 d-block",
          },
          {
            type: "anchor",
            anchor: "services",
            text: t(navigation.services),
            offset: -80,
            classes: "mb-3 d-block",
          },
          {
            type: "anchor",
            anchor: "drive",
            text: t(navigation.drive),
            offset: -80,
            classes: "mb-3 d-block",
          },
          {
            type: "anchor",
            anchor: "contact",
            text: t(navigation.contact),
            offset: -80,
            classes: "mb-3 d-block",
          },
          {
            type: "link",
            anchor: "info",
            text: t(navigation.info),
            classes: "mb-0 d-block",
          },
        ],
      },
    },
  };

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
                <div className="col-10 col-sm-6 mb-3 mb-md-5">
                  <Sphere {...data.unitsProps.sphereProps1} />
                </div>
                <div className="col-10 col-sm-6 mb-3 mb-md-5">
                  <Sphere {...data.unitsProps.sphereProps2} />
                </div>
                <div className="col-10 col-sm-6 mb-3 mb-md-5">
                  <Sphere {...data.unitsProps.sphereProps3} />
                </div>
                <div className="col-10 col-sm-6 mb-3 mb-md-5">
                  <Gallery images={unitsImgs} name="unitsGallery" />
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </Block>
      {/* Common spaces */}
      <Block {...data.commonProps.blockProps}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text {...data.commonProps.heading} />
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text {...data.commonProps.text} />
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="order-2 order-xl-1 col-10 col-sm-6">
                  <div className="common">
                    <Gallery images={commonImgs} name="commonGallery" />
                  </div>
                </div>
                <div className="order-1 order-xl-2 col-10 col-sm-6">
                  <div className="mb-2">
                    <Sphere {...data.commonProps.sphereProps1} />
                  </div>
                  <div className="mb-2">
                    <Sphere {...data.commonProps.sphereProps2} />
                  </div>
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </Block>
      {/* Services */}
      <Block {...data.servicesProps.blockProps}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                {data.servicesProps?.heading && (
                  <div className="col-10 col-sm-12">
                    <Text {...data.servicesProps.heading} />
                  </div>
                )}
              </div>
            </div>
          </Spacer>
          {data.servicesProps.list.map(
            (service: ServiceProps, index: number) => (
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
            )
          )}
        </FadeInWhenVisible>
      </Block>
      {/* Drive */}
      <Block {...data.driveProps.blockProps}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="position-relative">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-10 col-sm-12 col-md-6">
                    <Drive {...data.driveProps.content} />
                  </div>
                  <div className="col-10 col-sm-12 col-md-6">
                    <img src={Map} alt="drive" />
                  </div>
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </Block>
      {/* Contact */}
      <Block {...data.contactProps.blockProps}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-10 col-sm-12">
                  <Text {...data.contactProps.heading} />
                  <Contact formData={data.contactProps.formData} />
                </div>
              </div>
            </div>
          </Spacer>
        </FadeInWhenVisible>
      </Block>
      {/* Rules */}
      <Block {...data.rulesProps.blockProps}>
        <FadeInWhenVisible>
          <Spacer>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12">
                  <Text {...data.rulesProps.heading} />
                </div>
              </div>
            </div>
          </Spacer>
          <Spacer bottomOnly={true}>
            <div className="container">
              <div className="row justify-content-center justify-content-sm-start">
                <div className="col-10 col-sm-12">
                  <ListGroup
                    list={data.rulesProps.list}
                    float={data.rulesProps.float}
                  />
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
    unitsImgs: allFile(
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
    commonImgs: allFile(
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
