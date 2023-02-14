import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Layout from "./Layout";

// Stories
import * as Header from "./header/Header.stories";

// Types
import LinkType from "./../../shared/enums/linkType";
import Size from "./../../shared/enums/size";

export default {
  title: "Compositions/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <div className="position-relative">
    <Layout {...args}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aspernatur optio dignissimos quam atque cum non assumenda vitae
              explicabo molestiae iste quasi exercitationem esse, repellat
              quidem consectetur qui similique quaerat.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  footer: {
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
              color: "#FFFFFF",
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
              color: "#FFFFFF",
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
  header: {
    ...Header.Default.args,
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
  location: "/",
};
