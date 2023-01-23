import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Hero from "./Hero";

// Assets
import imageFile from "./../../../images/ocean.jpg";

export default {
  title: "Compositions/Hero",
  component: Hero,
  argTypes: {
    height: {
      name: "Height",
      description: "Height of the image",
      control: "text",
    },
    src: {
      name: "Image",
      description: "Image to be used as background",
      control: "text",
    },
    mask: {
      name: "Mask",
      description: "Whether to apply a mask to the image",
      control: "boolean",
    },
    maskColor: {
      name: "Mask Color",
      description: "Color of the mask",
      control: "color",
    },
    maxWidth: {
      name: "Max Width",
      description: "Max width of the image",
      control: "text",
    },
    panel: {
      name: "Panel",
      description: "Panel to be displayed on top of the image",
      control: "object",
      table: {
        type: {
          summary: "object",
          detail: `{
                    bgColor: string;
                    classes: string;
                    borderColor: string;
                    text: {
                        text: string;
                        classes: string;
                        variant: string;
                    };
                  }`,
        },
      },
    },
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => {
  return <Hero {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  src: imageFile,
  mask: true,
  panel: {
    bgColor: "red",
    classes: "p-2 p-lg-3 m-0 col-4 m-2 border border-4",
    borderColor: "blue",
    text: {
      text: "some text here!!",
      classes: "mb-0",
      variant: "h1",
    },
  },
};
