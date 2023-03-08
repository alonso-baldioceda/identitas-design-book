import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SpacerComponent from "./Spacer";

export default {
  title: "Components/Spacer",
  component: SpacerComponent,
  argTypes: {
    bottomOnly: {
      control: "boolean",
      name: "Bottom Only",
    },
  },
} as ComponentMeta<typeof SpacerComponent>;

const Template: ComponentStory<typeof SpacerComponent> = (args) => (
  <div className="bg-primary px-4">
    <SpacerComponent {...args}>some text here</SpacerComponent>
  </div>
);

export const Spacer = Template.bind({});
Spacer.args = {
  bottomOnly: false,
};
