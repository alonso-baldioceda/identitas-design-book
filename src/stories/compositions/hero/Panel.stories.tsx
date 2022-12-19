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
    size: {
      name: "Size Xs",
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 10,
      },
    },
    sizeSm: {
      name: "Size Sm",
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 10,
      },
    },
    sizeMd: {
      name: "Size Md",
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 10,
      },
    },
    sizeLg: {
      name: "Size Lg",
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 10,
      },
    },
    sizeXl: {
      name: "Size Xl",
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 10,
      },
    },
    pXs: { name: "Padding Xs", control: { type: "number", min: 0, max: 5 } },
    pSm: { name: "Padding Sm", control: { type: "number", min: 0, max: 5 } },
    pMd: { name: "Padding Md", control: { type: "number", min: 0, max: 5 } },
    pLg: { name: "Padding Lg", control: { type: "number", min: 0, max: 5 } },
    pXl: { name: "Padding Xl", control: { type: "number", min: 0, max: 5 } },
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
  borderColor: "blue",
  borderRadius: 0,
  borderWidth: 0,
  size: 100,
  sizeSm: 100,
  sizeMd: 60,
  sizeLg: 40,
  sizeXl: 40,
  pXs: 2,
  pSm: 2,
  pMd: 2,
  pLg: 3,
  pXl: 3,
  mXs: 0,
  mSm: 0,
  mMd: 0,
  mLg: 0,
  mXl: 0,
};
