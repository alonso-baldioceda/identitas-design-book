import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ListGroupItem from "./ListGroupItem";

// Assets
import BedQueen from "./../../images/svg/bed-queen.svg";

export default {
  title: "Compositions/ListGroupItem",
  component: ListGroupItem,
  args: {
    text: "some other text here!!",
    textBottom: 0,
    svg: "",
    svgSize: "medium",
  },
  argTypes: {
    textBottom: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
    svgSize: {
      control: "select",
      options: ["extra-small", "small", "medium", "large"],
    },
  },
} as ComponentMeta<typeof ListGroupItem>;

const Template: ComponentStory<typeof ListGroupItem> = (args) => (
  <ListGroupItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  svg: "",
  text: "some text here!!",
  textBottom: 0,
};

export const TextWithIconDefault = Template.bind({});
TextWithIconDefault.args = {
  ...Default.args,
  svg: <BedQueen />,
  text: "some more text here!!",
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
  subText: "some text here!!",
  svg: <BedQueen />,
  svgSize: "large",
  text: "some other text here!!",
};
