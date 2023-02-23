import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import { FormControl as FormControlComponent } from "./FormControl";

export default {
  title: "Compositions/Form/Form Control",
  component: FormControlComponent,
  argTypes: {},
} as ComponentMeta<typeof FormControlComponent>;

const Template: ComponentStory<typeof FormControlComponent> = (args) => (
  <FormControlComponent {...args} />
);

export const FormControl = Template.bind({});
FormControl.args = {
  error: { text: "Error", classes: "invalid px-2 mb-0" },
  id: "input-field",
  input: {
    classes: "form-control",
    id: "input-field",
    name: "input-field",
    onChange: () => {},
    placeholder: "Input Field",
    required: true,
    type: "text",
    value: "Input Field",
  },
  label: {
    text: "Label",
    variant: "label",
    idFor: "input-field",
    classes: "form-label",
  },
  touched: true,
  value: "Input Field",
};
