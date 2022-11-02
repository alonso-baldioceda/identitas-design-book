import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { color } from "./../shared/styles.js";

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
import HomeIcon from "./../../images/svg/home.svg";
import EnvelopeIcon from "./../../images/svg/envelope.svg";
import PhoneIcon from "./../../images/svg/phone.svg";

// Page
import Homepage from "./Homepage";

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
  heroProps: {
    src: HeroImage,
    mask: true,
    bgColor: color.background,
    text: "Estamos ubicados en Costa Rica, Guanacaste, Tilarán. En una loma frente al Lago Arenal.",
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
  servicesBasicsProps: {
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
  servicesFacilitiesProps: {
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
  servicesKitchenProps: {
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
  servicesBetAndBathProps: {
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
  servicesOutdoorProps: {
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
        svgSize: "small",
        text: "Llegada: 15:00 a 21:00",
      },
      {
        svg: <CheckOutIcon />,
        svgSize: "small",
        text: "Salida: 11:00",
      },
      {
        svg: <SmokeIcon />,
        svgSize: "small",
        text: "Prohibido fumar",
      },
      {
        svg: <PartyIcon />,
        svgSize: "small",
        text: "Está prohibido hacer fiestas o eventos",
      },
    ],
  },
  footerProps: {
    bgColor: "dark",
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
      list: [
        {
          name: "main",
          anchor: "#main",
          text: "Inicio",
        },
        {
          name: "units",
          anchor: "#units",
          text: "Cabinas",
        },
        {
          name: "common",
          anchor: "#common-spaces",
          text: "Espacios comúnes",
        },
        {
          name: "services",
          anchor: "#services",
          text: "Servicios",
        },
        {
          name: "drive",
          anchor: "#drive",
          text: "Cómo llegar?",
        },
        {
          name: "contact",
          anchor: "#contact",
          text: "Contáctenos",
        },
      ],
    },
  },
};
