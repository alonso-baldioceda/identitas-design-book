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
  contactPointProps: {
    type: "Organization",
    url: "https://vistalagoarenal.com/",
    name: "Cabinas Vista Lago Arenal",
    contactPoint: {
      type: "ContactPoint",
      telephone: "+50683274040",
      contactType: "Customer Support",
    },
  },
  topProps: {
    blockProps: {
      id: "top",
    },
    heroProps: {
      src: HeroImage,
      mask: true,
      panel: {
        classes: "p-2 p-lg-3 m-0 col-4 col-lg-7",
        position: "bottom-start",
        text: {
          text: "Estamos ubicados en Costa Rica, Guanacaste, Tilarán. En una loma frente al Lago Arenal.",
          classes: "mb-0",
          variant: "h1",
          color: "#FFFFFF",
        },
      },
    },
  },
  unitsProps: {
    block: {
      id: "units",
      classes: "bg-secondary-pastel",
    },
    heading: {
      text: "Cabinas",
      classes: "mb-0",
      variant: "h2",
    },
    text: {
      text: "Cada una de las 4 cabinas tiene 2 camas matrimoniales. Estamos habilitadas para alojar familias y amigos de cuatro a cinco personas. Poseen una iluminación cálida que induce al reposo, equipada para suplir toda necesidad y lograr una estadía singular.",
      classes: "mb-0",
    },
    cardsGridProps: {
      xl: 3,
    },
    cardsProps: [
      {
        border: 4,
        header: {
          text: {
            classes: "mb-0 py-4 text-capitalize",
            text: "Cabina 1",
            variant: "h3",
          },
          backgroundColor: "#81B29A",
        },
        body: {
          backgroundColor: "transparent",
          list: [
            {
              svg: <BedQueen />,
              svgSize: Size.sm,
              text: {
                heading: {
                  classes: "mb-0",
                  text: "2 camas matrimoniales",
                  variant: "h4",
                },
                bottom: {
                  classes: "mb-0",
                  text: "(máx. 4 personas)",
                },
              },
            },
          ],
          preCta: {
            classes: "text-center small mb-2",
            text: "Reservar por",
          },
          airbnb: {
            appearance: "airbnb",
            bold: true,
            disabled: false,
            classes: "mb-2 px-4 py-2 rounded-pill fw-bold",
            targetBlank: false,
            text: "Airbnb",
            url: "https://www.google.com/",
          },
          booking: {
            appearance: "booking",
            bold: true,
            disabled: false,
            classes: "mb-0 px-4 py-2 rounded-pill fw-bold",
            targetBlank: false,
            text: "Booking",
            url: "https://www.google.com/",
          },
        },
      },
      {
        border: 4,
        header: {
          text: {
            classes: "mb-0 py-4 text-capitalize",
            text: "Cabina 2",
            variant: "h3",
          },
          backgroundColor: "#81B29A",
        },
        body: {
          backgroundColor: "transparent",
          list: [
            {
              svg: <BedQueen />,
              svgSize: Size.sm,
              text: {
                heading: {
                  classes: "mb-0",
                  text: "2 camas matrimoniales",
                  variant: "h4",
                },
                bottom: {
                  classes: "mb-0",
                  text: "(máx. 4 personas)",
                },
              },
            },
          ],
          preCta: {
            classes: "text-center small mb-2",
            text: "Reservar por",
          },
          airbnb: {
            appearance: "airbnb",
            bold: true,
            disabled: false,
            classes: "mb-2 px-4 py-2 rounded-pill fw-bold",
            targetBlank: false,
            text: "Airbnb",
            url: "https://www.google.com/",
          },
          booking: {
            appearance: "booking",
            bold: true,
            disabled: false,
            classes: "mb-0 px-4 py-2 rounded-pill fw-bold",
            targetBlank: false,
            text: "Booking",
            url: "https://www.google.com/",
          },
        },
      },
      {
        border: 4,
        header: {
          text: {
            classes: "mb-0 py-4 text-capitalize",
            text: "Cabina 3",
            variant: "h3",
          },
          backgroundColor: "#81B29A",
        },
        body: {
          backgroundColor: "transparent",
          list: [
            {
              svg: <BedQueen />,
              svgSize: Size.sm,
              text: {
                heading: {
                  classes: "mb-0",
                  text: "1 cama matrimonial",
                  variant: "h4",
                },
                bottom: {
                  classes: "mb-0",
                  text: "(máx. 2 personas)",
                },
              },
            },
          ],
          preCta: {
            classes: "text-center small mb-2",
            text: "Reservar por",
          },
          airbnb: {
            appearance: "airbnb",
            bold: true,
            disabled: false,
            classes: "mb-2 px-4 py-2 rounded-pill fw-bold",
            targetBlank: false,
            text: "Airbnb",
            url: "https://www.google.com/",
          },
          booking: {
            appearance: "booking",
            bold: true,
            disabled: false,
            classes: "mb-0 px-4 py-2 rounded-pill fw-bold",
            targetBlank: false,
            text: "Booking",
            url: "https://www.google.com/",
          },
        },
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
  },
  commonProps: {
    blockProps: {
      id: "common-spaces",
    },
    heading: {
      text: "Espacios comúnes",
      classes: "mb-0",
      variant: "h2",
    },
    text: {
      text: "Nuestras áreas comunes convocan a una experiencia de vínculo social y personal enlazados a la naturaleza, una cocina totalmente equipada, espacio de trabajo y hermosos jardines que adornan los rústicos corredores.",
      classes: "mb-0",
    },
  },
  servicesProps: {
    blockProps: {
      id: "services",
      classes: "bg-primary-pastel",
    },
    heading: {
      text: "Services",
      classes: "mb-0",
      variant: "h2",
    },
    list: [
      {
        heading: {
          classes: "mb-0",
          text: "Basics",
          variant: "h3",
        },
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
                variant: "small",
              },
            },
          },
          {
            svg: <HotWaterIcon />,
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Agua caliente",
              },
            },
          },
        ],
      },
      {
        heading: {
          classes: "mb-0",
          text: "Instalaciones",
          variant: "h3",
        },
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
        heading: {
          classes: "mb-0",
          text: "Comedor",
          variant: "h3",
        },
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
                variant: "small",
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
                variant: "small",
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
        heading: {
          classes: "mb-0",
          text: "Cama y baño",
          variant: "h3",
        },
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
        heading: {
          classes: "mb-0",
          text: "Al aire libre",
          variant: "h3",
        },
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
    blockProps: {
      id: "drive",
    },
    content: {
      heading: {
        text: "Como llegar?",
        classes: "mb-5",
        variant: "h2",
      },
      text: {
        text: "Estamos ubicados en el pueblo Río Piedras, de Tilarán, Guanacaste.",
        classes: "mb-5",
      },
      buttonLink: {
        appearance: "primary",
        classes: "mb-0 px-4 py-2 rounded-pill fw-bold mb-5 mb-md-0",
        targetBlank: true,
        text: "Ver en Google Maps",
        url: "https://goo.gl/maps/M2zvgGvrKBoyRzNH9",
      },
    },
    icon: <MapIcon />,
  },
  rulesProps: {
    blockProps: {
      id: "rules",
    },
    heading: {
      text: "Lo que debes saber",
      classes: "mb-0",
      variant: "h2",
    },
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
          svg: <HomeIcon />,
          svgSize: "xs",
          classes: "mb-3",
          text: {
            heading: {
              classes: "mb-0",
              text: "Costa Rica, Guanacaste, Río Piedras, Tilarán.",
              color: "#FFFFFF",
            },
          },
        },
        {
          svg: <EnvelopeIcon />,
          svgSize: "xs",
          classes: "mb-3",
          text: {
            heading: {
              classes: "mb-0",
              text: "vistalagoarenal@gmail.com",
              color: "#FFFFFF",
            },
          },
        },
        {
          svg: <PhoneIcon />,
          svgSize: "xs",
          classes: "mb-3",
          text: {
            heading: {
              classes: "mb-0",
              text: "+(506) 8327 4040",
              color: "#FFFFFF",
            },
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
