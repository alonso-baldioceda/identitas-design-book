import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Toast from "./Toast";

export default {
  title: "Compositions/Toast",
  component: Toast,
  argTypes: {
    button: {
      control: "object",
      description: "Button configuration object",
      table: {
        type: {
          summary: "ButtonProps",
          detail: `{
                    classes?: string;
                	}`,
        },
      },
    },
    classes: { control: "text" },
    conf: {
      control: "object",
      description: "Toast configuration object",
      table: {
        type: {
          summary: "ToastConf",
          detail: `{
            heading: string;
            text: string;
            type: string;
            visible: boolean;
          }`,
        },
      },
    },
    handleClose: {
      control: "function",
      description: "Function to handle closing the toast",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    heading: {
      control: "object",
      description: "Heading text configuration object",
      table: {
        type: {
          summary: "TextProps",
          detail: `{
                    classes?: string;
                    text: string;
                    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
                	}`,
        },
      },
    },
    text: {
      control: "object",
      description: "Text configuration object",
      table: {
        type: {
          summary: "TextProps",
          detail: `{
                    classes?: string;
                    text: string;
                    type?: "p" | "span";
                	}`,
        },
      },
    },
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => (
  <div
    className="position-relative bg-primary-pastel"
    style={{ height: "200px", width: "100%" }}
  >
    <Toast {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  classes: "align-items-center text-white position-absolute",
  handleClose: () => {},
  conf: {
    heading: "Success",
    text: "This is a success toast component.",
    type: "success",
    visible: true,
  },
  heading: {
    classes: "text-white",
    text: "Success",
    variant: "h3",
  },
  text: {
    classes: "text-white mb-0",
    text: "This is a success toast component.",
    variant: "p",
  },
  button: {
    classes: "btn-close me-2 m-auto",
  },
};
