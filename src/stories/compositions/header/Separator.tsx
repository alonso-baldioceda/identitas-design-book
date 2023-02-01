import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color as colors } from "./../../shared/styles.js";
import classnames from "classnames";

// Styles
const StyledSeparator = styled((props) => <div {...props} />)`
  ${(props) =>
    props.color &&
    `
      background: ${props.color};
    `}

  ${(props) =>
    props.height &&
    `
      height: ${props.height}px;
    `}

  width: 2px;
`;

// Interfaces
export interface SeparatorProps {
  classes?: string;
  color?: string;
  height?: number;
}

const Separator: FC<SeparatorProps> = ({ classes, color, height }) => (
  <StyledSeparator
    className={classnames({ [`${classes}`]: classes }, `${prefix}-separator`)}
    color={color ? color : colors.black}
    height={height ? height : 44}
  />
);

export default Separator;
