import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Stories
import ListGroup from "./ListGroup";
import * as ListGroupItemStories from "./../components/ListGroupItem.stories";

export default {
  title: "Compositions/ListGroup",
  component: ListGroup,
} as ComponentMeta<typeof ListGroup>;

const Template: ComponentStory<typeof ListGroup> = (args) => (
  <ListGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      ...ListGroupItemStories.Default.args,
    },
    {
      ...ListGroupItemStories.Default.args,
    },
    {
      ...ListGroupItemStories.Default.args,
    },
  ],
};

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  list: [
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
  ],
};

export const TextWithIconSmall = Template.bind({});
TextWithIconSmall.args = {
  list: [
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
  ],
};

export const TextWithIconLargeAndSubheading = Template.bind({});
TextWithIconLargeAndSubheading.args = {
  list: [
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
  ],
};

export const TextWithIconFloated = Template.bind({});
TextWithIconFloated.args = {
  float: true,
  list: [
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
    {
      ...ListGroupItemStories.TextWithIcon.args,
    },
  ],
};
