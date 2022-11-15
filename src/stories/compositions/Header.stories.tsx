import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Header from "./Header";

// Stories
import * as LayoutStories from "./Layout.stories";
import * as BrandStories from "./../components/Brand.stories";
import * as LanguageSelectorStories from "./../components/LanguageSelector.stories";
// import * as LinkIconStories from "./../components/LinkIcon.stories";

// Assets
import PhoneIcon from "./../../images/svg/call.svg";
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";

export default {
  title: "Compositions/Header",
  component: Header,
  args: {
    brand: {
      ...BrandStories.Default.args,
    },
    languagesList: LanguageSelectorStories.Default.args?.languagesList,
    navigation: LayoutStories.Default.args?.header?.navigation,
    phone: "+50683274040",
    phoneIcon: <PhoneIcon />,
    socials: [
      {
        appearance: "primary",
        icon: <InstagramIcon />,
        size: "extra-small",
        text: "Instagram",
        url: "https://www.instagram.com/vistalagoarenal/",
      },
      {
        appearance: "primary",
        icon: <FacebookIcon />,
        size: "extra-small",
        text: "Facebook",
        url: "https://www.facebook.com/vistalagoarenal/",
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
    // logoIcon: <LogoIcon />,
    logoMarginRight: 3,
    // logoSize: 60,
    offset: -70,
    smooth: true,
    spy: true,
    text: "Company name",
    to: "main",
  },
  languagesList: LanguageSelectorStories.Default.args?.languagesList,
  navigation: LayoutStories.Default.args?.header?.navigation,
  phone: "+50683274040",
  phoneIcon: <PhoneIcon />,
  socials: [
    {
      appearance: "primary",
      icon: <InstagramIcon />,
      size: "extra-small",
      text: "Instagram",
      url: "https://www.instagram.com/vistalagoarenal/",
    },
    {
      appearance: "primary",
      icon: <InstagramIcon />,
      size: "extra-small",
      text: "Instagram",
      url: "https://www.instagram.com/vistalagoarenal/",
    },
  ],
};
