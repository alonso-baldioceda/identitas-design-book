import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import DesktopNavComponent from "./DesktopNav";

// Types

export default {
  title: "Compositions",
  component: DesktopNavComponent,
  argTypes: {
    navigation: {
      name: "Navigation",
      description: "Navigation",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "Link[]",
          detail: `{
                    anchor: string;
                    classes: string;
                    duration: number;
                    offset: number;
                    smooth: boolean;
                    spy: true;
                    text: string;
                    to: string;
                    type: string;
                  }`,
        },
      },
    },
  },
} as ComponentMeta<typeof DesktopNavComponent>;

const Template: ComponentStory<typeof DesktopNavComponent> = (args) => (
  <DesktopNavComponent {...args} />
);

export const DesktopNav = Template.bind({});
DesktopNav.args = {
  navigation: [
    {
      type: "anchor",
      anchor: "top",
      text: "Inicio",
      offset: -104,
      classes: "me-3 text-capitalize",
    },
    {
      type: "anchor",
      anchor: "units",
      text: "Cabinas",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: "anchor",
      anchor: "common-spaces",
      text: "Espacios comúnes",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: "anchor",
      anchor: "services",
      text: "Servicios",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: "anchor",
      anchor: "drive",
      text: "Cómo llegar?",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: "anchor",
      anchor: "contact",
      text: "Contáctenos",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: "link",
      anchor: "info",
      text: "Info",
      classes: "me-3 text-capitalize",
    },
  ],
};
