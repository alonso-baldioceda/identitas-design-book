import React from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { color } from "./../shared/styles.js";

// Components
import MenuClose from "./MenuClose";

// Styles
const StyledStory = styled.div`
  width: 400px;
`;

export default {
  title: "Components/MenuClose",
  component: MenuClose,
  args: { colorOpen: color.black, colorClose: color.black, isOpen: false },
} as ComponentMeta<typeof MenuClose>;

const Template: ComponentStory<typeof MenuClose> = (args) => (
  <StyledStory className="position-relative bg-primary">
    <MenuClose {...args} />
  </StyledStory>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomOpenColor = Template.bind({});
CustomOpenColor.args = {
  colorOpen: "red",
};

export const CustomCloseColor = Template.bind({});
CustomCloseColor.args = {
  ...Default.args,
  colorClose: "blue",
  isOpen: true,
};
