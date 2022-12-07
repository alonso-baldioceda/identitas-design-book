import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";
import classnames from "classnames";

// Components
import SVG from "./../components/SVG";

// Constants
import Size from "./../../shared/enums/size.ts";

// Assets
import DarkMode from "./../../images/svg/dark-mode.svg";

// Styles
const StyledSwitchMode = styled((props) => <button {...props} />)`
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  -webkit-font-smoothing: inherit;
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
  line-height: normal;
  margin: 0;
  overflow: visible;
  padding: 0;
  width: auto;

  width: 32px;
  height: 32px;
  /* background-color: red; */

  svg {
    transition: stroke var(--transition-duration);
    stroke: #000;

    /* path {
      fill: #000;
    } */
  }

  .moon-icon {
    opacity: 0;
    stroke-dasharray: 0px 1px;
    transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
  }

  .sun-icon {
    opacity: 1;
    stroke-dasharray: 1px 1px;
    transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in;
  }

  &.is-dark {
    .moon-icon {
      opacity: 1;
      stroke-dasharray: 1px 1px;
    }

    &.sun-icon {
      opacity: 0;
      stroke-dasharray: 0px 1px;
    }
  }
`;

// Types
interface SwitchModeProps {
  isDark?: boolean;
  size?: string;
}

const SwitchMode: FC<SwitchModeProps> = ({ isDark, size }) => {
  return (
    <StyledSwitchMode
      className={classnames(`${prefix}-swith-mode`, { "is-dark": isDark })}
    >
      <SVG icon={<DarkMode />} size={size ? size : Size.xs} />
    </StyledSwitchMode>
  );
};

export default SwitchMode;
