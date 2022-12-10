import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";
import classnames from "classnames";

// Components
import SVG from "./../components/SVG";

// Constants
import Size from "./../../shared/enums/size.ts";

// Assets
import DarkModeIcon from "./../../images/svg/dark-mode.svg";

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

  svg {
    transition: stroke 400ms;
    stroke: #000;

    .moon-icon {
      opacity: 0;
      stroke-dasharray: 0px 1px;
      transition: stroke-dasharray 0.25s ease-in, opacity 150ms ease-in;
    }

    .sun-icon {
      opacity: 1;
      stroke-dasharray: 1px 1px;
      transition: stroke-dasharray 0.125s ease-in, opacity 300ms ease-in;
      fill: transparent;
    }
  }

  &.is-dark {
    svg {
      .moon-icon {
        opacity: 1;
        stroke-dasharray: 1px 1px;
      }

      .sun-icon {
        opacity: 0;
        stroke-dasharray: 0px 1px;
      }
    }
  }
`;

// Types
interface SwitchModeProps {
  isDark?: boolean;
  me?: number;
  setIsDark?: (isDark: boolean) => void;
  size?: string;
}

const SwitchMode: FC<SwitchModeProps> = ({ isDark, me, setIsDark, size }) => (
  <StyledSwitchMode
    className={classnames(`${prefix}-swith-mode me-${me ? me : 3}`, {
      "is-dark": isDark,
    })}
    onClick={() => {
      setIsDark && setIsDark(isDark ? false : true);
    }}
  >
    <SVG icon={<DarkModeIcon />} size={Size.xs} />
  </StyledSwitchMode>
);

export default SwitchMode;
