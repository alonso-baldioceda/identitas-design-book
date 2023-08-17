import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import { Contact as ContactComponent } from "./Contact";

export default {
  title: "Compositions/Form/Templates",
  component: ContactComponent,
  argTypes: {
    handleSubmit: {
      control: "func",
    },
  },
} as ComponentMeta<typeof ContactComponent>;

const Template: ComponentStory<typeof ContactComponent> = (args) => (
  <ContactComponent {...args} />
);

export const Contact = Template.bind({});
Contact.args = {
  formData: {
    fields: [{}],
    button: {
      classes: "mb-0 px-4 py-2 rounded-pill fw-bold btn-primary",
      text: "Enviar",
      type: "submit",
    },
  },
  handleSubmit: () => console.log("hi"),
};
