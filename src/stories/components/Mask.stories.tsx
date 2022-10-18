import React from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Mask from "./Mask";

// Styles
const StyledStory = styled.div`
  height: 400px;
`;

export default {
  title: "Components/Mask",
  component: Mask,
  args: { bgcolor: "default" },
} as ComponentMeta<typeof Mask>;

const Template: ComponentStory<typeof Mask> = (args) => (
  <StyledStory className="position-relative">
    <Mask {...args} />
  </StyledStory>
);

export const Default = Template.bind({});

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  ...Default.args,
  bgcolor: "rgba(255, 0, 0, 0.5)",
};
