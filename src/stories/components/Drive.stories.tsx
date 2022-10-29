import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Drive from "./Drive";

//  Assets
import MapIcon from "./../../images/svg/navigator.svg";

export default {
  title: "Molecules/Drive",
  component: Drive,
  args: {
    buttonAppearance: "primary",
    heading: "Como llegar?",
    text: "Estamos ubicados en el pueblo Río Piedras, de Tilarán, Guanacaste.",
    icon: <MapIcon />,
    iconLeft: false,
    targetBlank: true,
    url: "https://www.google.com/maps/place/Cabinas+Vista+Lago+Arenal/@10.5610207,-84.9657641,18.77z/data=!4m8!3m7!1s0x0:0xa18ae1cb8859035e!5m2!4m1!1i2!8m2!3d10.5606132!4d-84.9653107?hl=es-419",
  },
} as ComponentMeta<typeof Drive>;

const Template: ComponentStory<typeof Drive> = (args) => <Drive {...args} />;

export const Default = Template.bind({
  buttonAppearance: "primary",
  heading: "Como llegar?",
  text: "Estamos ubicados en el pueblo Río Piedras, de Tilarán, Guanacaste.",
  icon: <MapIcon />,
  targetBlank: true,
  url: "https://www.google.com/maps/place/Cabinas+Vista+Lago+Arenal/@10.5610207,-84.9657641,18.77z/data=!4m8!3m7!1s0x0:0xa18ae1cb8859035e!5m2!4m1!1i2!8m2!3d10.5606132!4d-84.9653107?hl=es-419",
});

export const ImageLeft = Template.bind({});
ImageLeft.args = { ...Default.args, iconLeft: true };
