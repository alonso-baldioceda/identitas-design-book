import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Page
import Homepage from "./Homepage";

// Types
import LinkType from "../../shared/enums/linkType";
import Size from "./../../shared/enums/size";

// Assets
import LogoIcon from "./../../images/svg/logo-black.svg";
import PhoneIcon from "./../../images/svg/call.svg";
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";
import HomeIcon from "./../../images/svg/home.svg";
import EnvelopeIcon from "./../../images/svg/envelope.svg";
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
    fixed: true,
    minHeight: 84,
    hideLanguagesFrom: "xl",
    showLanguages: true,
    showCall: true,
    call: {
      icon: <PhoneIcon />,
      classes: "mb-0",
      size: Size.xs,
      text: "call us",
      url: "tel:+50683274040",
    },
    mobile: {
      bgColor: "dark",
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
      translate: "Idiomas",
    },
    separator: {
      classes: "mx-3",
    },
    showSocials: true,
    showSwitchMode: true,
    socials: [
      {
        icon: <FacebookIcon />,
        classes: "mb-0 mx-2 mx-sm-3",
        size: Size.xs,
        text: "Facebook",
        url: "https://www.facebook.com/vistalagoarenal",
      },
      {
        icon: <InstagramIcon />,
        classes: "mb-0 me-2 me-sm-3 me-md-3 me-lg-3 me-xl-3",
        size: Size.xs,
        text: "Instagram",
        url: "https://www.instagram.com/vistalagoarenal/",
      },
    ],
    brand: {
      fontWeight: 700,
      hideNameOnMobile: true,
      svg: <LogoIcon />,
      name: "Vista Lago Arenal",
      to: "main",
      classes: "me-3",
    },
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
      border: 4,
      foreignBackgroundColor: "primary",
      preCta: "Reservar por",
      airbnb: {
        appearance: "airbnb",
        bold: true,
        disabled: false,
        mb: 0,
        px: 4,
        py: 2,
        rounded: true,
        targetBlank: false,
        text: "Airbnb",
        url: "https://www.airbnb.co.cr/rooms/547038520602833720?source_impression_id=p3_1654653090_vrBQiADFq1SJJSle",
      },
      list: [
        {
          svg: <BedQueen />,
          text: {
            heading: {
              classes: "mb-0",
              text: "2 camas matrimoniales",
            },
          },
        },
      ],
      title: "Cabina 1",
    },
    {
      border: 4,
      foreignBackgroundColor: "primary",
      preCta: "Reservar por",
      airbnb: {
        appearance: "airbnb",
        bold: true,
        disabled: false,
        mb: 0,
        px: 4,
        py: 2,
        rounded: true,
        targetBlank: false,
        text: "Airbnb",
        url: "https://www.airbnb.co.cr/rooms/558085397887318215?source_impression_id=p3_1654653092_LG9GBCv9HT0Wfjo2",
      },
      list: [
        {
          svg: <BedQueen />,
          text: {
            heading: {
              classes: "mb-0",
              text: "2 camas matrimoniales",
            },
          },
        },
      ],
      title: "Cabina 2",
    },
    {
      border: 4,
      foreignBackgroundColor: "primary",
      preCta: "Reservar por",
      airbnb: {
        appearance: "airbnb",
        bold: true,
        disabled: false,
        mb: 0,
        px: 4,
        py: 2,
        rounded: true,
        targetBlank: false,
        text: "Airbnb",
        url: "https://es-l.airbnb.com/rooms/662186647924755970?unique_share_id=93af2629-16c5-471d-b1bb-89960aca1db2&source_impression_id=p3_1673629606_LdMv42NRGPYXyTQN",
      },
      list: [
        {
          svg: <BedQueen />,
          text: {
            heading: {
              classes: "mb-0",
              text: "1 cama matrimonial",
            },
          },
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
            text: {
              heading: {
                classes: "mb-0",
                text: "Wifi",
              },
            },
          },
          {
            svg: <WashingIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Lavadora",
              },
            },
          },
          {
            svg: <DryerIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Secadora",
              },
            },
          },
          {
            svg: <TowelsIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Servicios imprescindibles",
              },
              bottom: {
                classes: "mb-0",
                text: "Toallas, sábanas, jabón y papel higiénico",
              },
            },
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
            text: {
              heading: {
                classes: "mb-0",
                text: "Estacionamiento gratuito en las instalaciones",
              },
            },
          },
          {
            svg: <FootprintIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Admitimos animales de compañía",
              },
            },
          },
        ],
      },
      {
        heading: "Comedor",
        float: true,
        list: [
          {
            svg: <KitchenIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Comedor",
              },
              bottom: {
                classes: "mb-0",
                text: "Los huéspedes pueden cocinar en este espacio",
              },
            },
          },
          {
            svg: <OvenIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Horno",
              },
            },
          },
          {
            svg: <SilverwareIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Platos y cubiertos",
              },
            },
          },
          {
            svg: <RefrigeratorIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Refrigerador",
              },
            },
          },
          {
            svg: <StoveIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Cocina",
              },
            },
          },
          {
            svg: <CoffeeMakerIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Cafetera",
              },
            },
          },
          {
            svg: <OilIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Utensilios básicos para cocinar",
              },
              bottom: {
                classes: "mb-0",
                text: "Ollas y sartenes, aceite, sal y pimienta",
              },
            },
          },
          {
            svg: <BarbecueUtensilsIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Utensilios para hacer parrillada",
              },
            },
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
            text: {
              heading: {
                classes: "mb-0",
                text: "Estacionamiento gratuito en las instalaciones",
              },
            },
          },
          {
            svg: <BedLinensIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Almohadas y mantas adicionales",
              },
            },
          },
          {
            svg: <ShampooIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Champú",
              },
            },
          },
        ],
      },
      {
        heading: "Al aire libre",
        float: true,
        list: [
          {
            svg: <PatioIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Patio",
              },
            },
          },
          {
            svg: <GardenIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Jardín",
              },
            },
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
        text: {
          heading: {
            classes: "mb-0",
            text: "Llegada: 15:00 a 21:00",
          },
        },
      },
      {
        svg: <CheckOutIcon />,
        svgSize: "sm",
        text: {
          heading: {
            classes: "mb-0",
            text: "Salida: 11:00",
          },
        },
      },
      {
        svg: <SmokeIcon />,
        svgSize: "sm",
        text: {
          heading: {
            classes: "mb-0",
            text: "Prohibido fumar",
          },
        },
      },
      {
        svg: <PartyIcon />,
        svgSize: "sm",
        text: {
          heading: {
            classes: "mb-0",
            text: "Está prohibido hacer fiestas o eventos",
          },
        },
      },
    ],
  },
  footerProps: {
    bgColor: "#000",
    contact: {
      header: {
        text: "Contáctenos",
        classes: "mb-5",
        variant: "h2",
      },
      list: [
        {
          icon: <HomeIcon />,
          classes: "mb-3",
          text: {
            classes: "mb-0",
            text: "Costa Rica, Guanacaste, Río Piedras, Tilarán.",
            color: "#FFFFFF",
          },
        },
        {
          icon: <EnvelopeIcon />,
          classes: "mb-3",
          text: {
            classes: "mb-0",
            text: "vistalagoarenal@gmail.com",
            color: "#FFFFFF",
          },
        },
        {
          icon: <PhoneIcon />,
          classes: "mb-3",
          text: {
            classes: "mb-0",
            text: "+(506) 8327 4040",
            color: "#FFFFFF",
          },
        },
      ],
    },
    navigation: {
      header: {
        text: "Enlaces",
        classes: "mb-5",
        variant: "h2",
      },
      list: [
        {
          type: LinkType.Anchor,
          anchor: "top",
          text: "Inicio",
          offset: -104,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Anchor,
          anchor: "units",
          text: "Cabinas",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Anchor,
          anchor: "common-spaces",
          text: "Espacios comúnes",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Anchor,
          anchor: "services",
          text: "Servicios",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Anchor,
          anchor: "drive",
          text: "Cómo llegar?",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Anchor,
          anchor: "contact",
          text: "Contáctenos",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: LinkType.Link,
          anchor: "info",
          text: "Info",
          classes: "mb-0 d-block",
        },
      ],
    },
  },
};
