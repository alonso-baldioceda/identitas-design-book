import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Body from "./Body";

// Constants
import { COLOR_CONTROL } from "./../../../shared/constants/";

// Types
import Size from "./../../../shared/enums/size";

// Assets
import BedQueen from "./../../../images/svg/bed-queen.svg";

export default {
  title: "Compositions/Card/Body",
  component: Body,
  argTypes: {
    backgroundColor: {
      name: "Background Color",
      control: COLOR_CONTROL,
      description: "Background color of the component",
    },
    list: {
      name: "List",
      control: "object",
      description: "List of items to be displayed",
      table: {
        type: {
          summary: "Array of objects",
          detail: `{
                    svg: React.ReactNode;
                    svgSize: Size;
                    text: {
                        heading: {
                            classes: string;
                            text: string;
                        };
                        body: {
                            classes: string;
                            text: string;
                        };
                    };
                }[]`,
        },
      },
    },
    preCta: {
      name: "Pre CTA",
      control: "object",
      description: "Pre CTA",
      table: {
        type: {
          summary: "object",
          detail: `{
                    classes: string;
                    text: string;
                }`,
        },
      },
    },
    airbnb: {
      name: "Airbnb",
      control: "object",
      description: "Airbnb CTA",
      table: {
        type: {
          summary: "object",
          detail: `{
                    appearance: "airbnb";
                    bold: boolean;
                    classes: string;
                    disabled: boolean;
                    rounded: boolean;
                    targetBlank: boolean;
                    text: string;
                    url: string;
                }`,
        },
      },
    },
  },
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "transparent",
  list: [
    {
      svg: <BedQueen />,
      svgSize: Size.sm,
      text: {
        heading: {
          classes: "mb-0",
          text: "some text here!!",
        },
      },
    },
  ],
  preCta: {
    classes: "text-center small mb-2",
    text: "Reservar por",
  },
  airbnb: {
    appearance: "airbnb",
    bold: true,
    disabled: false,
    classes: "mb-0 px-4 py-2",
    targetBlank: false,
    text: "Airbnb",
    url: "https://www.google.com/",
  },
};