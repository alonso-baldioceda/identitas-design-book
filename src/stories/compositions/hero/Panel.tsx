import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";
import Text from "./../../components/Text";

// Styles
const StyledPanel = styled((props) => <div {...props} />)`
  ${(props) =>
    props.bgcolor &&
    `
      background-color: ${props.bgcolor};
    `}

  ${(props) =>
    !props.bgcolor &&
    `
      background-color: ${props.theme.colors.transparent};
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
  borderRadius?: number;
  borderWidth?: number;
  classes?: string;
  color?: string;
  position?: string;
  text: string;
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
  borderRadius,
  borderWidth,
  bgColor,
  color,
  classes,
  position,
  text,
}) => (
  <StyledPanel
    className={`${classes ? classes : ""} border border-${
      borderWidth ? borderWidth : 0
    } ${position ? Position(position) : "bottom-0 start-0"} ${prefix}-panel`}
    bordercolor={borderColor ? borderColor : null}
    borderradius={borderRadius ? borderRadius : null}
    bgcolor={bgColor ? bgColor : null}
  >
    <Text variant="h1" text={text} color={color ? color : ""} />
  </StyledPanel>
);

export default Panel;
