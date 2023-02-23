import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import { ErrorForm as ErrorFormComponent } from "./ErrorForm";

export default {
  title: "Compositions/Form",
  component: ErrorFormComponent,
  argTypes: {},
} as ComponentMeta<typeof ErrorFormComponent>;

const Template: ComponentStory<typeof ErrorFormComponent> = (args) => (
  <ErrorFormComponent {...args} />
);

export const ErrorForm = Template.bind({});
ErrorForm.args = {
  error: { text: "Error", classes: "invalid px-2" },
  touched: true,
};
