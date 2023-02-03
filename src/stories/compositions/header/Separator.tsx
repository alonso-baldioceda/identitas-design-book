import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color as colors } from "./../../shared/styles.js";
import classnames from "classnames";

// Styles
const StyledSeparator = styled((props) => <div {...props} />)`
  ${(props) =>
    props.height &&
    `
      height: ${props.height}px;
    `}

  transition: all 0.15s ease;
  width: 2px;
`;

// Interfaces
export interface SeparatorProps {
  classes?: string;
  color?: string;
  height?: number;
}

const Separator: FC<SeparatorProps> = ({ classes, height }) => (
  <StyledSeparator
    className={classnames({ [`${classes}`]: classes }, `${prefix}-separator`)}
    height={height ? height : 44}
  />
);

export default Separator;
