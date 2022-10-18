import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import ListGroupItem from "./ListGroupItem";

// Assets
import imageFile from "./../../images/svg/bed-single.svg";

const image = {
  src: imageFile,
  alt: "my image",
};

export default {
  title: "Components/ListGroupItem",
  component: ListGroupItem,
  args: {
    text: "some text here!!",
  },
} as ComponentMeta<typeof ListGroupItem>;

const Template: ComponentStory<typeof ListGroupItem> = (args) => (
  <ListGroupItem {...args} />
);

export const Default = Template.bind({});

export const TextWithIcon = Template.bind({});
TextWithIcon.args = { ...Default.args, alt: image.alt, src: image.src };

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
