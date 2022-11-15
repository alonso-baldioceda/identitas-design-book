import React, { FC } from "react";
import styled from "styled-components";
import { prefix, sizing } from "./../shared/styles.js";

// Styles
const StyledSVG = styled((props) => <div {...props} />)`
  svg {
    ${(props) =>
      props.size === "extra-small" &&
      `
        height: ${sizing.icon.extraSmall}px;
        width: ${sizing.icon.extraSmall}px;
      `}

    ${(props) =>
      props.size === "small" &&
      `
        height: ${sizing.icon.small}px;
        width: ${sizing.icon.small}px;
      `}

    ${(props) =>
      props.size === "medium" &&
      `
        height: ${sizing.icon.medium}px;
        width: ${sizing.icon.medium}px;
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

const SVG: FC<SVGProps> = ({ icon, size = "medium" }) => {
  return (
    <StyledSVG size={size} className={`${prefix}-svg`}>
      {icon}
    </StyledSVG>
  );
};

export default SVG;
