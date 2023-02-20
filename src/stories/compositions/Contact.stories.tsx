import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Contact from "./Contact";

export default {
  title: "Compositions/Contact",
  component: Contact,
  argTypes: {},
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => <Contact />;

export const Default = Template.bind({});
Default.args = {};
