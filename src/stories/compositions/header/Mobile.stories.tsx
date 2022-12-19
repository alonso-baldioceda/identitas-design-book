import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import LinkType from "./../../../shared/enums/linkType";

// Components
import Mobile from "./Mobile";

// Constants
import {
  NAV,
  SPACING_OPTIONS,
  COLOR_CONTROL,
} from "./../../../shared/constants/";

// Styles
const MobileWrapper = styled.div`
  position: relative;

  > div {
    position: relative;
  }
`;

export default {
  title: "Compositions/Mobile",
  component: Mobile,
  argTypes: {
    bgColor: {
      name: "Background Color",
      control: COLOR_CONTROL,
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
    navigation: {
      description: "Navigation links",
      name: "Navigation",
    },
    px: {
      control: "select",
      description: "'Left' / 'Right' menu wrapper spacing",
      name: "Padding X",
      options: SPACING_OPTIONS,
    },
    py: {
      control: "select",
      description: "'Top' / 'Bottom' menu wrapper spacing",
      name: "Padding Y",
      options: SPACING_OPTIONS,
    },
    separator: {
      control: "select",
      description: "'Left' / 'Roght' separator spacing",
      name: "Separator spacing",

      options: SPACING_OPTIONS,
    },
    startingAt: {
      description: "Distance from top page",
      name: "Starting at",
    },
    translate: {
      description: "Label used for languages header",
      name: "Translate",
    },
  },
} as ComponentMeta<typeof Mobile>;

const Template: ComponentStory<typeof Mobile> = (args) => (
  <MobileWrapper>
    <Mobile {...args} />
  </MobileWrapper>
);

export const Default = Template.bind({});
Default.args = {
  bgColor: "dark",
  hideFrom: "xl",
  isOpen: true,
  languages: ["es", "en"],
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
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Anchor,
      anchor: "common-spaces",
      text: "Espacios comúnes",
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Anchor,
      anchor: "services",
      text: "Servicios",
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Anchor,
      anchor: "drive",
      text: "Cómo llegar?",
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Anchor,
      anchor: "contact",
      text: "Contáctenos",
      classes: "mb-2 mb-sm-2",
    },
    {
      type: LinkType.Link,
      anchor: "info",
      text: "Info",
      classes: "mb-2 mb-sm-2",
    },
  ],
  px: 4,
  py: 4,
  separator: 4,
  startingAt: 0,
  translate: "Idiomas",
};
