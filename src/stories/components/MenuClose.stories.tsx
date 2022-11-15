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
  args: { color: color.black },
} as ComponentMeta<typeof MenuClose>;

const Template: ComponentStory<typeof MenuClose> = (args) => (
  <StyledStory className="position-relative">
    <MenuClose {...args} />
  </StyledStory>
);

export const Default = Template.bind({});

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...Default.args,
  // TODO: handle color using props
  color: "rgba(255, 0, 0, 1)",
};
