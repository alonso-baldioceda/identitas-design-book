import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import MenuVertical from "./MenuVertical";
import { Types as LinkTypes } from "./../components/Link";

// Stories
import * as LanguageSelectorStories from "./../components/LanguageSelector.stories";

const navList = [
  {
    type: LinkTypes.Anchor,
    anchor: "main",
    text: "Inicio",
  },
  {
    type: LinkTypes.Anchor,
    anchor: "units",
    text: "Cabinas",
  },
  {
    type: LinkTypes.Anchor,
    anchor: "common-spaces",
    text: "Espacios comúnes",
  },
  {
    type: LinkTypes.Anchor,
    anchor: "services",
    text: "Servicios",
  },
  {
    type: LinkTypes.Anchor,
    anchor: "drive",
    text: "Cómo llegar?",
  },
  {
    type: LinkTypes.Anchor,
    anchor: "contact",
    text: "Contáctenos",
  },
  {
    type: LinkTypes.Link,
    anchor: "info",
    text: "Info",
  },
];

export default {
  title: "Compositions/MenuVertical",
  component: MenuVertical,
  args: {
    backgroundColor: "dark",
    hideFrom: "xl",
    languages: LanguageSelectorStories.Default.args?.languages,
    linkMb: 2,
    navigation: navList,
    isOpen: false,
    translate: "",
    translateMb: 2,
  },
  argTypes: {
    backgroundColor: {
      control: "select",
      options: ["primary", "secondary", "ternary", "dark", "light"],
    },
    hideFrom: {
      control: "select",
      options: ["md", "lg", "xl"],
    },
  },
} as ComponentMeta<typeof MenuVertical>;

const Template: ComponentStory<typeof MenuVertical> = (args) => (
  <MenuVertical {...args} />
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "dark",
  hideFrom: "xl",
  languages: LanguageSelectorStories.Default.args?.languages,
  linkMb: 2,
  navigation: navList,
  isOpen: true,
  translate: "Idiomas",
  translateMb: 2,
};
