import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import useState from "storybook-addon-state";

// Components
import FooterNavMainAnchor from "./FooterNavMainAnchor";

export default {
  title: "Components/FooterNavMainAnchor",
  component: FooterNavMainAnchor,
  argTypes: {
    appearance: {
      control: "select",
      options: ["white", "dark"],
    },
  },
} as ComponentMeta<typeof FooterNavMainAnchor>;

const Template: ComponentStory<typeof FooterNavMainAnchor> = (args) => {
  const [active, setActive] = useState<number>("clicks", -1);

  const onAnchorLinkClick = (index: number) => {
    // console.log("hola");
    setActive(index);
  };

  return (
    <FooterNavMainAnchor {...args} onAnchorLinkClick={onAnchorLinkClick} />
  );
};

export const Default = Template.bind({});

Default.args = {
  appearance: "primary",
  index: 1,
  to: "#main",
  text: "Inicio",
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
