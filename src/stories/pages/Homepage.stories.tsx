import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Page
import Homepage from "./Homepage";

// Assets
import HeroImage from "./../../images/home-hero.jpg";
import SphereImage1 from "./../../images/tour/room1.jpg";
import SpherePreviewImage1 from "./../../images/tour/room1-preview.jpg";

export default {
  title: "Pages/Airbnb",
  component: Homepage,
} as ComponentMeta<typeof Homepage>;

const Template: ComponentStory<typeof Homepage> = (args) => (
  <Homepage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  location: "/",
  headerProps: {
    brand: {
      classes: "me-3",
      fontWeight: 700,
      svg: {
        icon: "logo",
        size: "sm",
      },
      text: {
        text: "Vista Lago Arenal",
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
    hideLanguagesFrom: "xl",
    languages: [
      {
        name: "es",
        classes: "text-uppercase me-3",
      },
      {
        name: "en",
        classes: "text-uppercase me-0",
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
          type: "anchor",
          anchor: "top",
          text: "Inicio",
          offset: -104,
          classes: "mb-2",
        },
        {
          type: "anchor",
          anchor: "units",
          text: "Cabinas",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: "anchor",
          anchor: "common-spaces",
          text: "Espacios comúnes",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: "anchor",
          anchor: "services",
          text: "Servicios",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: "anchor",
          anchor: "drive",
          text: "Cómo llegar?",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: "anchor",
          anchor: "contact",
          text: "Contáctenos",
          offset: -80,
          classes: "mb-2",
        },
        {
          type: "link",
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
        type: "anchor",
        anchor: "top",
        text: "Inicio",
        offset: -104,
        classes: "me-3 text-capitalize",
      },
      {
        type: "anchor",
        anchor: "units",
        text: "Cabinas",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: "anchor",
        anchor: "common-spaces",
        text: "Espacios comúnes",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: "anchor",
        anchor: "services",
        text: "Servicios",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: "anchor",
        anchor: "drive",
        text: "Cómo llegar?",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: "anchor",
        anchor: "contact",
        text: "Contáctenos",
        offset: -80,
        classes: "me-3 text-capitalize",
      },
      {
        type: "link",
        anchor: "info",
        text: "Info",
        classes: "me-3 text-capitalize",
      },
    ],
    separator: {
      classes: "mx-3 d-none d-xl-block",
    },
    socials: [
      {
        icon: "facebook",
        classes: "mb-0 mx-2 mx-sm-3",
        size: "xs",
        text: "Facebook",
        url: "https://www.facebook.com/vistalagoarenal",
      },
      {
        icon: "instagram",
        classes: "mb-0 me-2 me-sm-3 me-xl-0",
        size: "xs",
        text: "Instagram",
        url: "https://www.instagram.com/vistalagoarenal/",
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
        classes: "p-2 p-lg-3 m-0 col-12 col-lg-7",
        position: "bottom-start",
        text: {
          text: "Estamos ubicados en Costa Rica, Guanacaste, Tilarán. En una loma frente al Lago Arenal.",
          classes: "mb-0",
          variant: "h1",
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
              svg: "bedQueen",
              svgSize: "sm",
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
            bold: true,
            disabled: false,
            classes: "mb-2 px-4 py-2 rounded-pill fw-bold btn-airbnb",
            targetBlank: false,
            text: "Airbnb",
            url: "https://www.google.com/",
          },
          booking: {
            bold: true,
            disabled: false,
            classes: "mb-0 px-4 py-2 rounded-pill fw-bold btn-booking",
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
              svg: "bedQueen",
              svgSize: "sm",
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
            bold: true,
            disabled: false,
            classes: "mb-2 px-4 py-2 rounded-pill fw-bold btn-airbnb",
            targetBlank: false,
            text: "Airbnb",
            url: "https://www.google.com/",
          },
          booking: {
            bold: true,
            disabled: false,
            classes: "mb-0 px-4 py-2 rounded-pill fw-bold btn-booking",
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
              svg: "",
              svgSize: "sm",
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
            bold: true,
            disabled: false,
            classes: "mb-2 px-4 py-2 rounded-pill fw-bold btn-airbnb",
            targetBlank: false,
            text: "Airbnb",
            url: "https://www.google.com/",
          },
          booking: {
            bold: true,
            disabled: false,
            classes: "mb-0 px-4 py-2 rounded-pill fw-bold btn-booking",
            targetBlank: false,
            text: "Booking",
            url: "https://www.google.com/",
          },
        },
      },
    ],
    sphereProps1: {
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
            svg: "wifi",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Wifi",
              },
            },
          },
          {
            svg: "washing",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Lavadora",
              },
            },
          },
          {
            svg: "dryer",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Secadora",
              },
            },
          },
          {
            svg: "towels",
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
            svg: "hotWater",
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
            svg: "parking",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Estacionamiento gratuito en las instalaciones",
              },
            },
          },
          {
            svg: "footprint",
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
            svg: "kitchen",
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
            svg: "oven",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Horno",
              },
            },
          },
          {
            svg: "silverware",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Platos y cubiertos",
              },
            },
          },
          {
            svg: "refrigerator",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Refrigerador",
              },
            },
          },
          {
            svg: "stove",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Cocina",
              },
            },
          },
          {
            svg: "coffeeMaker",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Cafetera",
              },
            },
          },
          {
            svg: "oil",
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
            svg: "barbecueUtensils",
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
            svg: "pillow",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Estacionamiento gratuito en las instalaciones",
              },
            },
          },
          {
            svg: "bedLinens",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Almohadas y mantas adicionales",
              },
            },
          },
          {
            svg: "shampoo",
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
            svg: "patio",
            svgSize: "sm",
            text: {
              heading: {
                classes: "mb-0",
                text: "Patio",
              },
            },
          },
          {
            svg: "garden",
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
        classes: "mb-0 px-4 py-2 rounded-pill fw-bold mb-5 mb-md-0 btn-primary",
        targetBlank: true,
        text: "Ver en Google Maps",
        url: "https://goo.gl/maps/M2zvgGvrKBoyRzNH9",
      },
    },
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
        svg: "clock",
        svgSize: "sm",
        text: {
          heading: {
            classes: "mb-0",
            text: "Llegada: 15:00 a 21:00",
          },
        },
      },
      {
        svg: "clock",
        svgSize: "sm",
        text: {
          heading: {
            classes: "mb-0",
            text: "Salida: 11:00",
          },
        },
      },
      {
        svg: "smoke",
        svgSize: "sm",
        text: {
          heading: {
            classes: "mb-0",
            text: "Prohibido fumar",
          },
        },
      },
      {
        svg: "party",
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
    contact: {
      header: {
        text: "Contáctenos",
        classes: "mb-5",
        variant: "h2",
      },
      list: [
        {
          svg: "home",
          svgSize: "xs",
          classes: "mb-3",
          text: {
            heading: {
              classes: "mb-0",
              text: "Costa Rica, Guanacaste, Río Piedras, Tilarán.",
            },
          },
        },
        {
          svg: "envelope",
          svgSize: "xs",
          classes: "mb-3",
          text: {
            heading: {
              classes: "mb-0",
              text: "vistalagoarenal@gmail.com",
            },
          },
        },
        {
          svg: "phone",
          svgSize: "xs",
          classes: "mb-3",
          text: {
            heading: {
              classes: "mb-0",
              text: "+(506) 8327 4040",
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
          type: "anchor",
          anchor: "top",
          text: "Inicio",
          offset: -104,
          classes: "mb-3 d-block",
        },
        {
          type: "anchor",
          anchor: "units",
          text: "Cabinas",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: "anchor",
          anchor: "common-spaces",
          text: "Espacios comúnes",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: "anchor",
          anchor: "services",
          text: "Servicios",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: "anchor",
          anchor: "drive",
          text: "Cómo llegar?",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: "anchor",
          anchor: "contact",
          text: "Contáctenos",
          offset: -80,
          classes: "mb-3 d-block",
        },
        {
          type: "link",
          anchor: "info",
          text: "Info",
          classes: "mb-0 d-block",
        },
      ],
    },
  },
};
Default.storyName = "Homepage";
