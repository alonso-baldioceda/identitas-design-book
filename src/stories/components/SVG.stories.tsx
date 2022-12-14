import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SVGComponent from "./SVG";

// Constants
import Size from "../../shared/enums/size.ts";

// Assets
import BedQueen from "./../../images/svg/bed-queen.svg";

export default {
  title: "Components",
  component: SVGComponent,
  argTypes: {
    size: {
      control: "select",
      name: "Size",
      options: ["xs", "sm", "md", "lg"],
    },
    icon: {
      name: "Icon",
      description: "SVGComponent icon",
      control: "text",
    },
  },
} as ComponentMeta<typeof SVGComponent>;

const Template: ComponentStory<typeof SVGComponent> = (args) => (
  <SVGComponent {...args} />
);

export const SVG = Template.bind({});
SVG.args = {
  icon: <BedQueen />,
  size: Size.md,
};
