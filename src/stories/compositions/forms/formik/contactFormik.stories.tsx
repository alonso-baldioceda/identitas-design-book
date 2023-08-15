import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import { ContactFormik as ContactFormikComponent } from "./contactFormik";

// Types
import { Types } from "./../formControl/FormControl";

// Stories
import * as ContactStories from "./../templates/Contact.stories";

export default {
  title: "Compositions/Form/Formik",
  component: ContactFormikComponent,
  argTypes: {},
} as ComponentMeta<typeof ContactFormikComponent>;

const Template: ComponentStory<typeof ContactFormikComponent> = (args) => (
  <ContactFormikComponent {...args} />
);

export const ContactFormik = Template.bind({});

ContactFormik.args = {
  ...ContactStories.Contact.args,
};
