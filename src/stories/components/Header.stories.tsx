import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Header from "./Header";

// Stories
import * as LayoutStories from "./Layout.stories";
import * as BrandStories from "./Brand.stories";
import * as LanguageSelectorStories from "./LanguageSelector.stories";

// Assets
// import LogoIcon from "./../../images/svg/logo-black.svg";
import PhoneIcon from "./../../images/svg/call.svg";
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";

export default {
  title: "Molecules/Header",
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
    to: "/#topPage",
  },
  languagesList: LanguageSelectorStories.Default.args?.languagesList,
  navigation: LayoutStories.Default.args?.header?.navigation,
  phone: "+50683274040",
  phoneIcon: <PhoneIcon />,
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
};
