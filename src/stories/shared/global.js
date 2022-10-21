import { createGlobalStyle, css } from "styled-components";

import { color, typography } from "./styles";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700";

export const bodyStyles = css`
  /* Typography */
  .small {
    font-size: 15px;
  }

  /* General */
  .bg-airbnb {
    background-color: ${color.airbnb} !important;
  }

  .border-airbnb {
    background-color: ${color.airbnb} !important;
  }

  .bg-primary {
    background-color: ${color.primary} !important;
  }

  .border-primary {
    border-color: ${color.primary} !important;
  }

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
