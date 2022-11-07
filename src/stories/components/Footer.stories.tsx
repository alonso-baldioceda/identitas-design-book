import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Footer from "./Footer";

// Assets
import HomeIcon from "./../../images/svg/home.svg";
import EnvelopeIcon from "./../../images/svg/envelope.svg";
import PhoneIcon from "./../../images/svg/phone.svg";

export default {
  title: "Molecules/Footer",
  component: Footer,
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
    list: [
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
  },
};
