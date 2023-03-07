import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../../shared/styles.js";
import classnames from "classnames";

// Components
import Text, { TextProps } from "./../../components/Text";

// Styles
const StyledPanel = styled((props) => <div {...props} />)`
  ${(props) =>
    props.bgcolor &&
    `
      background-color: ${props.bgcolor};
    `}

  ${(props) =>
    props.bordercolor &&
    `
      border-color: ${props.bordercolor} !important;
    `}

  ${(props) =>
    props.borderradius &&
    `
      border-radius: ${props.borderradius}px;
      border-style: solid;
    `}

  position: absolute;
`;

// Types
export interface PanelProps {
  bgColor?: string;
  borderColor?: string;
  classes?: string;
  color?: string;
  position?: string;
  text?: TextProps;
}

const Position = (position: string) => {
  switch (position) {
    case "top-start":
      return "top-0 start-0";
    case "top-center":
      return "top-0 start-50 translate-middle-x";
    case "top-end":
      return "top-0 end-0";
    case "middle-start":
      return "top-50 start-0 translate-middle-y";
    case "middle-center":
      return "top-50 start-50 translate-middle";
    case "middle-end":
      return "top-50 end-0 translate-middle-y";
    case "bottom-start":
      return "bottom-0 start-0";
    case "bottom-center":
      return "bottom-0 start-50 translate-middle-x";
    case "bottom-end":
      return "bottom-0 end-0";
    default:
      return "bottom-0 start-0";
  }
};

const Panel: FC<PanelProps> = ({
  borderColor,
  bgColor,
  // color,
  classes,
  position,
  text,
}) => (
  <StyledPanel
    className={classnames(
      { [`${classes}`]: classes },
      `${position ? Position(position) : "bottom-0 start-0"}`,
      `${prefix}-panel`
    )}
    bordercolor={borderColor ? borderColor : null}
    bgcolor={bgColor ? bgColor : color.transparent}
  >
    {text ? <Text {...text} /> : null}
  </StyledPanel>
);

export default Panel;
