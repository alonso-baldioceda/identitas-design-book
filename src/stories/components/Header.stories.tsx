import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Header from "./Header";

// Assets
import Logo from "./../../images/svg/logo-black.svg";
import PhoneIcon from "./../../images/svg/call.svg";
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
    navigation: [
      {
        type: "anchor",
        anchor: "#main",
        text: "Inicio",
      },
      {
        type: "anchor",
        anchor: "#units",
        text: "Cabinas",
      },
      {
        type: "anchor",
        anchor: "#common-spaces",
        text: "Espacios comúnes",
      },
      {
        type: "anchor",
        anchor: "#services",
        text: "Servicios",
      },
      {
        type: "anchor",
        anchor: "#drive",
        text: "Cómo llegar?",
      },
      {
        type: "anchor",
        anchor: "#contact",
        text: "Contáctenos",
      },
      {
        type: "link",
        anchor: "#info",
        text: "Info",
      },
    ],
    phone: "+50683274040",
    phoneIcon: <PhoneIcon />,
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
      type: "anchor",
      anchor: "#main",
      text: "Inicio",
    },
    {
      type: "anchor",
      anchor: "#units",
      text: "Cabinas",
    },
    {
      type: "anchor",
      anchor: "#common-spaces",
      text: "Espacios comúnes",
    },
    {
      type: "anchor",
      anchor: "#services",
      text: "Servicios",
    },
    {
      type: "anchor",
      anchor: "#drive",
      text: "Cómo llegar?",
    },
    {
      type: "anchor",
      anchor: "#contact",
      text: "Contáctenos",
    },
    {
      type: "link",
      anchor: "#info",
      text: "Info",
    },
  ],
  phone: "+50683274040",
  phoneIcon: <PhoneIcon />,
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
