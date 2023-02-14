import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Page
import Info from "./Info";

// Types
import LinkType from "../../shared/enums/linkType";
import Size from "../../shared/enums/size";

// Assets

import PhoneIcon from "./../../images/svg/call.svg";
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";

export default {
  title: "Pages/Info",
  component: Info,
} as ComponentMeta<typeof Info>;

const Template: ComponentStory<typeof Info> = (args) => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  location: "/info",
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
      classes: "mb-0 me-2 me-sm-3",
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
        classes: "text-uppercase me-0",
      },
    ],
    location: "/info",
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
      classes: "mx-3 d-none d-xl-block",
    },
    showLanguages: true,
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
