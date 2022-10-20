import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Stories
import ListGroup from "./ListGroup";
import * as ListGroupItem from "./ListGroupItem.stories";

export default {
  title: "Components/ListGroup",
  component: ListGroup,
  args: {
    list: [
      {
        ...ListGroupItem.Default.args,
      },
      {
        ...ListGroupItem.Default.args,
      },
      {
        ...ListGroupItem.Default.args,
      },
    ],
  },
} as ComponentMeta<typeof ListGroup>;

const Template: ComponentStory<typeof ListGroup> = (args) => (
  <ListGroup {...args} />
);

export const Default = Template.bind({});

export const TextWithIconDefault = Template.bind({});
TextWithIconDefault.args = {
  list: [
    {
      ...ListGroupItem.TextWithIconDefault.args,
    },
    {
      ...ListGroupItem.TextWithIconDefault.args,
    },
    {
      ...ListGroupItem.TextWithIconDefault.args,
    },
  ],
};

export const TextWithIconSmall = Template.bind({});
TextWithIconSmall.args = {
  list: [
    {
      ...ListGroupItem.TextWithIconSmall.args,
    },
    {
      ...ListGroupItem.TextWithIconSmall.args,
    },
    {
      ...ListGroupItem.TextWithIconSmall.args,
    },
  ],
};

export const TextWithIconLargeAndSubheading = Template.bind({});
TextWithIconLargeAndSubheading.args = {
  list: [
    {
      ...ListGroupItem.TextWithIconAndSubheading.args,
    },
    {
      ...ListGroupItem.TextWithIconAndSubheading.args,
    },
    {
      ...ListGroupItem.TextWithIconAndSubheading.args,
    },
  ],
};
