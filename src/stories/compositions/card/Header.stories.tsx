import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Header from "./Header";

// Constants
import { COLOR_CONTROL } from "./../../../shared/constants/";

export default {
  title: "Compositions/Card/Header",
  component: Header,
  argTypes: {
    backgroundColor: {
      name: "Background Color",
      control: COLOR_CONTROL,
      description: "Background color of the component",
    },
    text: {
      name: "Text",
      control: "object",
      description: "Text to be displayed",
      table: {
        type: {
          summary: "object",
          detail: `{
            classes: string;
            text: string;
            variant: string;
            }`,
        },
      },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: {
    classes: "mb-0 py-4 text-capitalize",
    text: "title here!!",
    variant: "h3",
  },
  backgroundColor: "#81B29A",
};
