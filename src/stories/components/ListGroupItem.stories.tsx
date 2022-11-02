import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ListGroupItem from "./ListGroupItem";

// Assets
import BedQueen from "./../../images/svg/bed-queen.svg";

export default {
  title: "Molecules/ListGroupItem",
  component: ListGroupItem,
  args: {
    heading: "some other text here!!",
    headingBottom: 0,
    svg: "",
    svgSize: "default",
    text: "some text here!!",
    textBottom: 0,
  },
  argTypes: {
    headingBottom: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
    svgSize: {
      control: "select",
      options: ["small", "default", "large"],
    },
    textBottom: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
  },
} as ComponentMeta<typeof ListGroupItem>;

const Template: ComponentStory<typeof ListGroupItem> = (args) => (
  <ListGroupItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "",
  svg: "",
  heading: "some text here!!",
  headingBottom: 0,
  textBottom: 0,
};

export const TextWithIconDefault = Template.bind({});
TextWithIconDefault.args = {
  ...Default.args,
  svg: <BedQueen />,
  heading: "some more text here!!",
};

export const TextWithIconSmall = Template.bind({});
TextWithIconSmall.args = {
  ...TextWithIconDefault.args,
  svgSize: "small",
  svg: <BedQueen />,
};

export const TextWithIconAndSubheading = Template.bind({});
TextWithIconAndSubheading.args = {
  ...TextWithIconDefault.args,
  svgSize: "large",
  text: "some other text here!!",
  svg: <BedQueen />,
};
