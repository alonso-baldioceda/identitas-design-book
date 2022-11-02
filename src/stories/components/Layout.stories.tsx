import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Assets
import HomeIcon from "./../../images/svg/home.svg";
import EnvelopeIcon from "./../../images/svg/envelope.svg";
import PhoneIcon from "./../../images/svg/phone.svg";

// Components
import Layout from "./Layout";

export default {
  title: "Molecules/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <div className="container">
      <div className="row">
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aspernatur optio dignissimos quam atque cum non assumenda vitae
            explicabo molestiae iste quasi exercitationem esse, repellat quidem
            consectetur qui similique quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aspernatur optio dignissimos quam atque cum non assumenda vitae
            explicabo molestiae iste quasi exercitationem esse, repellat quidem
            consectetur qui similique quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aspernatur optio dignissimos quam atque cum non assumenda vitae
            explicabo molestiae iste quasi exercitationem esse, repellat quidem
            consectetur qui similique quaerat.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {
  footer: {
    bgcolor: "dark",
    contact: {
      header: "Contáctenos",
      list: [
        {
          icon: <HomeIcon />,
          text: "Costa Rica, Guanacaste, Río Piedras, Tilarán.",
        },
        {
          icon: <EnvelopeIcon />,
          text: "vistalagoarenal@gmail.com",
        },
        {
          icon: <PhoneIcon />,
          text: "+(506) 8327 4040",
        },
      ],
    },
    navigation: {
      header: "Enlaces",
      list: [
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
          text: "Contáctenos",
        },
      ],
    },
  },
};
