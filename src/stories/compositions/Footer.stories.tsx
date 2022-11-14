import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Footer from "./Footer";

// Stories
import * as Layout from "./../compositions/Layout.stories";

export default {
  title: "Compositions/Footer",
  component: Footer,
  argTypes: {
    bgColor: {
      control: "select",
      options: ["dark", "light"],
    },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...Layout.Default.args?.footer,
};
