import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import TextWithIcon from "./TextWithIcon";

export default {
  title: "Components/TextWithIcon",
  component: TextWithIcon,
  args: { heading: "some text here!!", subheading: "some other text here!!" },
} as ComponentMeta<typeof TextWithIcon>;

const Template: ComponentStory<typeof TextWithIcon> = (args) => (
  <TextWithIcon {...args} />
);

export const Default = Template.bind({});
Default.storyName = "TextWithIcon";
