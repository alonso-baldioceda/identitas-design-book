import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Footer from "./Footer";
import { Types as LinkTypes } from "./../components/Link";

// Stories
// import * as Layout from "./../compositions/Layout.stories";

// Assets
import HomeIcon from "./../../images/svg/home.svg";
import EnvelopeIcon from "./../../images/svg/envelope.svg";
import PhoneIcon from "./../../images/svg/phone.svg";
// import CallIcon from "./../../images/svg/call.svg";
// import FacebookIcon from "./../../images/svg/facebook.svg";
// import InstagramIcon from "./../../images/svg/instagram.svg";

const navList = [
  {
    type: LinkTypes.Anchor,
    anchor: "main",
    text: "Inicio",
  },
  {
    type: LinkTypes.Anchor,
    anchor: "units",
    text: "Cabinas",
  },
  {
    type: LinkTypes.Anchor,
    anchor: "common-spaces",
    text: "Espacios comúnes",
  },
  {
    type: LinkTypes.Anchor,
    anchor: "services",
    text: "Servicios",
  },
  {
    type: LinkTypes.Anchor,
    anchor: "drive",
    text: "Cómo llegar?",
  },
  {
    type: LinkTypes.Anchor,
    anchor: "contact",
    text: "Contáctenos",
  },
  {
    type: LinkTypes.Link,
    anchor: "info",
    text: "Info",
  },
];

export default {
  title: "Compositions/Footer",
  component: Footer,
  args: {
    bgcolor: "dark",
    contact: {
      header: "Contáctenos",
      list: [
        {
          icon: <HomeIcon />,
          text: "Costa Rica, Guanacaste, Río Piedras, Tilarán.",
        },
        {
          icon: <EnvelopeIcon />,
          text: "vistalagoarenal@gmail.com",
        },
        {
          icon: <PhoneIcon />,
          text: "+(506) 8327 4040",
        },
      ],
    },
    navigation: {
      header: "Enlaces",
      list: navList,
    },
  },
  argTypes: {
    bgColor: {
      control: "select",
      options: ["dark", "light"],
    },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  bgcolor: "dark",
  contact: {
    header: "Contáctenos",
    list: [
      {
        icon: <HomeIcon />,
        text: "Costa Rica, Guanacaste, Río Piedras, Tilarán.",
      },
      {
        icon: <EnvelopeIcon />,
        text: "vistalagoarenal@gmail.com",
      },
      {
        icon: <PhoneIcon />,
        text: "+(506) 8327 4040",
      },
    ],
  },
  navigation: {
    header: "Enlaces",
    list: navList,
  },
};
