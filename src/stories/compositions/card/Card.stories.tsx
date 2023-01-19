import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Card from "./Card";

// Types
import Size from "./../../../shared/enums/size";

// Assets
import BedQueen from "./../../../images/svg/bed-queen.svg";

export default {
  title: "Compositions/Card/Default",
  component: Card,
  argTypes: {
    border: {
      name: "Border",
      control: "number",
      description: "Border of the component",
    },
    header: {
      name: "Header",
      control: "object",
      description: "Header of the component",
      table: {
        type: {
          summary: "object",
          detail: `{
            text: {
              classes: string;
              text: string;
              variant: string;
            };
            backgroundColor: string;
          }`,
        },
      },
    },
    body: {
      name: "Body",
      control: "object",
      description: "Body of the component",
      table: {
        type: {
          summary: "object",
          detail: `{
            backgroundColor: string;
            list: {
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
            }[];
            preCta: {
              classes: string;
              text: string;
            };
            airbnb: {
              appearance: string;
              bold: boolean;
              disabled: boolean;
              rounded: boolean;
              targetBlank: boolean;
              text: string;
              url: string;
            };
          }`,
        },
      },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  border: 4,
  header: {
    text: {
      classes: "mb-0 py-4 text-capitalize",
      text: "title here!!",
      variant: "h3",
    },
    backgroundColor: "#81B29A",
  },
  body: {
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
      rounded: true,
      targetBlank: false,
      text: "Airbnb",
      url: "https://www.google.com/",
    },
  },
};
