import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from "styled-components";

// Components
import Header from "./Header";

// Types
import Size from "./../../../shared/enums/size";
import LinkType from "./../../../shared/enums/linkType";

// Styles
const HeaderWrapper = styled.div`
  > div {
    position: relative;
  }
`;

export default {
  title: "Compositions/Header",
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
    showCall: {
      name: "Show Call?",
      description: "Show call feature",
    },
    showLanguages: {
      name: "Show Languages?",
      description: "Show Languages list",
    },
    showSocials: {
      name: "Show Socials?",
      description: "Show socials list",
    },
    showSwitchMode: {
      name: "Show Switch Mode?",
      description: "Show switch mode button",
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

export const Default = Template.bind({});
Default.args = {
  brand: {
    classes: "me-3",
    fontWeight: 700,
    svg: {
      icon: "logo",
      size: Size.sm,
    },
    text: {
      text: "Company name",
      variant: "span",
    },
    to: "main",
  },
  call: {
    icon: "phone",
    classes: "mb-0",
    size: Size.xs,
    text: "call us",
    url: "tel:+50683274040",
  },
  fixed: true,
  hideCloseFrom: "d-xl-none d-flex",
  hideLanguagesFrom: "xl",
  languages: [
    {
      name: "es",
      classes: "text-uppercase me-3",
    },
    {
      name: "en",
      classes: "text-uppercase me-3",
    },
  ],
  location: "/",
  minHeight: 84,
  mobile: {
    classes: "p-4",
    hideFrom: "xl",
    isOpen: true,
    languages: [
      {
        name: "es",
        classes: "text-capitalize",
      },
      {
        name: "es",
        classes: "text-capitalize",
      },
    ],
    navigation: [
      {
        type: LinkType.Anchor,
        anchor: "top",
        text: "Inicio",
        offset: -104,
        classes: "mb-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "units",
        text: "Cabinas",
        offset: -80,
        classes: "mb-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "common-spaces",
        text: "Espacios comúnes",
        offset: -80,
        classes: "mb-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "services",
        text: "Servicios",
        offset: -80,
        classes: "mb-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "drive",
        text: "Cómo llegar?",
        offset: -80,
        classes: "mb-2",
      },
      {
        type: LinkType.Anchor,
        anchor: "contact",
        text: "Contáctenos",
        offset: -80,
        classes: "mb-2",
      },
      {
        type: LinkType.Link,
        anchor: "info",
        text: "Info",
        classes: "mb-2",
      },
    ],
    startingAt: 82,
    mobileLanguagesLabel: {
      classes: "mb-3",
      text: "Idiomas:",
      variant: "label",
    },
  },
  navigation: [
    {
      type: LinkType.Anchor,
      anchor: "top",
      text: "Inicio",
      offset: -104,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "units",
      text: "Cabinas",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "common-spaces",
      text: "Espacios comúnes",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "services",
      text: "Servicios",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "drive",
      text: "Cómo llegar?",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Anchor,
      anchor: "contact",
      text: "Contáctenos",
      offset: -80,
      classes: "me-3 text-capitalize",
    },
    {
      type: LinkType.Link,
      anchor: "info",
      text: "Info",
      classes: "me-3 text-capitalize",
    },
  ],
  separator: {
    classes: "mx-3",
  },
  showCall: true,
  showLanguages: true,
  showSocials: true,
  showSwitchMode: true,
  socials: [
    {
      icon: "facebook",
      classes: "mb-0 mx-2 mx-sm-3",
      size: Size.xs,
      text: "Facebook",
      url: "https://www.facebook.com/vistalagoarenal",
    },
    {
      icon: "instagram",
      classes: "mb-0 me-2 me-sm-3",
      size: Size.xs,
      text: "Instagram",
      url: "https://www.instagram.com/vistalagoarenal/",
    },
  ],
};
