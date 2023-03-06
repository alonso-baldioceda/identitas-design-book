import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import { FormControl as FormControlComponent } from "./FormControl";

// Types
import { Types } from "./FormControl";

export default {
  title: "Compositions/Form/Form Control",
  component: FormControlComponent,
  argTypes: {},
} as ComponentMeta<typeof FormControlComponent>;

const Template: ComponentStory<typeof FormControlComponent> = (args) => (
  <FormControlComponent {...args} />
);

export const FormControlInput = Template.bind({});

FormControlInput.args = {
  control: Types.INPUT,
  error: { text: "Error", classes: "invalid px-2 mb-0" },
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
  touched: "Input Field",
  value: "Input Field",
};

export const FormControlTextarea = Template.bind({});

FormControlTextarea.args = {
  control: Types.TEXTAREA,
  error: { text: "Error", classes: "invalid px-2 mb-0" },
  input: {
    classes: "form-control",
    id: "textarea-field",
    name: "textarea-field",
    onChange: () => {},
    placeholder: "Textarea Field",
    required: true,
    rows: 6,
    type: "text",
    value: "Textarea Field",
  },
  label: {
    text: "Label",
    variant: "label",
    idFor: "textarea-field",
    classes: "form-label",
  },
  touched: "Input Field",
  value: "Textarea Field",
};
