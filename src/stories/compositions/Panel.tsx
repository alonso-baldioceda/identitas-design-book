import React, { FC, ReactNode } from "react";
import classnames from "classnames";
import styled from "styled-components";
import { prefix } from "../../shared/styles";

// Styles
const StyledPanel = styled((props) => <div {...props} />)`
  ${(props) =>
    props.bgcolor &&
    `
      background-color: ${props.bgcolor};
    `}
`;

// Types
export interface PanelProps {
  bgColor?: string;
  classes?: string;
  position?: string;
  children?: ReactNode | ReactNode[];
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

const Panel: FC<PanelProps> = ({ bgColor, classes, position, children }) => (
  <StyledPanel
    bgcolor={bgColor ? bgColor : "transparent"}
    className={classnames(
      { [`${classes}`]: classes },
      `${position ? Position(position) : "bottom-0 start-0"}`,
      `${prefix}-panel`
    )}
  >
    {children}
  </StyledPanel>
);

export default Panel;
