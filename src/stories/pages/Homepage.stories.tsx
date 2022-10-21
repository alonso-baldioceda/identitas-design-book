import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { color } from "./../shared/styles.js";

// Assets
import HeroImageFile from "./../../images/home-hero.jpg";
import BedQueen from "./../../images/svg/bed-queen.svg";

// Page
import Homepage from "./Homepage";

const heroImage = {
  src: HeroImageFile,
};

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Pages/Homepage",
  component: Homepage,
} as ComponentMeta<typeof Homepage>;

const Template: ComponentStory<typeof Homepage> = (args) => (
  <Homepage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  hero: {
    src: HeroImageFile,
    mask: true,
    bgColor: color.background,
    text: "Estamos ubicados en Costa Rica, Guanacaste, Tilarán. En una loma frente al Lago Arenal.",
  },
  cardsData: [
    {
      border: 4,
      cta: {
        appearance: "airbnb",
        bold: true,
        disabled: false,
        mb: 0,
        px: 4,
        py: 2,
        rounded: true,
        targetBlank: false,
        text: "Airbnb",
        url: "https://www.google.com/",
      },
      foreignBackgroundColor: "primary",
      list: [
        {
          subText: "",
          svg: <BedQueen />,
          svgSize: "small",
          text: "2 camas matrimoniales",
        },
      ],
      preCta: "Reservar por",
      title: "Cabina 1",
      upfrontBackgroundColor: "transparent",
    },
    {
      border: 4,
      cta: {
        appearance: "airbnb",
        bold: true,
        disabled: false,
        mb: 0,
        px: 4,
        py: 2,
        rounded: true,
        targetBlank: false,
        text: "Airbnb",
        url: "https://www.google.com/",
      },
      foreignBackgroundColor: "primary",
      list: [
        {
          subText: "",
          svg: <BedQueen />,
          svgSize: "small",
          text: "2 camas matrimoniales",
        },
      ],
      preCta: "Reservar por",
      title: "Cabina 2",
      upfrontBackgroundColor: "transparent",
    },
    {
      border: 4,
      cta: {
        appearance: "airbnb",
        bold: true,
        disabled: false,
        mb: 0,
        px: 4,
        py: 2,
        rounded: true,
        targetBlank: false,
        text: "Airbnb",
        url: "https://www.google.com/",
      },
      foreignBackgroundColor: "primary",
      list: [
        {
          subText: "",
          svg: <BedQueen />,
          svgSize: "small",
          text: "2 camas matrimoniales",
        },
      ],
      preCta: "Reservar por",
      title: "Cabina 3",
      upfrontBackgroundColor: "transparent",
    },
  ],
  servicesData: [
    {
      icon: BedQueen,
      text: "some other text here!!",
    },
  ],
};
