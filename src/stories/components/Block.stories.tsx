import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import BlockComponent from "./Block";

// Constants
// import { COLOR_CONTROL } from "./../../shared/constants/";

export default {
  title: "Components/Block",
  component: BlockComponent,
  argTypes: {},
} as ComponentMeta<typeof BlockComponent>;

const Template: ComponentStory<typeof BlockComponent> = (args) => (
  <BlockComponent {...args}>this is a test</BlockComponent>
);

export const Block = Template.bind({});
Block.args = {
  classes: "bg-secondary-pastel p-4 m-4",
};
