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
  height: 82px;

  > div {
    position: relative;
  }
`;

export default {
  title: "Compositions/Header",
  component: Header,
  args: {
    brand: {
      // duration: 250,
      fontWeight: 700,
      logoMarginRight: 3,
      // offset: -70,
      // smooth: true,
      // spy: true,
      svg: <LogoIcon />,
      text: "Company name",
      to: "#",
    },
    hideLanguagesFrom: "xl",
    languages: ["es", "en"],
    navigation: NAV,
    call: {
      icon: <PhoneIcon />,
      me: 0,
      size: LinkIconSizes.xs,
      text: "call us",
      url: "tel:+50683274040",
    },
    mobile: {
      bgColor: "dark",
      hideFrom: "xl",
      isOpen: true,
      languages: ["es", "en"],
      navigation: NAV,
      translate: "Idiomas",
    },
    showCall: true,
    showLanguages: true,
    socials: [
      {
        icon: <FacebookIcon />,
        mb: 0,
        size: LinkIconSizes.xs,
        text: "Facebook",
        url: "https://www.facebook.com/vistalagoarenal",
      },
      {
        icon: <InstagramIcon />,
        mb: 0,
        size: LinkIconSizes.xs,
        text: "Instagram",
        url: "https://www.instagram.com/vistalagoarenal/",
      },
    ],
  },
  argTypes: {
    hideLanguagesFrom: {
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
  navigation: NAV,
  call: {
    icon: <PhoneIcon />,
    me: 0,
    size: LinkIconSizes.xs,
    text: "call us",
    url: "tel:+50683274040",
  },
  mobile: {
    bgColor: "dark",
    hideFrom: "xl",
    isOpen: true,
    languages: ["es", "en"],
    navigation: NAV,
    translate: "Idiomas",
  },
  showCall: true,
  showLanguages: true,
  socials: [
    {
      icon: <FacebookIcon />,
      mb: 0,
      size: LinkIconSizes.xs,
      text: "Facebook",
      url: "https://www.facebook.com/vistalagoarenal",
    },
    {
      icon: <InstagramIcon />,
      mb: 0,
      size: LinkIconSizes.xs,
      text: "Instagram",
      url: "https://www.instagram.com/vistalagoarenal/",
    },
  ],
};
