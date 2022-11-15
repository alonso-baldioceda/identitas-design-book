import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Assets
import HomeIcon from "./../../images/svg/home.svg";
import EnvelopeIcon from "./../../images/svg/envelope.svg";
import PhoneIcon from "./../../images/svg/phone.svg";
import CallIcon from "./../../images/svg/call.svg";
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";

// Components
import Layout from "./Layout";

// Stories
import * as LanguageSelectorStories from "./../components/LanguageSelector.stories";

export default {
  title: "Compositions/Layout",
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

const navList = [
  {
    type: "anchor",
    anchor: "#main",
    text: "Inicio",
  },
  {
    type: "anchor",
    anchor: "#units",
    text: "Cabinas",
  },
  {
    type: "anchor",
    anchor: "#common-spaces",
    text: "Espacios comúnes",
  },
  {
    type: "anchor",
    anchor: "#services",
    text: "Servicios",
  },
  {
    type: "anchor",
    anchor: "#drive",
    text: "Cómo llegar?",
  },
  {
    type: "anchor",
    anchor: "#contact",
    text: "Contáctenos",
  },
  {
    type: "link",
    anchor: "info",
    text: "Info",
  },
];

export const Default = Template.bind({});
Default.args = {
  header: {
    brand: {
      duration: 500,
      fontWeight: 700,
      // logoIcon: <LogoIcon />,
      logoMarginRight: 3,
      // logoSize: 60,
      offset: -70,
      smooth: true,
      spy: true,
      text: "Company name",
      to: "/#topPage",
    },
    languagesList: LanguageSelectorStories.Default.args?.languagesList
      ? LanguageSelectorStories.Default.args.languagesList
      : ["es"],
    navigation: navList,
    phone: "+50683274040",
    phoneIcon: <CallIcon />,
    socials: [
      {
        text: "Instagram",
        url: "https://www.instagram.com/vistalagoarenal/",
        icon: <InstagramIcon />,
      },
      {
        text: "Facebook",
        url: "https://www.facebook.com/vistalagoarenal/",
        icon: <FacebookIcon />,
      },
    ],
  },
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
      list: navList,
    },
  },
};
