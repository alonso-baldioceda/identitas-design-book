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
    header: {
      text: "Contáctenos",
      classes: "mb-5",
      variant: "h2",
    },
    list: [
      {
        icon: <HomeIcon />,
        classes: "mb-3",
        text: {
          classes: "mb-0",
          text: "Costa Rica, Guanacaste, Río Piedras, Tilarán.",
          color: "#FFFFFF",
        },
      },
      {
        icon: <EnvelopeIcon />,
        classes: "mb-3",
        text: {
          classes: "mb-0",
          text: "vistalagoarenal@gmail.com",
          color: "#FFFFFF",
        },
      },
      {
        icon: <PhoneIcon />,
        classes: "mb-3",
        text: {
          classes: "mb-0",
          text: "+(506) 8327 4040",
          color: "#FFFFFF",
        },
      },
    ],
  },
  navigation: {
    header: {
      text: "Enlaces",
      classes: "mb-5",
      variant: "h2",
    },
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
        offset: -80,
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Anchor,
        anchor: "common-spaces",
        text: "Espacios comúnes",
        offset: -80,
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Anchor,
        anchor: "services",
        text: "Servicios",
        offset: -80,
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Anchor,
        anchor: "drive",
        text: "Cómo llegar?",
        offset: -80,
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Anchor,
        anchor: "contact",
        text: "Contáctenos",
        offset: -80,
        classes: "mb-3 d-block",
      },
      {
        type: LinkType.Link,
        anchor: "info",
        text: "Info",
        classes: "mb-0 d-block",
      },
    ],
  },
};
