import { createGlobalStyle, css } from "styled-components";

// TODO: move global inside theme so we can use theme props

import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700";

export const bodyStyles = css`
  /*********************/
  /***** Typography ****/
  /*********************/

  /* Body */

  background-color: ${color.lightest} !important;
  color: ${color.darkest} !important;
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

  small {
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: 0;
  }

  /*********************/
  /***** Utilities *****/
  /*********************/

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

  &.theme-dark {
    background-color: ${color.darkest} !important;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${color.white} !important;
    }

    p {
      color: ${color.white} !important;
    }

    .bg-primary-pastel {
      background-color: ${color.darker} !important;
    }

    .bg-secondary-pastel {
      background-color: ${color.darker} !important;
    }
  }

  /*********************/
  /***** Components ****/
  /*********************/

  /* Buttons */

  .btn {
    min-width: 200px;

    &.btn-airbnb {
      background: ${color.airbnb};
      color: ${color.white};
    }

    &.btn-booking {
      background: ${color.booking};
      color: ${color.white};
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
