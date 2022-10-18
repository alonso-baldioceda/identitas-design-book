import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Page
import Homepage from "./Homepage";

// Components

// Stories
import ButtonLink from "../components/ButtonLink.stories";
import Card from "./../components/Card.stories";
import Hero from "../components/Hero.stories";
import ListGroup from "./../components/ListGroup.stories";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Pages/Homepage",
  component: Homepage,
} as ComponentMeta<typeof Homepage>;

const Template: ComponentStory<typeof Homepage> = (args) => (
  <Homepage {...args} />
);

export const Home = Template.bind({});
Home.args = {
  hero: { ...Hero.args },
  cardsData: [
    { distribution: Card.args, list: ListGroup.args, cta: ButtonLink.args },
    { distribution: Card.args, list: ListGroup.args, cta: ButtonLink.args },
    { distribution: Card.args, list: ListGroup.args, cta: ButtonLink.args },
  ],
};

Home.storyName = "Homepage";
