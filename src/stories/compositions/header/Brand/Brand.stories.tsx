import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Brand from "./Brand";

export default {
  title: "Compositions/Brand",
  component: Brand,
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
      control: "object",
      table: {
        type: {
          summary: "Location",
          detail: `{
            pathname: string;
          }`,
        },
      },
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
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = (args) => <Brand {...args} />;

export const Default = Template.bind({});
Default.args = {
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
    text: "My Company",
    variant: "span",
  },
  to: "main",
};
