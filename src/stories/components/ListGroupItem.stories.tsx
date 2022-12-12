import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ListGroupItem from "./ListGroupItem";

// Constants
import { SPACING_OPTIONS, SIZE_OPTIONS } from "./../../shared/constants/";

// Assets
import BedQueen from "./../../images/svg/bed-queen.svg";

export default {
  title: "Compositions/ListGroupItem",
  component: ListGroupItem,
  argTypes: {
    text: {
      control: "object",
      name: "Text",
      description: "Text to display",
    },
    mb: {
      name: "Margin Bottom",
      control: "select",
      options: SPACING_OPTIONS,
    },
    mbSm: {
      name: "Margin Bottom (Small)",
      control: "select",
      options: SPACING_OPTIONS,
    },
    mbMd: {
      name: "Margin Bottom (Medium)",
      control: "select",
      options: SPACING_OPTIONS,
    },
    mbLg: {
      name: "Margin Bottom (Large)",
      control: "select",
      options: SPACING_OPTIONS,
    },
    svgSize: {
      control: "select",
      options: SIZE_OPTIONS,
    },
  },
} as ComponentMeta<typeof ListGroupItem>;

const Template: ComponentStory<typeof ListGroupItem> = (args) => (
  <ListGroupItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: {
    heading: {
      text: "some text here!!",
      mb: 0,
      mbSm: 0,
      mbMd: 0,
      mbLg: 0,
      mbXl: 0,
    },
  },
};

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  ...Default.args,
  svg: <BedQueen />,
  text: {
    heading: {
      text: "some text here!!",
      mb: 0,
      mbSm: 0,
      mbMd: 0,
      mbLg: 0,
      mbXl: 0,
    },
    bottom: {
      text: "some more text here!!",
      mb: 0,
      mbSm: 0,
      mbMd: 0,
      mbLg: 0,
      mbXl: 0,
    },
  },
};
