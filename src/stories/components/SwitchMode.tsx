import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color } from "./../shared/styles.js";
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
    stroke: ${color.black};

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
  classes?: string;
  setIsDark?: (isDark: boolean) => void;
  size?: string;
}

const SwitchMode: FC<SwitchModeProps> = ({
  classes,
  isDark,
  setIsDark,
  size,
}) => (
  <StyledSwitchMode
    className={classnames(
      { [`${classes}`]: classes },
      { "is-dark": isDark },
      `${prefix}-swith-mode`
    )}
    onClick={() => {
      setIsDark && setIsDark(isDark ? false : true);
    }}
  >
    <SVG icon={<DarkModeIcon />} size={size ? size : Size.xs} />
  </StyledSwitchMode>
);

export default SwitchMode;
