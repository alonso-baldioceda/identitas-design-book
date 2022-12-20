import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import DesktopNavComponent from "./DesktopNav";

// Types
import LinkType from "./../../../shared/enums/linkType";

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
      type: LinkType.Anchor,
      anchor: "top",
      text: "Inicio",
      offset: -104,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "units",
      text: "Cabinas",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "common-spaces",
      text: "Espacios comúnes",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "services",
      text: "Servicios",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "drive",
      text: "Cómo llegar?",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "contact",
      text: "Contáctenos",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Link,
      anchor: "info",
      text: "Info",
      classes: "me-3 text-capitalize",
    },
  ],
};
