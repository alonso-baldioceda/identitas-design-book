import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Text from "./../../../components/Text";
import ContentComponent from "./Content";

export default {
  title: "Compositions/Header/Brand/Content",
  component: ContentComponent,
  argTypes: {
    showNameOnMobile: {
      name: "Hide Name On Mobile?",
      description: "Hide name on mobile devices",
    },
  },
} as ComponentMeta<typeof ContentComponent>;

const Template: ComponentStory<typeof ContentComponent> = (args) => (
  <ContentComponent {...args} />
);

export const Content = Template.bind({});
Content.args = {
  showNameOnMobile: false,
  text: {
    classes: "text-capitalize text-dark fw-bold mb-0",
    text: "Company Name",
    variant: "span",
  },
};
