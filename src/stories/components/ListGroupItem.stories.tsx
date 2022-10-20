import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ListGroupItem from "./ListGroupItem";

// Assets
import BedQueen from "./../../images/svg/bed-queen.svg";

export default {
  title: "Components/ListGroupItem",
  component: ListGroupItem,
  args: {
    size: "default",
    text: "some text here!!",
    subtext: "some other text here!!",
    svg: "",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "default", "large"],
    },
  },
} as ComponentMeta<typeof ListGroupItem>;

const Template: ComponentStory<typeof ListGroupItem> = (args) => (
  <ListGroupItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  subtext: "",
  svg: "",
  text: "some text here!!",
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
  size: "small",
  svg: <BedQueen />,
};

export const TextWithIconAndSubheading = Template.bind({});
TextWithIconAndSubheading.args = {
  ...TextWithIconDefault.args,
  size: "large",
  subtext: "some other text here!!",
  svg: <BedQueen />,
};
