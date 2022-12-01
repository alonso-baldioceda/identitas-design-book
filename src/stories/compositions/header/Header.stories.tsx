import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

// Components
import Header from "./Header";
import { LinkIconSizes } from "./../../components/LinkIcon";

// Constants
import NAV from "./../../../shared/constants/nav";

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
    logoMarginRight: 3,
    svg: <LogoIcon />,
    text: "Company name",
    to: "main",
  },
  languages: ["es", "en"],
  showLanguages: true,
  navigation: NAV,
  call: {
    icon: <PhoneIcon />,
    me: 0,
    size: LinkIconSizes.xs,
    text: "call us",
    url: "tel:+50683274040",
  },
  showCall: true,
  mobile: {
    bgColor: "dark",
    hideFrom: "xl",
    linkMb: 0,
    isOpen: true,
    languages: ["es", "en"],
    navigation: NAV,
    translate: "Idiomas",
  },
  showSocials: true,
  socials: [
    {
      icon: <FacebookIcon />,
      mb: 0,
      meSm: 3,
      meMd: 3,
      meLg: 3,
      meXl: 3,
      size: LinkIconSizes.xs,
      text: "Facebook",
      url: "https://www.facebook.com/vistalagoarenal",
    },
    {
      icon: <InstagramIcon />,
      mb: 0,
      meSm: 3,
      meMd: 3,
      meLg: 3,
      meXl: 0,
      size: LinkIconSizes.xs,
      text: "Instagram",
      url: "https://www.instagram.com/vistalagoarenal/",
    },
  ],
};
