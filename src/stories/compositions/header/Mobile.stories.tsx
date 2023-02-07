import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import LinkType from "./../../../shared/enums/linkType";

// Components
import MobileComponent from "./Mobile";

// Styles
const MobileWrapper = styled.div`
  position: relative;

  > div {
    position: relative;
  }
`;

export default {
  title: "Compositions/Mobile",
  component: MobileComponent,
  argTypes: {
    classes: {
      description: "Classes",
      name: "Classes",
    },
    hideFrom: {
      control: "select",
      defaultValue: "xl",
      description: "Hide mobile from",
      name: "Hide From",
      options: ["md", "lg", "xl"],
    },
    isOpen: {
      defaultValue: false,
      description: "Is the menu open?",
      name: "Is Open?",
    },
    languages: {
      description: "List of languages",
      name: "Languages",
    },
    mobileLanguagesLabel: {
      description: "Label for languages",
      name: "Mobile Languages Label",
    },
    navigation: {
      description: "Navigation links",
      name: "Navigation",
    },
    separator: {
      description: "Separator between links",
      name: "Separator",
    },
    startingAt: {
      description: "Distance from top page",
      name: "Starting at",
    },
  },
} as ComponentMeta<typeof MobileComponent>;

const Template: ComponentStory<typeof MobileComponent> = (args) => (
  <MobileWrapper>
    <MobileComponent {...args} />
  </MobileWrapper>
);

export const Mobile = Template.bind({});
Mobile.args = {
  classes: "p-4",
  hideFrom: "xl",
  isOpen: true,
  languages: [
    {
      name: "es",
      classes: "text-capitalize mb-3",
    },
    {
      name: "en",
      classes: "text-capitalize mb-3",
    },
  ],
  mobileLanguagesLabel: {
    classes: "mb-3",
    text: "Idiomas:",
    variant: "label",
  },
  navigation: [
    {
      type: LinkType.Anchor,
      anchor: "top",
      text: "Inicio",
      offset: -104,
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Anchor,
      anchor: "units",
      text: "Cabinas",
      offset: -80,
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Anchor,
      anchor: "common-spaces",
      text: "Espacios comúnes",
      offset: -80,
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Anchor,
      anchor: "services",
      text: "Servicios",
      offset: -80,
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Anchor,
      anchor: "drive",
      text: "Cómo llegar?",
      offset: -80,
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Anchor,
      anchor: "contact",
      text: "Contáctenos",
      offset: -80,
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Link,
      anchor: "info",
      text: "Info",
      classes: "mb-2 mb-sm-2",
    },
  ],
  separator: {
    classes: "my-4",
    height: 1,
    opacity: 0,
  },
  startingAt: 0,
};
