import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { color } from "./../shared/styles.js";

// Assets
import HeroImageFile from "./../../images/home-hero.jpg";
import BedQueen from "./../../images/svg/bed-queen.svg";
import WifiIcon from "./../../images/svg/wifi.svg";
import WashingIcon from "./../../images/svg/washing.svg";
import DryerIcon from "./../../images/svg/dryer.svg";
import TowelsIcon from "./../../images/svg/towels.svg";
import HotWaterIcon from "./../../images/svg/hot-water.svg";
import ParkingIcon from "./../../images/svg/parking.svg";
import FootprintIcon from "./../../images/svg/footprint.svg";
import KitchenIcon from "./../../images/svg/kitchen.svg";
import OvenIcon from "./../../images/svg/oven.svg";
import SilverwareIcon from "./../../images/svg/silverware.svg";
import RefrigeratorIcon from "./../../images/svg/refrigerator.svg";
import StoveIcon from "./../../images/svg/stove.svg";
import CoffeeMakerIcon from "./../../images/svg/coffee-maker.svg";
import OilIcon from "./../../images/svg/oil.svg";
import BarbecueUtensilsIcon from "./../../images/svg/barbecue-utensils.svg";
import PillowIcon from "./../../images/svg/pillow.svg";
import BedLinensIcon from "./../../images/svg/bed-linens.svg";
import ShampooIcon from "./../../images/svg/shampoo.svg";
import PatioIcon from "./../../images/svg/patio.svg";
import GardenIcon from "./../../images/svg/garden.svg";
import MapIcon from "./../../images/svg/navigator.svg";

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
  servicesBasics: {
    heading: "Basics",
    float: true,
    list: [
      {
        svg: <WifiIcon />,
        svgSize: "small",
        text: "Wifi",
      },
      {
        svg: <WashingIcon />,
        svgSize: "small",
        text: "Lavadora",
      },
      {
        svg: <DryerIcon />,
        svgSize: "small",
        text: "Secadora",
      },
      {
        subText: "Toallas, sábanas, jabón y papel higiénico",
        svg: <TowelsIcon />,
        svgSize: "small",
        text: "Servicios imprescindibles",
      },
      {
        svg: <HotWaterIcon />,
        svgSize: "small",
        text: "Agua caliente",
      },
    ],
  },
  servicesFacilities: {
    heading: "Instalaciones",
    float: true,
    list: [
      {
        svg: <ParkingIcon />,
        svgSize: "small",
        text: "Estacionamiento gratuito en las instalaciones",
      },
      {
        svg: <FootprintIcon />,
        svgSize: "small",
        text: "Admitimos animales de compañía",
      },
    ],
  },
  servicesKitchen: {
    heading: "Comedor",
    float: true,
    list: [
      {
        subText: "Los huéspedes pueden cocinar en este espacio",
        svg: <KitchenIcon />,
        svgSize: "small",
        text: "Comedor",
      },
      {
        svg: <OvenIcon />,
        svgSize: "small",
        text: "Horno",
      },
      {
        svg: <SilverwareIcon />,
        svgSize: "small",
        text: "Playos y cubiertos",
      },
      {
        svg: <RefrigeratorIcon />,
        svgSize: "small",
        text: "Refrigerador",
      },
      {
        svg: <StoveIcon />,
        svgSize: "small",
        text: "Cocina",
      },
      {
        svg: <CoffeeMakerIcon />,
        svgSize: "small",
        text: "Cafetera",
      },
      {
        subText: "Ollas y sartenes, aceite, sal y pimienta",
        svg: <OilIcon />,
        svgSize: "small",
        text: "Utensilios básicos para cocinar",
      },
      {
        svg: <BarbecueUtensilsIcon />,
        svgSize: "small",
        text: "Utensilios para hacer parrillada",
      },
    ],
  },
  servicesBetAndBath: {
    heading: "Cama y baño",
    float: true,
    list: [
      {
        svg: <PillowIcon />,
        svgSize: "small",
        text: "Estacionamiento gratuito en las instalaciones",
      },
      {
        svg: <BedLinensIcon />,
        svgSize: "small",
        text: "Admitimos animales de compañía",
      },
      {
        svg: <ShampooIcon />,
        svgSize: "small",
        text: "Admitimos animales de compañía",
      },
    ],
  },
  servicesOutdoor: {
    heading: "Cama y baño",
    float: true,
    list: [
      {
        svg: <PatioIcon />,
        svgSize: "small",
        text: "Estacionamiento gratuito en las instalaciones",
      },
      {
        svg: <GardenIcon />,
        svgSize: "small",
        text: "Admitimos animales de compañía",
      },
    ],
  },
};
