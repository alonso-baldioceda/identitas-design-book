import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import BrandComponent from "./Brand";

export default {
  title: "Compositions/Header/Brand",
  component: BrandComponent,
  argTypes: {
    classes: {
      name: "Classes",
      control: "text",
    },
    fontWeight: {
      control: "select",
      name: "Font Weight",
      options: [400, 500, 600, 700, 800, 900],
    },
    showNameOnMobile: {
      name: "Hide Name On Mobile?",
      description: "Hide name on mobile devices",
    },
    location: {
      name: "Location",
      description: "Location of the page",
      control: "text",
    },
    size: {
      control: "select",
      name: "Size",
      // TODO: Add size enum
      options: ["sm", "md", "lg"],
    },
    svg: {
      name: "SVG",
      description: "Logo",
      control: "text",
    },
    text: {},
    to: {
      name: "To",
      description: "Link to",
      control: "text",
    },
  },
} as ComponentMeta<typeof BrandComponent>;

const Template: ComponentStory<typeof BrandComponent> = (args) => (
  <BrandComponent {...args} />
);

export const Brand = Template.bind({});
Brand.args = {
  classes: "me-3",
  fontWeight: 700,
  location: {
    pathname: "/",
  },
  svg: {
    icon: "bedQueen",
    size: "md",
  },
  text: {
    classes: "text-capitalize text-dark fw-bold mb-0",
    text: "My Company",
    variant: "span",
  },
  to: "main",
};
