import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Page
import Info from "./Info";

// Types
import LinkType from "../../shared/enums/linkType";
import Size from "../../shared/enums/size";

// Assets
import LogoIcon from "./../../images/svg/logo-black.svg";
import PhoneIcon from "./../../images/svg/call.svg";
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";
import HomeIcon from "./../../images/svg/home.svg";
import EnvelopeIcon from "./../../images/svg/envelope.svg";

export default {
  title: "Pages/Info",
  component: Info,
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerProps: {
    fixed: true,
    minHeight: 84,
    hideLanguagesFrom: "xl",
    showLanguages: true,
    showCall: true,
    call: {
      icon: <PhoneIcon />,
      classes: "mb-0",
      size: Size.xs,
      text: "call us",
      url: "tel:+50683274040",
    },
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
    separator: {
      classes: "mx-3",
    },
    showSocials: true,
    showSwitchMode: true,
    socials: [
      {
        icon: <FacebookIcon />,
        classes: "mb-0 mx-2 mx-sm-3",
        size: Size.xs,
        text: "Facebook",
        url: "https://www.facebook.com/vistalagoarenal",
      },
      {
        icon: <InstagramIcon />,
        classes: "mb-0 me-2 me-sm-3 me-md-3 me-lg-3 me-xl-3",
        size: Size.xs,
        text: "Instagram",
        url: "https://www.instagram.com/vistalagoarenal/",
      },
    ],
    brand: {
      fontWeight: 700,
      hideNameOnMobile: true,
      svg: "logo",
      name: "Vista Lago Arenal",
      to: "main",
      classes: "me-3",
    },
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
              color: "#FFFFFF",
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
              color: "#FFFFFF",
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
              color: "#FFFFFF",
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
