import { createGlobalStyle, css } from "styled-components";

import { color, prefix } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700";

export const bodyStyles = css`
  /*********************/
  /***** Typography ****/
  /*********************/

  /* Body */

  background-color: ${color.lightest} !important;
  color: ${color.body} !important;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.125rem;
  font-weight: 400;

  /* Headings */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700 !important;
    letter-spacing: -0.2px;
  }

  h1 {
    font-size: 2rem !important;

    @media (min-width: 992px) {
      font-size: 2.5rem !important;
    }

    @media (min-width: 1200px) {
      font-size: 3rem !important;
    }
  }

  h2 {
    font-size: 1.525rem !important;

    @media (min-width: 992px) {
      font-size: 2rem !important;
    }

    @media (min-width: 1200px) {
      font-size: 2.125rem !important;
    }
  }

  h3 {
    font-size: 1.25rem !important;

    @media (min-width: 992px) {
      font-size: 1.375rem !important;
    }

    @media (min-width: 1200px) {
      font-size: 1.5rem !important;
    }
  }

  /* Paragraph */

  p {
    color: ${color.black} !important;
  }

  /* Small */

  small {
    color: ${color.black} !important;
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0;
  }

  /*********************/
  /***** Utilities *****/
  /*********************/

  /* Header */

  header {
    background-color: ${color.lightest} !important;

    .${prefix}-brand {
      span {
        color: ${color.body} !important;
      }
    }

    .${prefix}-nav {
      a {
        color: ${color.body} !important;
      }
    }

    .${prefix}-separator {
      background-color: ${color.body};
    }

    .${prefix}-menu-close {
      .menu-close-bars {
        span {
          background: ${color.body};

          &.is-open {
            background: ${color.body};
          }
        }
      }
    }

    .${prefix}-languages {
      a {
        border-bottom: 2px solid ${color.transparent};
        color: ${color.body};

        &.active,
        &:hover,
        &:focus {
          border-bottom: 2px solid ${color.secondary};
          color: ${color.body};
        }

        &:visited {
          color: ${color.body};
        }
      }
    }
  }

  /* Gallery */

  .${prefix}-gallery {
    .${prefix}-gallery-item {
      img {
        border: 5px solid ${color.primary};
        /* width: 48% !important; */
      }
    }
  }

  /* Background */

  .bg-primary {
    background-color: ${color.primary} !important;
  }

  .bg-primary-pastel {
    background-color: ${color.pastelprimary} !important;
  }

  .bg-secondary-pastel {
    background-color: ${color.pastelsecondary} !important;
  }

  /* SVG */

  .${prefix}-svg {
    svg {
      fill: ${color.body};
      stroke: ${color.body};
    }
  }

  /* Horizontal Ruler */

  hr {
    background-color: ${color.body};
  }

  &.theme-dark {
    background-color: ${color.darkest} !important;
    color: ${color.white} !important;

    /* Headings */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${color.white} !important;
    }

    /* Paragraph */

    p {
      color: ${color.white} !important;
    }

    /* Small */

    small {
      color: ${color.white} !important;
    }

    /*********************/
    /***** Utilities *****/
    /*********************/

    /* Navigation */

    header {
      background-color: ${color.black} !important;

      .${prefix}-brand {
        span {
          color: ${color.white} !important;
        }
      }

      .${prefix}-nav {
        a {
          color: ${color.white} !important;
        }
      }

      .${prefix}-separator {
        background-color: ${color.white} !important;
      }

      .${prefix}-languages {
        a {
          border-bottom: 2px solid ${color.transparent};
          color: ${color.white};

          &.active,
          &:hover,
          &:focus {
            border-bottom: 2px solid ${color.secondary};
            color: ${color.white};
          }

          &:visited {
            color: ${color.white};
          }
        }
      }
    }

    /* Gallery */

    .${prefix}-gallery {
      .${prefix}-gallery-item {
        img {
          border: 5px solid ${color.primary};
          /* width: 48% !important; */
        }
      }
    }

    /* Background */

    .bg-primary-pastel {
      background-color: ${color.darker} !important;
    }

    .bg-secondary-pastel {
      background-color: ${color.darker} !important;
    }

    /* SVG */

    .${prefix}-svg {
      svg {
        fill: ${color.white};
        stroke: ${color.white};
      }
    }

    /* Horizontal Ruler */

    hr {
      background-color: ${color.white};
    }
  }

  /*********************/
  /****** Common *******/
  /*********************/

  /* Buttons */

  .btn {
    padding: 0;

    &.btn-airbnb {
      background: ${color.airbnb};
      color: ${color.white};
    }

    &.btn-booking {
      background: ${color.booking};
      color: ${color.white};
    }

    &.btn-airbnb,
    &.btn-booking {
      min-width: 200px;
    }
  }

  /* Header */

  header {
    &.${prefix}-header {
      .${prefix}-nav {
        .${prefix}-link-scroll, .${prefix}-link-gatsby {
          border-bottom: 2px solid ${color.transparent};

          &.active,
          &:focus,
          &:hover {
            border-bottom: 2px solid ${color.secondary};
          }
        }
      }
    }
  }

  /* Mobile navigation */

  .${prefix}-mobile {
    background-color: rgba(33, 37, 41, 0.75);

    .${prefix}-mobile-languages {
      label {
        color: ${color.white};
      }

      a {
        color: ${color.white};

        &:hover,
        &.active {
          color: ${color.secondary};
        }

        &:visited {
          color: ${color.white};
        }
      }
    }

    .${prefix}-mobile-nav {
      a {
        color: ${color.white};

        &:hover,
        &.active {
          color: ${color.secondary};
        }

        &:visited {
          color: ${color.white};
        }
      }
    }
  }

  /* Footer */

  footer {
    &.${prefix}-footer {
      background-color: ${color.darkest} !important;

      .${prefix}-text {
        color: ${color.white} !important;
      }

      .${prefix}-svg {
        svg {
          fill: ${color.white};
          stroke: ${color.white};
        }
      }
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;
