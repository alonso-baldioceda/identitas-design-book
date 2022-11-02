import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Sphere from "./Sphere";

// Assets
import SphereImage1 from "./../../images/tour/room1.jpg";
import SpherePreviewImage1 from "./../../images/tour/room1-preview.jpg";

export default {
  title: "Components/Sphere",
  component: Sphere,
  args: {
    border: 5,
    height: "400px",
    id: "sphereSample1",
    image: SphereImage1,
    pitch: 6,
    preview: SpherePreviewImage1,
    sceneId: "sphereSample1",
    width: "400px",
    yaw: 40,
  },
  argTypes: {
    border: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5],
    },
    borderColor: {
      control: "select",
      options: ["primary", "secondary", "white", "dark"],
    },
  },
} as ComponentMeta<typeof Sphere>;

const Template: ComponentStory<typeof Sphere> = (args) => <Sphere {...args} />;

export const Default = Template.bind({
  border: 5,
  borderColor: "primary",
  height: "400px",
  id: "sphereSample1",
  image: SphereImage1,
  pitch: 6,
  preview: SpherePreviewImage1,
  sceneId: "sphereSample1",
  width: "100%",
  yaw: 40,
});

export const Secondary = Template.bind({});
Secondary.args = { borderColor: "secondary" };

export const Ternary = Template.bind({});
Ternary.args = { borderColor: "ternary" };

export const White = Template.bind({});
White.args = { borderColor: "white" };
