import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

// Components
import Header from "./Header";

// Constants
import { COLOR_CONTROL } from "./../../../shared/constants/";

// Types
import Size from "./../../../shared/enums/size";
import LinkType from "./../../../shared/enums/linkType";

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
    classes: "me-3",
  },
  minHeight: 84,
  hideLanguagesFrom: "xl",
  showLanguages: true,
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
  showCall: true,
  call: {
    icon: <PhoneIcon />,
    classes: "mb-0",
    size: Size.xs,
    text: "call us",
    url: "tel:+50683274040",
  },
  mobile: {
    bgColor: "dark",
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
        text: "Espacios com??nes",
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
        text: "C??mo llegar?",
        offset: -80,
        classes: "mb-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "contact",
        text: "Cont??ctenos",
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
    translate: "Idiomas",
  },
  separator: {
    classes: "mx-3",
  },
  showSocials: true,
  showSwitchMode: true,
  socials: [
    {
      icon: <FacebookIcon />,
      classes: "mb-0 me-2 me-sm-3 me-md-3 me-lg-3 me-xl-3",
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
      text: "Espacios com??nes",
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
      text: "C??mo llegar?",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "contact",
      text: "Cont??ctenos",
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
};
