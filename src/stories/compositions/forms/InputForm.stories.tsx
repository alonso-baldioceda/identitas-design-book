import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import InputForm from "./InputForm";

export default {
  title: "Compositions/Form/Form Control",
  component: InputForm,
  argTypes: {
    classes: {
      description: "Classes to be applied to the input element",
      control: "text",
    },
    id: {
      description: "ID of the input element",
      control: "text",
    },
    name: {
      description: "Name of the input element",
      control: "text",
    },
    onChange: {
      description: "Function to be called when the input value changes",
      control: "function",
    },
    placeholder: {
      description: "Placeholder text for the input element",
      control: "text",
    },
    required: {
      description: "Whether the input element is required",
      control: "boolean",
    },
    type: {
      description: "Type of the input element",
      control: "text",
    },
    value: {
      description: "Value of the input element",
      control: "text",
    },
  },
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => (
  <InputForm {...args} />
);

export const Input = Template.bind({});
Input.args = {
  classes: "input-field",
  id: "input-field",
  name: "input-field",
  onChange: () => {},
  placeholder: "Input Field",
  required: true,
  type: "text",
  value: "Input Field",
};
