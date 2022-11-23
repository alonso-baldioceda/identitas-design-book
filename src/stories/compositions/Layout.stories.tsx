import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Assets
import LogoIcon from "./../../images/svg/logo-black.svg";
import HomeIcon from "./../../images/svg/home.svg";
import EnvelopeIcon from "./../../images/svg/envelope.svg";
import PhoneIcon from "./../../images/svg/phone.svg";
import FacebookIcon from "./../../images/svg/facebook.svg";
import InstagramIcon from "./../../images/svg/instagram.svg";

// Components
import Layout from "./Layout";
// TODO: move this to shared/types
import { LinkIconSizes } from "./../components/LinkIcon";

// Constants
import NAV from "./../../shared/constants/nav";

export default {
  title: "Compositions/Layout",
  component: Layout,
  args: {
    header: {
      brand: {
        // duration: 250,
        fontWeight: 700,
        logoMarginRight: 3,
        // offset: -60,
        // smooth: true,
        // spy: true,
        svg: <LogoIcon />,
        text: "",
        to: "",
      },
      hideFrom: "xl",
      languages: ["es", "en"],
      navigation: NAV,
      call: {
        icon: <PhoneIcon />,
        me: 0,
        size: LinkIconSizes.xs,
        text: "call us",
        url: "tel:+50683274040",
      },
      socials: [
        {
          icon: <FacebookIcon />,
          mb: 1,
          size: LinkIconSizes.xs,
          text: "Facebook",
          url: "https://www.facebook.com/vistalagoarenal",
        },
        {
          icon: <InstagramIcon />,
          mb: 1,
          size: LinkIconSizes.xs,
          text: "Instagram",
          url: "https://www.instagram.com/vistalagoarenal/",
        },
      ],
      menuClose: {
        colorClose: "black",
        colorOpen: "red",
        isOpen: true,
        hideFrom: "xl",
      },
    },
    footer: {
      bgcolor: "dark",
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
        list: NAV,
      },
    },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <div className="container">
      <div className="row">
        <div className="col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aspernatur optio dignissimos quam atque cum non assumenda vitae
            explicabo molestiae iste quasi exercitationem esse, repellat quidem
            consectetur qui similique quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aspernatur optio dignissimos quam atque cum non assumenda vitae
            explicabo molestiae iste quasi exercitationem esse, repellat quidem
            consectetur qui similique quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aspernatur optio dignissimos quam atque cum non assumenda vitae
            explicabo molestiae iste quasi exercitationem esse, repellat quidem
            consectetur qui similique quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aspernatur optio dignissimos quam atque cum non assumenda vitae
            explicabo molestiae iste quasi exercitationem esse, repellat quidem
            consectetur qui similique quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aspernatur optio dignissimos quam atque cum non assumenda vitae
            explicabo molestiae iste quasi exercitationem esse, repellat quidem
            consectetur qui similique quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aspernatur optio dignissimos quam atque cum non assumenda vitae
            explicabo molestiae iste quasi exercitationem esse, repellat quidem
            consectetur qui similique quaerat.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export const Default = Template.bind({});
Default.args = {
  header: {
    brand: {
      // duration: 250,
      fontWeight: 700,
      logoMarginRight: 3,
      // offset: -60,
      // smooth: true,
      // spy: true,
      svg: <LogoIcon />,
      text: "",
      to: "",
    },
    // TODO: fix this
    languages: ["es", "en"],
    hideFrom: "xl",
    navigation: NAV,
    call: {
      icon: <PhoneIcon />,
      me: 0,
      size: LinkIconSizes.xs,
      text: "call us",
      url: "tel:+50683274040",
    },
    socials: [
      {
        icon: <FacebookIcon />,
        mb: 1,
        size: LinkIconSizes.xs,
        text: "Facebook",
        url: "https://www.facebook.com/vistalagoarenal",
      },
      {
        icon: <InstagramIcon />,
        mb: 1,
        size: LinkIconSizes.xs,
        text: "Instagram",
        url: "https://www.instagram.com/vistalagoarenal/",
      },
    ],
    menuClose: {
      colorClose: "blue",
      colorOpen: "red",
      isOpen: true,
      hideFrom: "xl",
    },
  },
  footer: {
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
      list: NAV,
    },
  },
};
