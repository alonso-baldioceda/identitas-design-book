import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Grid from "./Grid";

// Constants
import { SPACING_OPTION } from "./../../shared/constants/";

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
      options: SPACING_OPTION,
    },
    sm: {
      control: "select",
      options: SPACING_OPTION,
    },
    md: {
      control: "select",
      options: SPACING_OPTION,
    },
    lg: {
      control: "select",
      options: SPACING_OPTION,
    },
    xl: {
      control: "select",
      options: SPACING_OPTION,
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
