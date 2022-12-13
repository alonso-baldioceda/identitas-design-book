import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";
import classnames from "classnames";

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
      background-color: ${props.theme.colors.primary};
    `}

  ${(props) =>
    props.bordercolor &&
    `
      border-color: ${props.bordercolor} !important;
    `}

  ${(props) =>
    !props.bordercolor &&
    `
      border-color: ${props.theme.colors.transparent} !important;
    `}

  ${(props) =>
    props.borderradius &&
    `
      border-radius: ${props.borderradius}px;
      border-style: solid;
    `}

    position: absolute;
`;

const Heading = styled((props) => <h1 {...props} />)`
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  margin-bottom: 0;
`;

// Types
interface PanelProps {
  bgColor?: string;
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  colLg?: number;
  colMd?: number;
  color?: string;
  colSm?: number;
  colXl?: number;
  colXs?: number;
  pLg?: number;
  pMd?: number;
  pSm?: number;
  pXl?: number;
  pXs?: number;
  position?: string;
  text: string;
}

const Panel: FC<PanelProps> = ({
  borderColor,
  borderRadius,
  borderWidth,
  bgColor,
  color,
  colXs,
  colSm,
  colMd,
  colLg,
  colXl,
  pXs,
  pSm,
  pMd,
  pLg,
  pXl,
  position,
  text,
}) => (
  <StyledPanel
    className={classnames(
      `border border-${borderWidth ? borderWidth : 0}`,
      `p-${pXs ? pXs : 2}`,
      `p-sm-${pSm ? pSm : 2}`,
      `p-md-${pMd ? pMd : 2}`,
      `p-lg-${pLg ? pLg : 3}`,
      `p-xl-${pXl ? pXl : 3}`,
      `col-${colXs ? colXs : 12}`,
      `col-sm-${colSm ? colSm : 12}`,
      `col-md-${colMd ? colMd : 12}`,
      `col-lg-${colLg ? colLg : 12}`,
      `col-xl-${colXl ? colXl : 12}`,
      { "top-0 start-0": position === "top-start" },
      { "top-0 start-50 translate-middle-x": position === "top-center" },
      { "top-0 end-0": position === "top-end" },
      { "top-50 start-0 translate-middle-y": position === "middle-start" },
      { "top-50 start-50 translate-middle": position === "middle-center" },
      { "top-50 end-0 translate-middle-y": position === "middle-end" },
      { "bottom-0 start-0": position === "bottom-start" },
      { "bottom-0 start-50 translate-middle-x": position === "bottom-center" },
      { "bottom-0 end-0": position === "bottom-end" },
      `${prefix}-panel`
    )}
    bordercolor={borderColor ? borderColor : null}
    borderradius={borderRadius ? borderRadius : null}
    borderwidth={borderWidth ? borderWidth : null}
    bgcolor={bgColor ? bgColor : null}
  >
    <Heading color={color ? color : null}>{text}</Heading>
  </StyledPanel>
);

export default Panel;
