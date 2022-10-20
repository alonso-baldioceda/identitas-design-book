import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Card from "./Card";

// Stories
import * as ListGroup from "./ListGroup.stories";
import * as ButtonLink from "./ButtonLink.stories";

export default {
  title: "Molecules/Card",
  component: Card,
  args: {
    border: 4,
    cta: { ...ButtonLink.Default.args },
    foreignBackgroundColor: "primary",
    list: [...ListGroup.TextWithIconDefault.args?.list],
    preCta: "Reservar por",
    title: "title here!!",
    upfrontBackgroundColor: "transparent",
  },
  argTypes: {
    border: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5],
    },
    foreignBackgroundColor: {
      control: "select",
      options: ["primary", "secondary", "ternary"],
    },
    upfrontBackgroundColor: {
      control: "select",
      options: ["transparent", "white"],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const BookingSample = Template.bind({});
BookingSample.args = {
  border: 4,
  cta: { ...ButtonLink.Default.args },
  foreignBackgroundColor: "primary",
  list: [...ListGroup.TextWithIconDefault.args?.list],
  preCta: "Reservar por",
  title: "title here!!",
  upfrontBackgroundColor: "transparent",
};
