import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Header from "./Header";
import { LinkIconSizes } from "./../../components/LinkIcon";

// Constants
import NAV from "./../../../shared/constants/nav";

// Assets
import PhoneIcon from "./../../../images/svg/call.svg";
import FacebookIcon from "./../../../images/svg/facebook.svg";
import InstagramIcon from "./../../../images/svg/instagram.svg";

export default {
  title: "Compositions/Header",
  component: Header,
  args: {
    brand: {
      duration: 500,
      fontWeight: 700,
      logoMarginRight: 3,
      offset: -70,
      smooth: true,
      spy: true,
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
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  brand: {
    duration: 500,
    fontWeight: 700,
    logoMarginRight: 3,
    offset: -70,
    smooth: true,
    spy: true,
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
