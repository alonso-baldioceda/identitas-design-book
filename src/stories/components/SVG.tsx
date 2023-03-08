import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix, sizing } from "./../../shared/styles.js";
import { icons2 } from "./../../shared/icons2";

// Styles
const StyledSVG = styled((props) => <div {...props} />)`
  svg {
    ${(props) =>
      props.color &&
      `
        fill: ${props.color};
      `}

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

    transition: all 0.15s ease;
  }
`;

// Types
export interface SVGProps {
  classes?: string;
  icon: any;
  size?: string;
}

const SVG: FC<SVGProps> = ({ classes, icon, size }) => (
  <StyledSVG
    size={size ? size : "md"}
    className={classnames({ [`${classes}`]: classes }, `${prefix}-svg`)}
  >
    <div dangerouslySetInnerHTML={{ __html: icons2[icon] }} />
  </StyledSVG>
);

export default SVG;
