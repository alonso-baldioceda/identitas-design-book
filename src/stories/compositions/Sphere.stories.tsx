import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SphereComponent from "./Sphere";

// Assets
import SphereImage1 from "./../../images/tour/room1.jpg";
import SpherePreviewImage1 from "./../../images/tour/room1-preview.jpg";

export default {
  title: "Compositions/Sphere",
  component: SphereComponent,
  argTypes: {
    height: {
      name: "Height",
      control: "text",
      description: "Height of the sphere",
    },
    id: {
      name: "ID",
      control: "text",
      description: "ID of the sphere",
    },
    image: {
      name: "Image",
      control: "text",
      description: "Image of the sphere",
    },
    pitch: {
      name: "Pitch",
      control: "number",
      description: "Pitch of the sphere",
    },
    preview: {
      name: "Preview",
      control: "text",
      description: "Preview of the sphere",
    },
    sceneId: {
      name: "Scene ID",
      control: "text",
      description: "Scene ID of the sphere",
    },
    width: {
      name: "Width",
      control: "text",
      description: "Width of the sphere",
    },
    yaw: {
      name: "Yaw",
      control: "number",
      description: "Yaw of the sphere",
    },
  },
} as ComponentMeta<typeof SphereComponent>;

const Template: ComponentStory<typeof SphereComponent> = (args) => (
  <SphereComponent {...args} />
);

export const Default = Template.bind({});

Default.args = {
  height: "400px",
  id: "sphereSample1",
  image: SphereImage1,
  pitch: 6,
  preview: SpherePreviewImage1,
  sceneId: "sphereSample1",
  width: "100%",
  yaw: 40,
};
