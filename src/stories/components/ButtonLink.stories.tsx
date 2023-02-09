import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ButtonLinkComponent from "./ButtonLink";

// Constants
// import { COLOR_CONTROL } from "./../../shared/constants/";

export default {
  title: "Components/ButtonLink",
  component: ButtonLinkComponent,
  argTypes: {
    // appearance: {
    //   name: "Appearance",
    //   control: COLOR_CONTROL,
    // },
    disabled: {
      control: "boolean",
      options: [false, true],
    },
    classes: {
      control: "text",
      description: "Classes to be added to the component",
    },
    text: {
      control: "text",
      description: "Text to be displayed on the button",
    },
    url: {
      control: "text",
      description: "URL to be linked to",
    },
  },
} as ComponentMeta<typeof ButtonLinkComponent>;

const Template: ComponentStory<typeof ButtonLinkComponent> = (args) => (
  <ButtonLinkComponent {...args} />
);

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  classes: "mb-0 px-4 py-2 rounded-pill fw-bold btn-primary text-capitalize",
  text: "click me!!",
  url: "https://www.google.com/",
};
