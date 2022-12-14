import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SphereComponent from "./Sphere";

// Constants
import { SPACING_OPTIONS, COLOR_CONTROL } from "./../../shared/constants/";

// Assets
import SphereImage1 from "./../../images/tour/room1.jpg";
import SpherePreviewImage1 from "./../../images/tour/room1-preview.jpg";

export default {
  title: "Compositions/Sphere",
  component: SphereComponent,
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
      name: "Border",
      control: "select",
      options: SPACING_OPTIONS,
    },
    borderColor: {
      name: "Border Color",
      control: COLOR_CONTROL,
    },
  },
} as ComponentMeta<typeof SphereComponent>;

const Template: ComponentStory<typeof SphereComponent> = (args) => (
  <SphereComponent {...args} />
);

export const Sphere = Template.bind({
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
