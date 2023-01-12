import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Page
import Homepage from "./Homepage";

// Stories
import * as Layout from "./../compositions/Layout.stories";
import * as Card from "./../compositions/Card.stories";
import * as SphereStories from "./../compositions/Sphere.stories";

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
    panel: {
      color: "#FFFFFF",
      text: "Estamos ubicados en Costa Rica, Guanacaste, Tilarán. En una loma frente al Lago Arenal.",
      classes: "p-2 p-lg-3 m-0 col-4 col-lg-7",
      borderRadius: 0,
      borderWidth: 0,
      position: "bottom-start",
    },
  },
  unitsProps: {
    title: {
      text: "Cabinas",
      classes: "mb-0",
      variant: "h2",
    },
    description: {
      text: "Cada una de las 4 cabinas tiene 2 camas matrimoniales. Estamos habilitadas para alojar familias y amigos de cuatro a cinco personas. Poseen una iluminación cálida que induce al reposo, equipada para suplir toda necesidad y lograr una estadía singular.",
      classes: "mb-0",
    },
  },
  cardsGridProps: {
    xl: 3,
  },
  cardsProps: [
    {
      ...Card.Default.args,
      airbnb: {
        ...Card.Default.args?.airbnb,
        url: "https://www.pinterest.com/",
      },
      list: [
        {
          svg: <BedQueen />,
          text: "2 camas matrimoniales",
        },
      ],
      title: "Cabina 1",
    },
    {
      ...Card.Default.args,
      airbnb: {
        ...Card.Default.args?.airbnb,
        url: "https://www.instagram.com/",
      },
      list: [
        {
          svg: <BedQueen />,
          text: "2 camas matrimoniales",
        },
      ],
      title: "Cabina 2",
    },
    {
      ...Card.Default.args,
      airbnb: {
        ...Card.Default.args?.airbnb,
        url: "https://www.facebook.com/",
      },
      list: [
        {
          svg: <BedQueen />,
          text: "1 cama matrimonial",
        },
      ],
      title: "Cabina 3",
    },
  ],
  unitsGridProps: {
    lg: 2,
    xl: 2,
  },
  sphereProps1: {
    ...SphereStories.Sphere.args,
    id: "sphereSample1",
    image: SphereImage1,
    pitch: 6,
    preview: SpherePreviewImage1,
    sceneId: "sphereSample1",
    yaw: 40,
  },
  sphereProps2: {
    ...SphereStories.Sphere.args,
    id: "sphereSample2",
    image: SphereImage1,
    pitch: 6,
    preview: SpherePreviewImage1,
    sceneId: "sphereSample2",
    yaw: 40,
  },
  sphereProps3: {
    ...SphereStories.Sphere.args,
    id: "sphereSample3",
    image: SphereImage1,
    pitch: 6,
    preview: SpherePreviewImage1,
    sceneId: "sphereSample3",
    yaw: 40,
  },
  commonProps: {
    title: {
      text: "Espacios comúnes",
      classes: "mb-0",
      variant: "h2",
    },
    description: {
      text: "Nuestras áreas comunes convocan a una experiencia de vínculo social y personal enlazados a la naturaleza, una cocina totalmente equipada, espacio de trabajo y hermosos jardines que adornan los rústicos corredores.",
      classes: "mb-0",
    },
  },
  services: {
    title: {
      text: "Services",
      classes: "mb-0",
      variant: "h2",
    },
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
