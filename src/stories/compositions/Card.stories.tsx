import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Card from "./Card";

// Stories
import * as ListGroup from "./../compositions/ListGroup.stories";
import * as ButtonLink from "./../components/ButtonLink.stories";

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

export const BookingSample = Template.bind({});
BookingSample.args = {
  border: 4,
  cta: { ...ButtonLink.Airbnb.args },
  foreignBackgroundColor: "primary",
  list: [...ListGroup.TextWithIconDefault.args?.list],
  preCta: "Reservar por",
  title: "title here!!",
  upfrontBackgroundColor: "transparent",
};
