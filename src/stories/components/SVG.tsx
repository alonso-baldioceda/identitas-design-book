import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { prefix, sizing, color } from "./../shared/styles.js";

// Constants
import Size from "../../shared/enums/size.ts";

// Styles
const StyledSVG = styled((props) => <div {...props} />)`
  svg {
    fill: ${color.black};

    ${(props) =>
      props.size === "xs" &&
      `
        height: ${sizing.icon.extraSmall}px;
        width: ${sizing.icon.extraSmall}px;
      `}

    ${(props) =>
      props.size === "sm" &&
      `
        height: ${sizing.icon.small}px;
        width: ${sizing.icon.small}px;
      `}

    ${(props) =>
      props.size === "md" &&
      `
        height: ${sizing.icon.medium}px;
        width: ${sizing.icon.medium}px;
      `}

    ${(props) =>
      props.size === "lg" &&
      `
        height: ${sizing.icon.large}px;
        width: ${sizing.icon.large}px;
      `}
  }
`;

// Types
interface SVGProps {
  // TODO: probably need to add a type for the classes (to customize the SVG)
  icon: ReactNode;
  size?: string;
}

const SVG: FC<SVGProps> = ({ icon, size }) => (
  <StyledSVG size={size ? size : Size.md} className={`${prefix}-svg`}>
    {icon}
  </StyledSVG>
);

export default SVG;
