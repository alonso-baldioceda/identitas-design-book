import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../shared/styles.js";

// Styles
const StyledHR = styled((props) => <hr {...props} />)`
  ${(props) =>
    props.color &&
    `
      background-color: ${props.color};
    `}

  ${(props) =>
    !props.color &&
    `
      background-color: ${props.theme.colors.white};
    `}

  ${(props) =>
    props.height &&
    `
      height: ${props.height}px;
    `}

  ${(props) =>
    props.opacity &&
    `
      opacity: ${props.opacity} !important;
    `}
`;

// Types
interface HRProps {
  classes?: string;
  color?: string;
  height?: number;
  opacity?: number;
}

const HR: FC<HRProps> = ({ classes, color, height, opacity }) => (
  <StyledHR
    className={classnames(`${prefix}-hr`, `${classes ? classes : ""}`)}
    color={color ? color : ""}
    height={height ? height : 1}
    opacity={opacity ? opacity : 0}
  />
);

export default HR;
