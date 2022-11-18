import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Styles
const StyledSeparator = styled((props) => <div {...props} />)`
  background: ${color.black};
  height: 44px;
  width: 2px;

  ${(props) => props.xs && `margin: 0 ${props.xs}rem;`}

  /* TODO: move media queries */
  @media (min-width: 576px) {
    ${(props) => props.sm && `margin: 0 ${props.sm}rem;`}
  }

  @media (min-width: 768px) {
    ${(props) => props.md && `margin: 0 ${props.md}rem;`}
  }

  @media (min-width: 992px) {
    ${(props) => props.lg && `margin: 0 ${props.lg}rem;`}
  }

  @media (min-width: 1200px) {
    ${(props) => props.xl && `margin: 0 ${props.xl}rem;`}
  }
`;

// Interfaces
export interface SeparatorProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Separator: FC<SeparatorProps> = ({
  xs = 0.5,
  sm = 0.75,
  md = 0.75,
  lg = 1.25,
  xl = 1.25,
}) => (
  <StyledSeparator
    className={`${prefix}-separator`}
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
  />
);

export default Separator;
