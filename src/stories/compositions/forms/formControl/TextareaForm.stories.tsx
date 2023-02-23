import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import TextareaForm from "./TextareaForm";

export default {
  title: "Compositions/Form/Form Control",
  component: TextareaForm,
  argTypes: {
    classes: {
      control: "text",
      description: "Classes to be applied to the textarea",
    },
    id: {
      control: "text",
      description: "ID of the textarea",
    },
    name: {
      control: "text",
      description: "Name of the textarea",
    },
    onChange: {
      control: "function",
      description: "Function to be called when the textarea is changed",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
    required: {
      control: "boolean",
      description: "Whether the textarea is required or not",
    },
    rows: {
      control: "number",
      description: "Number of rows for the textarea",
    },
    value: {
      control: "text",
      description: "Value of the textarea",
    },
  },
} as ComponentMeta<typeof TextareaForm>;

const Template: ComponentStory<typeof TextareaForm> = (args) => (
  <TextareaForm {...args} />
);

export const Textarea = Template.bind({});
Textarea.args = {
  classes: "textarea-field w-100",
  id: "textarea-field",
  name: "textarea-field",
  onChange: () => {},
  placeholder: "Textarea Field",
  required: true,
  rows: 3,
  value: "Textarea Field",
};
