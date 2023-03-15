import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

// Components
import Header from "./HeaderV2";

// Styles
const HeaderWrapper = styled.div`
  > div {
    position: relative;
  }
`;

export default {
  title: "Compositions/Header/HeaderVersion2",
  component: Header,
  argTypes: {
    brand: {
      name: "Brand",
      description: "Logo and company name as a single piece",
    },
    call: {
      description: "Call feature",
      name: "Call",
    },
    fixed: {
      description: "Is the header fixed?",
      name: "Fixed?",
    },
    hideLanguagesFrom: {
      name: "Hide Languages From",
      control: "select",
      options: ["md", "lg", "xl"],
    },
    languages: {
      description: "Languages list",
      name: "Languages",
    },
    location: {
      name: "Location",
      description: "Location of the page",
      control: "text",
    },
    minHeight: {
      name: "Min Height",
      control: "number",
    },
    mobile: {
      name: "Mobile",
      description: "Navigation and languages mobile's menu",
      control: "object",
      table: {
        type: {
          summary: "MobileProps",
          detail: `{
                    classes: string;
                    hideFrom: string;
                    isOpen: boolean;
                    languages: Language[];
                    mobileLanguagesLabel: TextProps;
                    navigation: Link[];
                    separator: HRProps;
                    startingAt: number;
                  }`,
        },
      },
    },
    navigation: {
      description: "Navigation links",
      name: "Navigation",
    },
    separator: {
      description: "Separator between links",
      name: "Separator",
    },
    socials: {
      name: "Socials",
      description: "Facebook, Instagram, etc",
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <HeaderWrapper className="position-relative">
    <Header {...args} />
  </HeaderWrapper>
);

export const HeaderVersion2 = Template.bind({});
HeaderVersion2.args = {
  brand: {
    classes: "me-3",
    fontWeight: 700,
    svg: {
      icon: "vitruvian",
      size: "sm",
    },
    text: {
      text: "Company name",
      variant: "span",
    },
    to: "main",
  },
  call: {
    icon: "phone",
    classes: "mb-0 me-2 me-sm-3",
    size: "xs",
    text: "call us",
    url: "tel:+50683274040",
  },
  fixed: true,
  hideCloseFrom: "d-xl-none d-flex",
  location: "/",
  minHeight: 84,
  mobile: {
    classes: "p-4",
    hideFrom: "xl",
    isOpen: true,
    languages: [
      {
        name: "es",
        classes: "text-capitalize mb-3",
      },
      {
        name: "en",
        classes: "text-capitalize mb-3",
      },
    ],
    mobileLanguagesLabel: {
      classes: "mb-3",
      text: "Idiomas:",
      variant: "label",
    },
    navigation: [
      {
        type: "link",
        text: "Home",
        classes: "mb-2 mb-sm-2",
      },
      {
        type: "link",
        text: "About Us",
        classes: "mb-2 mb-sm-2",
      },
      {
        type: "link",
        text: "Services",
        classes: "mb-2 mb-sm-2",
      },
      {
        type: "link",
        text: "Executive Advisors",
        classes: "mb-2 mb-sm-2",
      },
      {
        type: "link",
        text: "Contact",
        classes: "mb-2 mb-sm-2",
      },
      {
        type: "link",
        text: "Blog",
        classes: "mb-2 mb-sm-2",
      },
    ],
    startingAt: 0,
  },
  navigation: [
    {
      type: "link",
      text: "Home",
      classes: "me-3 text-capitalize",
    },
    {
      type: "link",
      text: "About Us",
      classes: "me-3 text-capitalize",
    },
    {
      type: "link",
      text: "Services",
      classes: "me-3 text-capitalize",
    },
    {
      type: "link",
      text: "Executive Advisors",
      classes: "me-3 text-capitalize",
    },
    {
      type: "link",
      text: "Contact",
      classes: "me-3 text-capitalize",
    },
    {
      type: "link",
      text: "Blog",
      classes: "me-1 text-capitalize",
    },
  ],
};
