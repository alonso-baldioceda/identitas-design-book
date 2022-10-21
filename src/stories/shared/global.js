import { createGlobalStyle, css } from "styled-components";

import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700";

export const bodyStyles = css`
  /*********************/
  /***** Typography ****/
  /*********************/

  /* Genneral */

  html * {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
  }

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

  /* Other texts */

  p {
    color: ${color.dark};
    font-weight: 400;
  }

  .small {
    font-size: 15px;
  }

  /*********************/
  /***** Utilities *****/
  /*********************/

  /* Background */

  .bg-airbnb {
    background-color: ${color.airbnb} !important;
  }

  .bg-primary {
    background-color: ${color.primary} !important;
  }

  /* Borders */

  .border-airbnb {
    background-color: ${color.airbnb} !important;
  }

  .border-primary {
    border-color: ${color.primary} !important;
  }

  /*********************/
  /***** Components ****/
  /*********************/

  /* Buttons */

  .btn {
    max-width: 260px;
    min-width: 200px;

    &.btn-airbnb {
      background: ${color.airbnb};
      color: ${color.white};
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;
