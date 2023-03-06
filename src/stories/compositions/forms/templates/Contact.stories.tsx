import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import { Contact as ContactComponent } from "./Contact";

// Types
import { Types } from "./../formControl/FormControl";

export default {
  title: "Compositions/Form/Templates",
  component: ContactComponent,
  argTypes: {},
} as ComponentMeta<typeof ContactComponent>;

const Template: ComponentStory<typeof ContactComponent> = (args) => (
  <ContactComponent {...args} />
);

export const Contact = Template.bind({});
Contact.args = {
  formData: [
    {
      control: Types.INPUT,
      error: { text: "Error", classes: "invalid px-2 mb-0" },
      input: {
        classes: "form-control",
        id: "firstname",
        name: "firstname",
        onChange: () => {},
        placeholder: "Firstname",
        required: true,
        type: "text",
        value: "firstname",
      },
      label: {
        text: "Firstname",
        variant: "label",
        idFor: "firstname",
        classes: "form-label",
      },
      touched: true,
      value: "firstname",
    },
    {
      control: Types.INPUT,
      error: { text: "Error", classes: "invalid px-2 mb-0" },
      input: {
        classes: "form-control",
        id: "lastname",
        name: "lastname",
        onChange: () => {},
        placeholder: "Lastname",
        required: true,
        type: "text",
        value: "lastname",
      },
      label: {
        text: "Lastname",
        variant: "label",
        idFor: "lastname",
        classes: "form-label",
      },
      touched: true,
      value: "lastname",
    },
    {
      control: Types.INPUT,
      error: { text: "Error", classes: "invalid px-2 mb-0" },
      input: {
        classes: "form-control",
        id: "email",
        name: "email",
        onChange: () => {},
        placeholder: "Email",
        required: true,
        type: "email",
        value: "email",
      },
      label: {
        text: "Email",
        variant: "label",
        idFor: "email",
        classes: "form-label",
      },
      touched: true,
      value: "email",
    },
    {
      control: Types.INPUT,
      error: { text: "Error", classes: "invalid px-2 mb-0" },
      input: {
        classes: "form-control",
        id: "phone",
        name: "phone",
        onChange: () => {},
        placeholder: "Phone",
        required: false,
        type: "text",
        value: "phone",
      },
      label: {
        text: "Phone",
        variant: "label",
        idFor: "phone",
        classes: "form-label",
      },
      touched: true,
      value: "phone",
    },
    {
      control: Types.INPUT,
      error: { text: "Error", classes: "invalid px-2 mb-0" },
      input: {
        classes: "form-control",
        id: "subject",
        name: "subject",
        onChange: () => {},
        placeholder: "Subject",
        required: true,
        type: "text",
        value: "subject",
      },
      label: {
        text: "Subject",
        variant: "label",
        idFor: "subject",
        classes: "form-label",
      },
      touched: true,
      value: "subject",
    },
    {
      control: Types.TEXTAREA,
      error: { text: "Error", classes: "invalid px-2 mb-0" },
      input: {
        classes: "form-control",
        id: "message",
        name: "message",
        onChange: () => {},
        placeholder: "Message",
        required: true,
        rows: 6,
        type: "text",
        value: "textarea",
      },
      label: {
        text: "Message",
        variant: "label",
        idFor: "message",
        classes: "form-label",
      },
      touched: true,
      value: "Textarea",
    },
  ],
};
