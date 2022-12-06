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

export const TextWithIconDefault = Template.bind({});
TextWithIconDefault.args = {
  list: [
    {
      ...ListGroupItemStories.TextWithIconDefault.args,
    },
    {
      ...ListGroupItemStories.TextWithIconDefault.args,
    },
    {
      ...ListGroupItemStories.TextWithIconDefault.args,
    },
  ],
};

export const TextWithIconSmall = Template.bind({});
TextWithIconSmall.args = {
  list: [
    {
      ...ListGroupItemStories.TextWithIconSmall.args,
    },
    {
      ...ListGroupItemStories.TextWithIconSmall.args,
    },
    {
      ...ListGroupItemStories.TextWithIconSmall.args,
    },
  ],
};

export const TextWithIconLargeAndSubheading = Template.bind({});
TextWithIconLargeAndSubheading.args = {
  list: [
    {
      ...ListGroupItemStories.TextWithIconAndSubheading.args,
    },
    {
      ...ListGroupItemStories.TextWithIconAndSubheading.args,
    },
    {
      ...ListGroupItemStories.TextWithIconAndSubheading.args,
    },
  ],
};

export const TextWithIconFloated = Template.bind({});
TextWithIconFloated.args = {
  float: true,
  list: [
    {
      ...ListGroupItemStories.TextWithIconAndSubheading.args,
    },
    {
      ...ListGroupItemStories.TextWithIconAndSubheading.args,
    },
    {
      ...ListGroupItemStories.TextWithIconAndSubheading.args,
    },
  ],
};
