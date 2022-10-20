import React, { FC } from "react";
import styled from "styled-components";
import { sizing } from "./../shared/styles.js";

// Styles
const StyledSVG = styled((props) => <div {...props} />)`
  svg {
    ${(props) =>
      props.size === "small" &&
      `
        height: ${sizing.icon.small}px;
        width: ${sizing.icon.small}px;
      `}

    ${(props) =>
      props.size === "default" &&
      `
        height: ${sizing.icon.default}px;
        width: ${sizing.icon.default}px;
      `}

    ${(props) =>
      props.size === "large" &&
      `
        height: ${sizing.icon.large}px;
        width: ${sizing.icon.large}px;
      `}
  }
`;

// Types
interface SVGProps {
  icon: any;
  size?: string;
}

const SVG: FC<SVGProps> = ({ icon, size = "default" }) => {
  return <StyledSVG size={size}>{icon}</StyledSVG>;
};

export default SVG;
