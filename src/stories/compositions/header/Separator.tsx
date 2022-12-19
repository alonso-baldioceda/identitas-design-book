import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Styles
const StyledSeparator = styled((props) => <div {...props} />)`
  ${(props) =>
    props.color
      ? `background: ${props.color};`
      : `background: ${props.theme.colors.body};`}

  height: ${(props) => (props.height ? props.height : 44)}px;
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
    className={`${classes ? classes : ""} ${prefix}-separator`}
    color={color}
    height={height}
  />
);

export default Separator;
