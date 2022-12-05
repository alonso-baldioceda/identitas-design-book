import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { color } from "./../shared/styles.js";

// Page
import Homepage from "./Homepage";

// Stories
import * as Layout from "./../compositions/Layout.stories";

// Assets
import HeroImage from "./../../images/home-hero.jpg";
import SphereImage1 from "./../../images/tour/room1.jpg";
import SpherePreviewImage1 from "./../../images/tour/room1-preview.jpg";
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
import CheckInIcon from "./../../images/svg/clock.svg";
import CheckOutIcon from "./../../images/svg/clock.svg";
import SmokeIcon from "./../../images/svg/no-smoking.svg";
import PartyIcon from "./../../images/svg/party.svg";

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
  headerProps: {
    ...Layout.Default.args?.header,
  },
  heroProps: {
    src: HeroImage,
    mask: true,
    bgColor: color.background,
    text: "Estamos ubicados en Costa Rica, Guanacaste, Tilarán. En una loma frente al Lago Arenal.",
  },
  cardsGridProps: {
    xl: 3,
  },
  cardsProps: [
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
          svgSize: "sm",
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
          svgSize: "sm",
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
          svgSize: "sm",
          text: "2 camas matrimoniales",
        },
      ],
      preCta: "Reservar por",
      title: "Cabina 3",
      upfrontBackgroundColor: "transparent",
    },
  ],
  unitsGridProps: {
    lg: 2,
    xl: 2,
  },
  sphereProps1: {
    border: 5,
    borderColor: "primary",
    height: "400px",
    id: "sphereSample1",
    image: SphereImage1,
    pitch: 6,
    preview: SpherePreviewImage1,
    sceneId: "sphereSample1",
    width: "100%",
    yaw: 40,
  },
  sphereProps2: {
    border: 5,
    borderColor: "primary",
    height: "400px",
    id: "sphereSample2",
    image: SphereImage1,
    pitch: 6,
    preview: SpherePreviewImage1,
    sceneId: "sphereSample2",
    width: "100%",
    yaw: 40,
  },
  sphereProps3: {
    border: 5,
    borderColor: "primary",
    height: "400px",
    id: "sphereSample3",
    image: SphereImage1,
    pitch: 6,
    preview: SpherePreviewImage1,
    sceneId: "sphereSample3",
    width: "100%",
    yaw: 40,
  },
  services: {
    heading: "Services",
    list: [
      {
        heading: "Basics",
        float: true,
        list: [
          {
            svg: <WifiIcon />,
            svgSize: "sm",
            text: "Wifi",
          },
          {
            svg: <WashingIcon />,
            svgSize: "sm",
            text: "Lavadora",
          },
          {
            svg: <DryerIcon />,
            svgSize: "sm",
            text: "Secadora",
          },
          {
            subText: "Toallas, sábanas, jabón y papel higiénico",
            svg: <TowelsIcon />,
            svgSize: "sm",
            text: "Servicios imprescindibles",
          },
          {
            svg: <HotWaterIcon />,
            svgSize: "sm",
            text: "Agua caliente",
          },
        ],
      },
      {
        heading: "Instalaciones",
        float: true,
        list: [
          {
            svg: <ParkingIcon />,
            svgSize: "sm",
            text: "Estacionamiento gratuito en las instalaciones",
          },
          {
            svg: <FootprintIcon />,
            svgSize: "sm",
            text: "Admitimos animales de compañía",
          },
        ],
      },
      {
        heading: "Comedor",
        float: true,
        list: [
          {
            subText: "Los huéspedes pueden cocinar en este espacio",
            svg: <KitchenIcon />,
            svgSize: "sm",
            text: "Comedor",
          },
          {
            svg: <OvenIcon />,
            svgSize: "sm",
            text: "Horno",
          },
          {
            svg: <SilverwareIcon />,
            svgSize: "sm",
            text: "Playos y cubiertos",
          },
          {
            svg: <RefrigeratorIcon />,
            svgSize: "sm",
            text: "Refrigerador",
          },
          {
            svg: <StoveIcon />,
            svgSize: "sm",
            text: "Cocina",
          },
          {
            svg: <CoffeeMakerIcon />,
            svgSize: "sm",
            text: "Cafetera",
          },
          {
            subText: "Ollas y sartenes, aceite, sal y pimienta",
            svg: <OilIcon />,
            svgSize: "sm",
            text: "Utensilios básicos para cocinar",
          },
          {
            svg: <BarbecueUtensilsIcon />,
            svgSize: "sm",
            text: "Utensilios para hacer parrillada",
          },
        ],
      },
      {
        heading: "Cama y baño",
        float: true,
        list: [
          {
            svg: <PillowIcon />,
            svgSize: "sm",
            text: "Estacionamiento gratuito en las instalaciones",
          },
          {
            svg: <BedLinensIcon />,
            svgSize: "sm",
            text: "Admitimos animales de compañía",
          },
          {
            svg: <ShampooIcon />,
            svgSize: "sm",
            text: "Admitimos animales de compañía",
          },
        ],
      },
      {
        heading: "Cama y baño",
        float: true,
        list: [
          {
            svg: <PatioIcon />,
            svgSize: "sm",
            text: "Estacionamiento gratuito en las instalaciones",
          },
          {
            svg: <GardenIcon />,
            svgSize: "sm",
            text: "Admitimos animales de compañía",
          },
        ],
      },
    ],
  },
  driveProps: {
    buttonAppearance: "dark",
    heading: "Como llegar?",
    text: "Estamos ubicados en el pueblo Río Piedras, de Tilarán, Guanacaste.",
    icon: <MapIcon />,
    targetBlank: true,
    url: "https://www.google.com/maps/place/Cabinas+Vista+Lago+Arenal/@10.5610207,-84.9657641,18.77z/data=!4m8!3m7!1s0x0:0xa18ae1cb8859035e!5m2!4m1!1i2!8m2!3d10.5606132!4d-84.9653107?hl=es-419",
  },
  rulesProps: {
    heading: "Lo que debes saber",
    float: true,

    list: [
      {
        svg: <CheckInIcon />,
        svgSize: "sm",
        text: "Llegada: 15:00 a 21:00",
      },
      {
        svg: <CheckOutIcon />,
        svgSize: "sm",
        text: "Salida: 11:00",
      },
      {
        svg: <SmokeIcon />,
        svgSize: "sm",
        text: "Prohibido fumar",
      },
      {
        svg: <PartyIcon />,
        svgSize: "sm",
        text: "Está prohibido hacer fiestas o eventos",
      },
    ],
  },
  footerProps: {
    ...Layout.Default.args?.footer,
  },
};
