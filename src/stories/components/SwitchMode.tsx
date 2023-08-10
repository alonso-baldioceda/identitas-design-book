import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles";
import classnames from "classnames";

// Components
import SVG from "./../components/SVG";

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

    .moon-icon {
      opacity: 0;
      stroke: none;
    }

    .sun-icon {
      fill: transparent;
      opacity: 1;
    }
  }

  &.is-dark {
    svg {
      .moon-icon {
        opacity: 1;
      }

      .sun-icon {
        opacity: 0;
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
  ariaLabel?: string;
}

const SwitchMode: FC<SwitchModeProps> = ({
  classes,
  isDark,
  setIsDark,
  size,
  ariaLabel,
}) => (
  <StyledSwitchMode
    className={classnames(
      { [`${classes}`]: classes },
      { "is-dark": isDark },
      `${prefix}-swith-mode`
    )}
    aria-label={ariaLabel ? ariaLabel : "Switch mode"}
    onClick={() => {
      setIsDark && setIsDark(isDark ? false : true);
    }}
  >
    <SVG icon="darkModeSwitch" size={size ? size : "xs"} />
  </StyledSwitchMode>
);

export default SwitchMode;
