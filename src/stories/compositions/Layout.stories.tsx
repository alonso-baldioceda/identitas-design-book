import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Assets
import LogoIcon from "./../../images/svg/logo-black.svg";
import HomeIcon from "./../../images/svg/home.svg";
import EnvelopeIcon from "./../../images/svg/envelope.svg";
import PhoneIcon from "./../../images/svg/phone.svg";

// Components
import Layout from "./Layout";

// Stories
import * as Header from "./header/Header.stories";

// Constants
import NAV from "./../../shared/constants/nav";

export default {
  title: "Compositions/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <div className="position-relative">
    <Layout {...args}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  header: {
    ...Header.Default.args,
    brand: {
      fontWeight: 700,
      hideNameOnMobile: true,
      svg: <LogoIcon />,
      name: "Company name",
      to: "main",
    },
    languages: ["es", "en"],
    navigation: NAV,
  },
  footer: {
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
      list: NAV,
    },
  },
};
