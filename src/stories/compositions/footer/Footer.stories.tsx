import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Footer from "./Footer";

// Assets
import HomeIcon from "./../../../images/svg/home.svg";
import EnvelopeIcon from "./../../../images/svg/envelope.svg";
import PhoneIcon from "./../../../images/svg/phone.svg";

// Constants
import { COLOR_CONTROL } from "./../../../shared/constants";

// Types
import LinkType from "./../../../shared/enums/linkType";

export default {
  title: "Compositions/Footer",
  component: Footer,
  argTypes: {
    bgColor: {
      name: "Background Color",
      description: "Background color",
      control: COLOR_CONTROL,
    },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  bgColor: "#000",
  contact: {
    header: "Contáctenos",
    list: [
      {
        icon: <HomeIcon />,
        text: "Costa Rica, Guanacaste, Río Piedras, Tilarán.",
        classes: "mb-3",
      },
      {
        icon: <EnvelopeIcon />,
        text: "vistalagoarenal@gmail.com",
        classes: "mb-3",
      },
      {
        icon: <PhoneIcon />,
        text: "+(506) 8327 4040",
        classes: "mb-3",
      },
    ],
  },
  navigation: {
    header: "Enlaces",
    list: [
      {
        type: LinkType.Anchor,
        anchor: "top",
        text: "Inicio",
        offset: -104,
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Anchor,
        anchor: "units",
        text: "Cabinas",
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Anchor,
        anchor: "common-spaces",
        text: "Espacios comúnes",
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Anchor,
        anchor: "services",
        text: "Servicios",
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Anchor,
        anchor: "drive",
        text: "Cómo llegar?",
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Anchor,
        anchor: "contact",
        text: "Contáctenos",
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Link,
        anchor: "info",
        text: "Info",
        classes: "mb-3 d-block",
      },
    ],
  },
};
