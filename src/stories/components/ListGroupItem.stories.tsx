import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ListGroupItemComponent from "./ListGroupItem";

// Constants
import { SPACING_OPTIONS, SIZE_OPTIONS } from "./../../shared/constants/";

// Assets
import BedQueen from "./../../images/svg/bed-queen.svg";

export default {
  title: "Compositions",
  component: ListGroupItemComponent,
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
} as ComponentMeta<typeof ListGroupItemComponent>;

const Template: ComponentStory<typeof ListGroupItemComponent> = (args) => (
  <ListGroupItemComponent {...args} />
);

export const ListGroupItem = Template.bind({});
ListGroupItem.args = {
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
  ...ListGroupItem.args,
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
