import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ListGroupItem from "./ListGroupItem";

// Types
import Size from "./../../shared/enums/size";

// Assets
import BedQueen from "./../../images/svg/bed-queen.svg";

export default {
  title: "Compositions/ListGroupItem",
  component: ListGroupItem,
  argTypes: {
    textBottom: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
    svgSize: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
  },
} as ComponentMeta<typeof ListGroupItem>;

const Template: ComponentStory<typeof ListGroupItem> = (args) => (
  <ListGroupItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
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
  svgSize: Size.md,
};

export const TextWithIconAndSubheading = Template.bind({});
TextWithIconAndSubheading.args = {
  ...TextWithIconSmall.args,
  subText: "some text here!!",
  text: "some other text here!!",
};
