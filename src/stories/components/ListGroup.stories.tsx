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

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  list: [
    {
      ...ListGroupItem.TextWithIcon.args,
    },
    {
      ...ListGroupItem.TextWithIcon.args,
    },
    {
      ...ListGroupItem.TextWithIcon.args,
    },
  ],
};

export const TextWithIconCustomSize = Template.bind({});
TextWithIconCustomSize.args = {
  list: [
    {
      ...ListGroupItem.TextWithIconCustomSize.args,
    },
    {
      ...ListGroupItem.TextWithIconCustomSize.args,
    },
    {
      ...ListGroupItem.TextWithIconCustomSize.args,
    },
  ],
};

export const TextWithIconAndSubheading = Template.bind({});
TextWithIconAndSubheading.args = {
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
