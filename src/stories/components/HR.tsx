import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix, color as colors } from "./../shared/styles.js";

// Styles
const StyledHR = styled((props) => <hr {...props} />)`
  ${(props) =>
    props.color &&
    `
      background-color: ${props.color};
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
    className={classnames({ [`${classes}`]: classes }, `${prefix}-hr`)}
    color={color ? color : colors.white}
    height={height ? height : 1}
    opacity={opacity ? opacity : 0}
  />
);

export default HR;
