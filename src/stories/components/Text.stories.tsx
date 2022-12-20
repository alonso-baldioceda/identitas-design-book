import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import TextComponent from "./Text";

// Constants
import { COLOR_CONTROL } from "./../../shared/constants";

export default {
  title: "Components",
  component: TextComponent,
  argTypes: {
    align: {
      name: "Align",
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
    },
    text: {
      name: "Text",
      control: {
        type: "select",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "p",
          "span",
          "small",
          "label",
        ],
      },
    },
    color: {
      name: "Color",
      control: COLOR_CONTROL,
    },
    variant: {
      name: "Variant",
      control: {
        type: "select",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "p",
          "span",
          "small",
          "label",
        ],
      },
    },
    className: {
      name: "ClassName",
      control: {
        type: "text",
      },
    },
    noWrap: {
      name: "No Wrap?",
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof TextComponent>;

const Template: ComponentStory<typeof TextComponent> = (args) => (
  <TextComponent {...args} />
);

export const Text = Template.bind({});
Text.args = {
  // color: "red",
  text: "hi",
  variant: "h1",
  classes: "",
  noWrap: true,
};
