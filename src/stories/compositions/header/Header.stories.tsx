import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

// Components
import Header from "./Header";

// Constants
import { NAV, COLOR_CONTROL } from "./../../../shared/constants/";
import LinkType from "./../../../shared/enums/linkType";

// Types
import Size from "./../../../shared/enums/size";

// Assets
import PhoneIcon from "./../../../images/svg/call.svg";
import FacebookIcon from "./../../../images/svg/facebook.svg";
import InstagramIcon from "./../../../images/svg/instagram.svg";
import LogoIcon from "./../../../images/svg/logo-black.svg";

// Styles
const HeaderWrapper = styled.div`
  > div {
    position: relative;
  }
`;

export default {
  title: "Compositions/Header",
  component: Header,
  argTypes: {
    bgColor: {
      name: "Background Color",
      description: "Background color",
      control: COLOR_CONTROL,
    },
    brand: {
      name: "Brand",
      description: "Logo and company name as a single piece",
    },
    languages: {
      description: "Languages list",
      name: "Languages",
    },
    navigation: {
      description: "Navigation links",
      name: "Navigation",
    },
    call: {
      description: "Call feature",
      name: "Call",
    },
    showCall: {
      name: "Show Call?",
      description: "Show call feature",
    },
    mobile: {
      name: "Mobile",
      description: "Navigation and languages mobile's menu",
    },
    showLanguages: {
      name: "Show Languages?",
      description: "Show Languages list",
    },
    showSocials: {
      name: "Show Socials?",
      description: "Show socials list",
    },
    socials: {
      name: "Socials",
      description: "Facebook, Instagram, etc",
    },
    hideLanguagesFrom: {
      name: "Hide Languages From",
      control: "select",
      options: ["md", "lg", "xl"],
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <HeaderWrapper className="position-relative">
    <Header {...args} />
  </HeaderWrapper>
);

export const Default = Template.bind({});
Default.args = {
  fixed: true,
  brand: {
    fontWeight: 700,
    hideNameOnMobile: true,
    svg: <LogoIcon />,
    name: "Company name",
    to: "main",
  },
  minHeight: 84,
  hideLanguagesFrom: "xl",
  showLanguages: true,
  languages: ["es", "en"],
  showCall: true,
  call: {
    icon: <PhoneIcon />,
    me: 0,
    size: Size.xs,
    text: "call us",
    url: "tel:+50683274040",
  },
  mobile: {
    bgColor: "dark",
    hideFrom: "xl",
    isOpen: true,
    languages: ["es", "en"],
    navigation: [
      {
        type: LinkType.Anchor,
        anchor: "top",
        text: "Inicio",
        offset: -104,
        classes: "mb-2 mb-sm-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "units",
        text: "Cabinas",
        classes: "mb-2 mb-sm-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "common-spaces",
        text: "Espacios comúnes",
        classes: "mb-2 mb-sm-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "services",
        text: "Servicios",
        classes: "mb-2 mb-sm-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "drive",
        text: "Cómo llegar?",
        classes: "mb-2 mb-sm-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "contact",
        text: "Contáctenos",
        classes: "mb-2 mb-sm-2",
      },
      {
        type: LinkType.Link,
        anchor: "info",
        text: "Info",
        classes: "mb-2 mb-sm-2",
      },
    ],
    startingAt: 82,
    translate: "Idiomas",
  },
  separator: {
    xs: 2,
    sm: 2,
  },
  showSocials: true,
  showSwitchMode: true,
  socials: [
    {
      icon: <FacebookIcon />,
      mb: 0,
      me: 2,
      meSm: 3,
      meMd: 3,
      meLg: 3,
      meXl: 3,
      size: Size.xs,
      text: "Facebook",
      url: "https://www.facebook.com/vistalagoarenal",
    },
    {
      icon: <InstagramIcon />,
      mb: 0,
      me: 2,
      meSm: 3,
      meMd: 3,
      meLg: 3,
      meXl: 0,
      size: Size.xs,
      text: "Instagram",
      url: "https://www.instagram.com/vistalagoarenal/",
    },
  ],
  nav: {
    classes: "me-3",
    links: NAV,
  },
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  bgColor: "blue",
};
