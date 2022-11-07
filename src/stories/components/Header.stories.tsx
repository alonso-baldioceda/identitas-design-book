import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Header from "./Header";

// Assets
import Logo from "./../../images/svg/logo-black.svg";
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";

export default {
  title: "Molecules/Header",
  component: Header,
  args: {
    brand: {
      logo: <Logo />,
      text: "Company name",
      to: "/#topPage",
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  brand: {
    logo: <Logo />,
    text: "Company name",
    to: "/#topPage",
  },

  navigation: [
    {
      name: "main",
      anchor: "#main",
      text: "Inicio",
    },
    {
      name: "units",
      anchor: "#units",
      text: "Cabinas",
    },
    {
      name: "common",
      anchor: "#common-spaces",
      text: "Espacios comúnes",
    },
    {
      name: "services",
      anchor: "#services",
      text: "Servicios",
    },
    {
      name: "drive",
      anchor: "#drive",
      text: "Cómo llegar?",
    },
    {
      name: "contact",
      anchor: "#contact",
      text: "Contáctenos",
    },
  ],

  socials: [
    {
      text: "Instagram",
      url: "https://www.instagram.com/vistalagoarenal/",
      icon: <InstagramIcon />,
    },
    {
      text: "Facebook",
      url: "https://www.facebook.com/vistalagoarenal/",
      icon: <FacebookIcon />,
    },
  ],
};
