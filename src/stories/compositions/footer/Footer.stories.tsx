import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Footer from "./Footer";

// Constants
import NAV from "./../../../shared/constants/nav";

// Assets
import HomeIcon from "./../../../images/svg/home.svg";
import EnvelopeIcon from "./../../../images/svg/envelope.svg";
import PhoneIcon from "./../../../images/svg/phone.svg";

export default {
  title: "Compositions/Footer",
  component: Footer,
  args: {
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
      list: NAV,
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
    list: NAV,
  },
};
