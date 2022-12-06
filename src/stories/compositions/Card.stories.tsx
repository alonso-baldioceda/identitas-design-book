import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Card from "./Card";

// Types
import Size from "./../../shared/enums/size";

// Assets
import BedQueen from "./../../images/svg/bed-queen.svg";

export default {
  title: "Compositions/Card",
  component: Card,
  argTypes: {
    border: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5],
    },
    foreignBackgroundColor: {
      control: "select",
      options: ["primary", "secondary", "ternary", "airbnb"],
    },
    // TODO: check contrast
    upfrontBackgroundColor: {
      control: "select",
      options: ["transparent", "white", "primary", "secondary", "ternary"],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  border: 4,
  airbnb: {
    appearance: "airbnb",
    bold: true,
    disabled: false,
    mb: 0,
    px: 4,
    py: 2,
    rounded: true,
    targetBlank: false,
    text: "Airbnb",
    url: "https://www.google.com/",
  },
  foreignBackgroundColor: "primary",
  list: [
    {
      svg: <BedQueen />,
      svgSize: Size.sm,
      text: "some text here!!",
      textBottom: 0,
    },
  ],
  preCta: "Reservar por",
  title: "title here!!",
  upfrontBackgroundColor: "transparent",
};
