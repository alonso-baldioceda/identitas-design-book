import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Brand from "./Brand";

export default {
  title: "Compositions/Brand",
  component: Brand,
  argTypes: {
    fontWeight: {
      control: "select",
      name: "Font Weight",
      options: [400, 500, 600, 700, 800, 900],
    },
    hideNameOnMobile: {
      name: "Hide Name On Mobile?",
      description: "Hide name on mobile devices",
    },
    classes: {
      name: "Classes",
      control: "text",
    },
    size: {
      control: "select",
      name: "Size",
      // TODO: Add size enum
      options: ["sm", "md", "lg"],
    },
    name: {
      name: "Name",
      description: "Company name",
    },
    svg: {
      name: "SVG",
      description: "Logo",
      // TODO: Add control to select SVG
      // control: "text",
    },
    to: {
      name: "To",
      description: "Link to",
      control: "text",
    },
  },
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontWeight: 700,
  hideNameOnMobile: true,
  svg: "logo",
  name: "Company name",
  to: "main",
  classes: "me-3",
};
