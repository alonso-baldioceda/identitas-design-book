import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import LanguageSelector from "./LanguageSelector";

export default {
  title: "Components/LanguageSelector",
  component: LanguageSelector,
  args: {
    languagesList: ["es", "en"],
  },
} as ComponentMeta<typeof LanguageSelector>;

const Template: ComponentStory<typeof LanguageSelector> = (args) => (
  <LanguageSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  languagesList: ["es", "en"],
};
