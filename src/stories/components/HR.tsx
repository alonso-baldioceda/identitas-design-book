import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../shared/styles";

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
      opacity: ${props.opacity};
    `}
`;

// Types
export interface HRProps {
  classes?: string;
  height?: number;
  opacity?: number;
}

const HR: FC<HRProps> = ({ classes, height, opacity }) => (
  <StyledHR
    className={classnames({ [`${classes}`]: classes }, `${prefix}-hr`)}
    height={height ? height : 1}
    opacity={opacity ? opacity : 0}
  />
);

export default HR;
