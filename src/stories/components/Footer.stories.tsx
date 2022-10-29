import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Footer from "./Footer";

export default {
  title: "Molecules/Footer",
  component: Footer,
  args: {
    menuLinks: [
      {
        name: "main",
        anchor: "#main",
        text: "Inicio",
      },
      {
        name: "units",
        anchor: "#units",
        text: "Cabinas",
      },
      {
        name: "common",
        anchor: "#common-spaces",
        text: "Espacios comúnes",
      },
      {
        name: "services",
        anchor: "#services",
        text: "Servicios",
      },
      {
        name: "drive",
        anchor: "#drive",
        text: "Cómo llegar?",
      },
      {
        name: "contact",
        anchor: "#contact",
        translate: "Contáctenos",
      },
    ],
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({
  menuLinks: [
    {
      name: "main",
      anchor: "#main",
      text: "Inicio",
    },
    {
      name: "units",
      anchor: "#units",
      text: "Cabinas",
    },
    {
      name: "common",
      anchor: "#common-spaces",
      text: "Espacios comúnes",
    },
    {
      name: "services",
      anchor: "#services",
      text: "Servicios",
    },
    {
      name: "drive",
      anchor: "#drive",
      text: "Cómo llegar?",
    },
    {
      name: "contact",
      anchor: "#contact",
      translate: "Contáctenos",
    },
  ],
});
