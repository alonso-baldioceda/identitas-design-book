import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

// Components
import PanelComponent from "./Panel";

// Constants
import { COLOR_CONTROL, POSITIONS_OPTIONS } from "./../../../shared/constants/";

// Styles
const PanelWrapper = styled((props) => <div {...props} />)`
  min-height: 300px;
  position: relative;
`;

export default {
  title: "Compositions/Hero/Panel",
  component: PanelComponent,
  argTypes: {
    bgColor: {
      name: "Background Color",
      description: "Background color of the panel",
      control: COLOR_CONTROL,
    },
    color: {
      name: "Text Color",
      description: "Text color of the panel",
      control: COLOR_CONTROL,
    },
    text: { name: "Text", description: "Text of the panel", control: "text" },
    position: {
      name: "Position",
      description: "Position of the panel",
      control: { type: "select", options: POSITIONS_OPTIONS },
    },
    borderColor: {
      name: "Border Color",
      description: "Border color of the panel",
      control: COLOR_CONTROL,
    },
  },
} as ComponentMeta<typeof PanelComponent>;

const Template: ComponentStory<typeof PanelComponent> = (args) => (
  <PanelWrapper>
    <PanelComponent {...args} />
  </PanelWrapper>
);

export const Panel = Template.bind({});
Panel.args = {
  bgColor: "red",
  classes: "p-2 p-lg-3 m-0 col-4 border border-4 text-capitalize",
  borderColor: "blue",
  text: {
    text: "some text here!!",
    classes: "mb-5",
    variant: "h2",
  },
};
