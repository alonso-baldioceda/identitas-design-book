import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Header from "./Header";
import { Types as LinkTypes } from "./../components/Link";

// Stories
import * as BrandStories from "./../components/Brand.stories";
import * as LanguageSelectorStories from "./../components/LanguageSelector.stories";
// import * as LinkIconStories from "./../components/LinkIcon.stories";

// Assets
import PhoneIcon from "./../../images/svg/call.svg";
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";

// console.log(
//   "LanguageSelectorStories.Default.args",
//   LanguageSelectorStories.Default.args,
//   typeof LanguageSelectorStories.Default.args
// );

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
  title: "Compositions/Header",
  component: Header,
  args: {
    // brand: {
    //   duration: 500,
    //   fontWeight: 700,
    //   logoMarginRight: 3,
    //   offset: -70,
    //   smooth: true,
    //   spy: true,
    //   text: "Company name",
    //   to: "main",
    // },
    brand: LanguageSelectorStories.Default.args,
    languages: LanguageSelectorStories.Default.args?.languages,
    navigation: navList,
    phone: "+50683274040",
    phoneIcon: <PhoneIcon />,
    socials: [
      {
        icon: <FacebookIcon />,
        mb: 1,
        size: "extra-small",
        text: "Facebook",
        url: "https://www.facebook.com/vistalagoarenal",
      },
      {
        icon: <InstagramIcon />,
        mb: 1,
        size: "extra-small",
        text: "Instagram",
        url: "https://www.instagram.com/vistalagoarenal/",
      },
    ],
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  brand: {
    duration: 500,
    fontWeight: 700,
    logoMarginRight: 3,
    offset: -70,
    smooth: true,
    spy: true,
    text: "Company name",
    to: "main",
  },
  languages: LanguageSelectorStories.Default.args?.languages,
  navigation: navList,
  phone: "+50683274040",
  phoneIcon: <PhoneIcon />,
  socials: [
    {
      icon: <FacebookIcon />,
      mb: 1,
      size: "extra-small",
      text: "Facebook",
      url: "https://www.facebook.com/vistalagoarenal",
    },
    {
      icon: <InstagramIcon />,
      mb: 1,
      size: "extra-small",
      text: "Instagram",
      url: "https://www.instagram.com/vistalagoarenal/",
    },
  ],
};
