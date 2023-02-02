import React from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { color } from "./../../shared/styles.js";

// Components
import MenuCloseComponent from "./MenuClose";

// Constants
import { COLOR_CONTROL } from "./../../../shared/constants/";

// Styles
const StyledStory = styled.div`
  width: 400px;
`;

export default {
  title: "Components",
  component: MenuCloseComponent,
  argTypes: {
    colorOpen: { name: "Color Open", control: COLOR_CONTROL },
    colorClose: { name: "Color Close", control: COLOR_CONTROL },
  },
} as ComponentMeta<typeof MenuCloseComponent>;

const Template: ComponentStory<typeof MenuCloseComponent> = (args) => (
  <StyledStory className="p-5">
    <MenuCloseComponent {...args} />
  </StyledStory>
);

export const CloseMenu = Template.bind({});
CloseMenu.args = {
  colorOpen: color.body,
  colorClose: color.body,
  isOpen: false,
  setIsOpen: () => void {},
};
