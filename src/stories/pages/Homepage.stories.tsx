import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Page
import Homepage from "./Homepage";

// Stories
import * as Card from "./../components/Card.stories";
import * as Hero from "../components/Hero.stories";

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

export const Default = Template.bind({});
Default.args = {
  hero: { ...Hero.Default.args },
  cardsData: [
    { ...Card.BookingSample.args },
    { ...Card.BookingSample.args },
    { ...Card.BookingSample.args },
  ],
};
