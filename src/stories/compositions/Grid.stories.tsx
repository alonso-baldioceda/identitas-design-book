import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Grid from "./Grid";

export default {
  title: "Compositions/Grid",
  component: Grid,
  args: {
    gap: 30,
    xs: 1,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  },
  argTypes: {
    xs: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
    sm: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
    md: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
    lg: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
    xl: {
      control: "select",
      options: [1, 2, 3, 4, 5],
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <div className="bg-info text-white text-center">a</div>
    <div className="bg-success text-white text-center">b</div>
    <div className="bg-danger text-white text-center">c</div>
  </Grid>
);

export const Default = Template.bind({
  gap: 30,
  xs: 1,
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
});
