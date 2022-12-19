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
      background-color: ${props.theme.colors.transparent};
    `}

  ${(props) =>
    props.bordercolor &&
    `
      border-color: ${props.bordercolor};
    `}

  ${(props) =>
    props.borderradius &&
    `
      border-radius: ${props.borderradius}px;
      border-style: solid;
    `}

  ${(props) =>
    props.size &&
    `
       width: ${props.size}%;
    `}

  ${(props) =>
    props.sizesm &&
    `
      @media (min-width: 768px) {
        width: ${props.sizesm}%;
      }
    `}

  ${(props) =>
    props.sizemd &&
    `
      @media (min-width: 992px) {
        width: ${props.sizemd}%;
      }
    `}

  ${(props) =>
    props.sizelg &&
    `
      @media (min-width: 1200px) {
        width: ${props.sizelg}%;
      }
    `}

  ${(props) =>
    props.sizexl &&
    `
      @media (min-width: 1400px) {
        width: ${props.sizexl}%;
      }
    `}

  position: absolute;
`;

const Heading = styled((props) => <h1 {...props} />)`
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  margin-bottom: 0;
`;

// Types
export interface PanelProps {
  bgColor?: string;
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  color?: string;
  size?: number;
  sizeSm?: number;
  sizeMd?: number;
  sizeLg?: number;
  sizeXl?: number;
  pLg?: number;
  pMd?: number;
  pSm?: number;
  pXl?: number;
  pXs?: number;
  mXs?: number;
  mSm?: number;
  mMd?: number;
  mLg?: number;
  mXl?: number;
  position?: string;
  text: string;
}

const Panel: FC<PanelProps> = ({
  borderColor,
  borderRadius,
  borderWidth,
  bgColor,
  color,
  size,
  sizeSm,
  sizeMd,
  sizeLg,
  sizeXl,
  pXs,
  pSm,
  pMd,
  pLg,
  pXl,
  mXs,
  mSm,
  mMd,
  mLg,
  mXl,
  position,
  text,
}) => (
  <StyledPanel
    className={classnames(
      `border border-${borderWidth ? borderWidth : 0}`,
      `p-${pXs ? pXs : 0}`,
      `p-sm-${pSm ? pSm : 0}`,
      `p-md-${pMd ? pMd : 0}`,
      `p-lg-${pLg ? pLg : 0}`,
      `p-xl-${pXl ? pXl : 0}`,
      `m-${mXs ? mXs : 0}`,
      `m-sm-${mSm ? mSm : 0}`,
      `m-md-${mMd ? mMd : 0}`,
      `m-lg-${mLg ? mLg : 0}`,
      `m-xl-${mXl ? mXl : 0}`,
      `${!position && "bottom-0 start-0"}`,
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
    size={size ? size : 100}
    sizesm={sizeSm ? sizeSm : 100}
    sizemd={sizeMd ? sizeMd : 100}
    sizelg={sizeLg ? sizeLg : 50}
    sizexl={sizeXl ? sizeXl : 40}
  >
    {/* TODO: Replace by "Text component" */}
    {/* or even better, to allow a set of subcomponents only */}
    <Heading color={color ? color : null}>{text}</Heading>
  </StyledPanel>
);

export default Panel;
