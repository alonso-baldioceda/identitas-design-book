import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import PanelComponent from "./Panel";

// Constants
import { POSITIONS_OPTIONS } from "../../shared/constants";

export default {
  title: "Compositions/Panel",
  component: PanelComponent,
  argTypes: {
    text: { name: "Text", description: "Text of the panel", control: "text" },
    position: {
      name: "Position",
      description: "Position of the panel",
      control: { type: "select", options: POSITIONS_OPTIONS },
    },
    classes: {
      name: "Classes",
      description: "Classes of the panel",
      control: "text",
    },
  },
} as ComponentMeta<typeof PanelComponent>;

const Template: ComponentStory<typeof PanelComponent> = (args) => (
  <div
    className="position-relative"
    style={{
      height: "400px",
    }}
  >
    <PanelComponent {...args}>
      <h2 className="mb-0">hi!</h2>
      <p>Some other text here to test!</p>
    </PanelComponent>
  </div>
);

export const Panel = Template.bind({});
Panel.args = {
  classes: "p-2 p-lg-3 m-0 col-4 position-absolute",
  position: "middle-center",
};

// export const BackgroundImage = Template.bind({});
// BackgroundImage.args = {
//   src: OceanImage,
// };
