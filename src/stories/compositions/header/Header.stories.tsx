import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

// Components
import Header from "./Header";

// Constants
import NAV from "./../../../shared/constants/nav";

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
  brand: {
    fontWeight: 700,
    hideNameOnMobile: true,
    logoMarginRight: 3,
    svg: <LogoIcon />,
    name: "Company name",
    to: "main",
  },
  minHeight: 84,
  hideLanguagesFrom: "xl",
  showLanguages: true,
  languages: ["es", "en"],
  navigation: NAV,
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
    linkMb: 1,
    navigation: NAV,
    startingAt: 82,
    translate: "Idiomas",
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
};
