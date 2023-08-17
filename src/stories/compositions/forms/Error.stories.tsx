import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import { Error as ErrorComponent } from "./Error";

export default {
  title: "Compositions/Form",
  component: ErrorComponent,
  argTypes: {},
} as ComponentMeta<typeof ErrorComponent>;

const Template: ComponentStory<typeof ErrorComponent> = (args) => (
  <ErrorComponent {...args} />
);

export const Error = Template.bind({});
Error.args = {
  error: { text: "Error", classes: "invalid px-2" },
  touched: "error",
};
