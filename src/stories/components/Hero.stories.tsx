import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Hero from "./Hero";

// Assets
import imageFile from "./../../images/ocean.jpg";

const image = {
  src: imageFile,
};

export default {
  title: "Components/Hero",
  component: Hero,
  args: {
    title: "title here!!",
    src: image.src,
    mask: true,
    bgColor: "default",
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => {
  return (
    <Hero {...args}>
      <div className="position-absolute start-0 bottom-0 p-4 w-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-lg-8 col-xl-6">
              <h1 className="mb-0 text-white">some text here!!</h1>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export const Default = Template.bind({});

export const MaskDisabled = Template.bind({});
MaskDisabled.args = { ...Default.args, mask: false };
