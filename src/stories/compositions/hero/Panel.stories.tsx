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
  title: "Compositions",
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
    borderRadius: {
      name: "Border Radius",
      description: "Border radius of the panel",
      control: { type: "number", min: 0, max: 50 },
    },
    borderColor: {
      name: "Border Color",
      description: "Border color of the panel",
      control: COLOR_CONTROL,
    },
    borderWidth: {
      name: "Border Width",
      description: "Border width of the panel",
      control: { type: "number", min: 0, max: 5 },
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
  text: "some text here!!!",
  classes: "p-2 p-lg-3 m-0 col-4",
  borderColor: "blue",
  borderRadius: 0,
  borderWidth: 0,
};
