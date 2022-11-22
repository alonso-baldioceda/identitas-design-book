import LinkType from "../enums/linkType";

const NAV = [
  {
    type: LinkType.Anchor,
    anchor: "top",
    text: "Inicio",
  },
  {
    type: LinkType.Anchor,
    anchor: "units",
    text: "Cabinas",
  },
  {
    type: LinkType.Anchor,
    anchor: "common-spaces",
    text: "Espacios comúnes",
  },
  {
    type: LinkType.Anchor,
    anchor: "services",
    text: "Servicios",
  },
  {
    type: LinkType.Anchor,
    anchor: "drive",
    text: "Cómo llegar?",
  },
  {
    type: LinkType.Anchor,
    anchor: "contact",
    text: "Contáctenos",
  },
  {
    type: LinkType.Link,
    anchor: "info",
    text: "Info",
  },
];

export default NAV;
