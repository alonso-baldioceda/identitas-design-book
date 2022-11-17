import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import MenuVertical, { Types } from "./MenuVertical";

// Stories
import * as LanguageSelectorStories from "./../components/LanguageSelector.stories";

const navList = [
  {
    type: Types.Anchor,
    anchor: "main",
    text: "Inicio",
  },
  {
    type: Types.Anchor,
    anchor: "units",
    text: "Cabinas",
  },
  {
    type: Types.Anchor,
    anchor: "common-spaces",
    text: "Espacios comúnes",
  },
  {
    type: Types.Anchor,
    anchor: "services",
    text: "Servicios",
  },
  {
    type: Types.Anchor,
    anchor: "drive",
    text: "Cómo llegar?",
  },
  {
    type: Types.Anchor,
    anchor: "contact",
    text: "Contáctenos",
  },
  {
    type: Types.Link,
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
