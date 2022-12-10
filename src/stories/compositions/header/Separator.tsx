import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
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
  color?: string;
  height?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Separator: FC<SeparatorProps> = ({
  color,
  height,
  xs,
  sm,
  md,
  lg,
  xl,
}) => {
  return (
    <StyledSeparator
      className={classnames(
        `mx-${xs ? xs : 3}`,
        `mx-sm-${sm ? sm : 3}`,
        `mx-md-${md ? md : 3}`,
        `mx-lg-${lg ? lg : 3}`,
        `mx-xl-${xl ? xl : 3}`,
        `${prefix}-separator`
      )}
      color={color}
      height={height}
    />
  );
};

export default Separator;
