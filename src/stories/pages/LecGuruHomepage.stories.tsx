import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Page
import Homepage from "./LecGuruHomepage";

// Assets
import HeroImage from "./../../images/home-hero.jpg";

export default {
  title: "Pages/LecGuru",
  component: Homepage,
} as ComponentMeta<typeof Homepage>;

const Template: ComponentStory<typeof Homepage> = (args) => (
  <Homepage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  location: "/",
  headerProps: {
    brand: {
      classes: "me-3",
      fontWeight: 700,
      svg: {
        icon: "logo",
        size: "sm",
      },
      text: {
        text: "Vista Lago Arenal",
        variant: "span",
      },
      to: "main",
    },
    call: {
      icon: "phone",
      classes: "mb-0 me-2 me-sm-3",
      size: "xs",
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
          text: "Inicio",
          offset: -104,
          classes: "mb-2",
        },
        {
          type: "anchor",
          anchor: "units",
          text: "Cabinas",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: "anchor",
          anchor: "common-spaces",
          text: "Espacios comúnes",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: "anchor",
          anchor: "services",
          text: "Servicios",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: "anchor",
          anchor: "drive",
          text: "Cómo llegar?",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: "anchor",
          anchor: "contact",
          text: "Contáctenos",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: "link",
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
        type: "anchor",
        anchor: "top",
        text: "Inicio",
        offset: -104,
        classes: "me-3 text-capitalize",
      },
      {
        type: "anchor",
        anchor: "units",
        text: "Cabinas",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: "anchor",
        anchor: "common-spaces",
        text: "Espacios comúnes",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: "anchor",
        anchor: "services",
        text: "Servicios",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: "anchor",
        anchor: "drive",
        text: "Cómo llegar?",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: "anchor",
        anchor: "contact",
        text: "Contáctenos",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: "link",
        anchor: "info",
        text: "Info",
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
        classes: "mb-0 me-2 me-sm-3 me-xl-0",
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
        classes: "p-2 p-lg-3 m-0 col-12 col-lg-7",
        position: "bottom-start",
        text: {
          text: "Estamos ubicados en Costa Rica, Guanacaste, Tilarán. En una loma frente al Lago Arenal.",
          classes: "mb-0",
          variant: "h1",
        },
      },
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
          type: "anchor",
          anchor: "top",
          text: "Inicio",
          offset: -104,
          classes: "mb-3 d-block",
        },
        {
          type: "anchor",
          anchor: "units",
          text: "Cabinas",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: "anchor",
          anchor: "common-spaces",
          text: "Espacios comúnes",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: "anchor",
          anchor: "services",
          text: "Servicios",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: "anchor",
          anchor: "drive",
          text: "Cómo llegar?",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: "anchor",
          anchor: "contact",
          text: "Contáctenos",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: "link",
          anchor: "info",
          text: "Info",
          classes: "mb-0 d-block",
        },
      ],
    },
  },
};

Default.storyName = "Homepage";
