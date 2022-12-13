import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

// Components
import Panel from "./Panel";

// Constants
import { COLOR_CONTROL, POSITIONS_OPTIONS } from "./../../../shared/constants/";

// Styles
const PanelWrapper = styled((props) => <div {...props} />)`
  min-height: 300px;
  position: relative;
`;

export default {
  title: "Components/Panel",
  component: Panel,
  argTypes: {
    bgColor: { name: "Background Color", control: COLOR_CONTROL },
    color: { name: "Color", control: COLOR_CONTROL },
    text: { name: "Text", control: "text" },
    position: {
      name: "Position",
      control: { type: "select", options: POSITIONS_OPTIONS },
    },
    borderRadius: { name: "Border Radius", control: "number" },
    borderColor: { name: "Border Color", control: COLOR_CONTROL },
    borderWidth: {
      name: "Border Width",
      control: { type: "number", min: 0, max: 5 },
    },
    colXs: { name: "Column Xs", control: { type: "number", min: 1, max: 12 } },
    colSm: { name: "Column Sm", control: { type: "number", min: 1, max: 12 } },
    colMd: { name: "Column Md", control: { type: "number", min: 1, max: 12 } },
    colLg: { name: "Column Lg", control: { type: "number", min: 1, max: 12 } },
    colXl: { name: "Column Xl", control: { type: "number", min: 1, max: 12 } },
    pXs: { name: "Padding Xs", control: { type: "number", min: 0, max: 5 } },
    pSm: { name: "Padding Sm", control: { type: "number", min: 0, max: 5 } },
    pMd: { name: "Padding Md", control: { type: "number", min: 0, max: 5 } },
    pLg: { name: "Padding Lg", control: { type: "number", min: 0, max: 5 } },
    pXl: { name: "Padding Xl", control: { type: "number", min: 0, max: 5 } },
  },
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => (
  <PanelWrapper>
    <Panel {...args} />
  </PanelWrapper>
);

export const Default = Template.bind({});
Default.args = {
  bgColor: "red",
  text: "some text here!!!",
  pXs: 2,
  pSm: 2,
  pMd: 2,
  pLg: 3,
  pXl: 3,
  colXs: 12,
  colSm: 12,
  colMd: 6,
  colLg: 4,
  colXl: 4,
  borderColor: "blue",
  borderRadius: 0,
  borderWidth: 0,
};
