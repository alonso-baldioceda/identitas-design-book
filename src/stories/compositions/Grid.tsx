import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Styles
const StyledGrid = styled((props) => <div {...props} />)`
  display: grid;
  grid-gap: ${(props) => `${props.gap}px`};
  grid-template-columns: ${(props) => `repeat(${props.xs}, 1fr)`};

  /* Replace px per variables */
  @media (min-width: 576px) {
    grid-template-columns: ${(props) => `repeat(${props.sm}, 1fr)`};
  }

  @media (min-width: 768px) {
    grid-template-columns: ${(props) => `repeat(${props.md}, 1fr)`};
  }

  @media (min-width: 992px) {
    grid-template-columns: ${(props) => `repeat(${props.lg}, 1fr)`};
  }

  @media (min-width: 1200px) {
    grid-template-columns: ${(props) => `repeat(${props.xl}, 1fr)`};
  }
`;

interface GridProps {
  children: ReactNode | ReactNode[];
  gap?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const Grid: FC<GridProps> = ({
  children,
  gap = 30,
  xs = 1,
  sm = 1,
  md = 2,
  lg = 3,
  xl = 4,
}) => (
  <StyledGrid
    gap={gap}
    xs={xs}
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    className={`${prefix}-grid`}
  >
    {children}
  </StyledGrid>
);

export default Grid;
