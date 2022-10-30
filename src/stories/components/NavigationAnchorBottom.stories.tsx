import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import useState from "storybook-addon-state";

// Components
import NavigationAnchorBottom from "./NavigationAnchorBottom";

export default {
  title: "Components/NavigationAnchorBottom",
  component: NavigationAnchorBottom,
  argTypes: {
    appearance: {
      control: "select",
      options: ["white", "dark"],
    },
  },
} as ComponentMeta<typeof NavigationAnchorBottom>;

const Template: ComponentStory<typeof NavigationAnchorBottom> = (args) => {
  const [active, setActive] = useState<number>("clicks", -1);

  const onAnchorLinkClick = (index: number) => {
    // console.log("hola");
    setActive(index);
  };

  return (
    <NavigationAnchorBottom {...args} onAnchorLinkClick={onAnchorLinkClick} />
  );
};

export const Default = Template.bind({});

Default.args = {
  appearance: "primary",
  index: 1,
  to: "#main",
  text: "Inicio",
  // item: {
  //   name: "main",
  //   anchor: "#main",
  //   text: "Inicio",
  // },
  // TODO: pass the function with content
  // onAnchorLinkClick: onAnchorLinkClick,
  stripHash: true,
};

Default.decorators = [
  (Story) => (
    <div className="p-3 bg-dark">
      <Story />
    </div>
  ),
];

export const TextDark = Template.bind({});
TextDark.args = { ...Default.args, appearance: "dark" };
