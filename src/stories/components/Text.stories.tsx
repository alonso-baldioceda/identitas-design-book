import React from "react";
// import styled from "styled-components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import TextComponent from "./Mask";

// Constants
// import { COLOR_CONTROL } from "./../../shared/constants";

// // Styles
// const StyledStory = styled.div`
//   height: 400px;
// `;

export default {
  title: "Components/Typography",
  component: TextComponent,
  argTypes: {
    align: {
      name: "Align",
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
    },
    text: {
      name: "Text",
      control: {
        type: "text",
      },
    },
    variant: {
      name: "Variant",
      control: {
        type: "select",
        options: [
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "p",
          "span",
          "small",
          "label",
        ],
      },
    },
    className: {
      name: "ClassName",
      control: {
        type: "text",
      },
    },
    noWrap: {
      name: "No Wrap",
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof TextComponent>;

const Template: ComponentStory<typeof TextComponent> = (args) => (
  <TextComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {};
