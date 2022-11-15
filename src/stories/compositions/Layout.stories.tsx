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
import { Types as LinkTypes } from "./../components/Link";

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
      to: "main",
    },
    // TODO: fix this
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
