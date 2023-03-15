import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import SliderComponet from "./Slider";

// Assets
import OceanImage from "./../../images/ocean.jpg";
import WalkImage from "./../../images/walk.jpg";
import BuildingImage from "./../../images/building.jpg";
import GraphsImage from "./../../images/graphs.jpg";

export default {
  title: "Compositions/Slider",
  component: SliderComponet,
  argTypes: {
    data: {
      control: {
        type: "object",
        describe: "Data for the slider",
      },
    },
  },
} as ComponentMeta<typeof SliderComponet>;

const Template: ComponentStory<typeof SliderComponet> = (args) => (
  <SliderComponet {...args} />
);

export const Slider = Template.bind({});
Slider.args = {
  controlsColor: "black",
  settings: {
    arrows: true,
    autoplay: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    dots: true,
    fade: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 1000,
  },
  nodes: [
    {
      image: OceanImage,
      panel: {
        bgColor: "rgba(0, 0, 0, 0.25)",
        classes: "p-3 p-lg-4 m-0 col-6 position-absolute",
        position: "middle-center",
        heading: {
          text: "Do you want to improve your business processes?",
          classes: "mb-4",
          variant: "h2",
        },
        cta: {
          classes: "btn btn-primary px-4 py-2 rounded-pill fw-bold",
          text: "CTA 1",
          to: "#",
        },
      },
    },
    {
      cta: "",
      image: BuildingImage,
      panel: {
        bgColor: "rgba(0, 0, 0, 0.25)",
        classes: "p-3 p-lg-4 m-0 col-6 position-absolute",
        position: "middle-center",
        heading: {
          text: "Problems with the industry and government?",
          classes: "mb-4",
          variant: "h2",
        },
        cta: {
          classes: "btn btn-primary px-4 py-2 rounded-pill fw-bold",
          text: "CTA 2",
          to: "#",
        },
      },
    },
    {
      image: WalkImage,
      panel: {
        bgColor: "rgba(0, 0, 0, 0.25)",
        classes: "p-3 p-lg-4 m-0 col-6 position-absolute",
        position: "middle-center",
        heading: {
          text: "Recruiting for skilled positions is becoming increasingly competitive...",
          classes: "mb-4",
          variant: "h2",
        },
        cta: {
          classes: "btn btn-primary px-4 py-2 rounded-pill fw-bold",
          text: "CTA 3",
          to: "#",
        },
      },
    },
    {
      image: GraphsImage,
      panel: {
        bgColor: "rgba(0, 0, 0, 0.25)",
        classes: "p-3 p-lg-4 m-0 col-6 position-absolute",
        position: "middle-center",
        heading: {
          text: "Do you want to know where our symbol comes from?",
          classes: "mb-4",
          variant: "h2",
        },
        cta: {
          classes: "btn btn-primary px-4 py-2 rounded-pill fw-bold",
          text: "CTA 4",
          to: "#",
        },
      },
    },
  ],
};
