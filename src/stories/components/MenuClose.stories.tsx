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
  args: {
    colorOpen: color.black,
    colorClose: color.black,
    isOpen: false,
    setIsOpen: () => void {},
  },
  argTypes: {
    colorOpen: {
      control: "select",
      options: ["primary", "secondary", "ternary", "dark", "white"],
    },
    colorClose: {
      control: "select",
      options: ["primary", "secondary", "ternary", "dark", "white"],
    },
  },
} as ComponentMeta<typeof MenuClose>;

const Template: ComponentStory<typeof MenuClose> = (args) => (
  <StyledStory className="p-5">
    <MenuClose {...args} />
  </StyledStory>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomOpenColor = Template.bind({});
CustomOpenColor.args = {
  colorOpen: "primary",
};

export const CustomCloseColor = Template.bind({});
CustomCloseColor.args = {
  ...Default.args,
  colorClose: "primary",
  isOpen: true,
};
