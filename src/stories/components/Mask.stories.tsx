import React from "react";
import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import MaskComponent from "./Mask";

// Constants
import { COLOR_CONTROL } from "./../../shared/constants";

// Styles
const StyledStory = styled.div`
  height: 400px;
`;

export default {
  title: "Components/Mask",
  component: MaskComponent,
  argTypes: {
    bgColor: {
      name: "Background Color",
      description: "Background color of the mask",
      control: COLOR_CONTROL,
    },
    opacity: {
      name: "Opacity",
      description: "Opacity of the mask",
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof MaskComponent>;

const Template: ComponentStory<typeof MaskComponent> = (args) => (
  <StyledStory className="position-relative">
    <MaskComponent {...args} />
  </StyledStory>
);

export const Mask = Template.bind({});
Mask.args = {
  bgColor: "#000000",
  opacity: 15,
};
