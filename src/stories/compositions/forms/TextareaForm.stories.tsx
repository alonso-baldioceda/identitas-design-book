import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import TextareaForm from "./TextareaForm";

export default {
  title: "Compositions/Form/Form Control",
  component: TextareaForm,
  argTypes: {
    classes: {
      control: {
        type: "text",
      },
    },
    id: {
      control: {
        type: "text",
      },
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
