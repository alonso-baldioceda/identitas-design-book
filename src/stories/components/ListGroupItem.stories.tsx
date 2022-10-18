import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ListGroupItem from "./ListGroupItem";

// Assets
import imageFile from "./../../images/svg/bed-single.svg";

const image = {
  alt: "my image",
  src: imageFile,
};

export default {
  title: "Components/ListGroupItem",
  component: ListGroupItem,
  args: {
    alt: image.alt,
    src: image.src,
    text: "some text here!!",
  },
} as ComponentMeta<typeof ListGroupItem>;

const Template: ComponentStory<typeof ListGroupItem> = (args) => (
  <ListGroupItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "some text here!!",
};

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  ...Default.args,
  alt: image.alt,
  src: image.src,
  text: "some other text here!!",
};

export const TextWithIconCustomSize = Template.bind({});
TextWithIconCustomSize.args = {
  ...TextWithIcon.args,
  alt: image.alt,
  height: 60,
  src: image.src,
  width: 60,
};

export const TextWithIconAndSubheading = Template.bind({});
TextWithIconAndSubheading.args = {
  ...TextWithIcon.args,
  alt: image.alt,
  height: 50,
  small: "some other text here!!",
  src: image.src,
  width: 50,
};
