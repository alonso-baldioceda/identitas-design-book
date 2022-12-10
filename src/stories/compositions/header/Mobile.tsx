import React, { useContext, FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

// Components
import MobileNav from "./MobileNav";
import MobileLaguages from "./MobileLanguages";

// Types
import Link from "./../../../shared/interfaces/link";
import { linkSync } from "fs";

// Styles
const StyledMobile = styled((props) => <div {...props} />)`
  backdrop-filter: blur(4px);
  bottom: 0;
  display: none;
  left: 0;
  position: fixed;
  right: 0;
  opacity: 0;
  /* TODO: move transition to variables  */
  transition: opacity 1.125s ease-in-out !important;
  z-index: 99999;

  &.open {
    display: block !important;
    opacity: 1;
  }

  /* TODO: add divisor color */
  hr {
    background-color: ${(props) => props.theme.colors.white};
  }
`;

// Types
// TODO: Add prop startingAt
export interface MobileProps {
  bgColor?: string;
  hideFrom?: string;
  isOpen: boolean;
  languages?: string[];
  navigation?: Link[];
  px?: number;
  py?: number;
  separator?: number;
  startingAt?: number;
  translate?: string;
  linkSpacing?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

const Mobile: FC<MobileProps> = ({
  bgColor,
  hideFrom,
  isOpen,
  languages,
  linkSpacing,
  navigation,
  px,
  py,
  separator,
  startingAt,
  translate,
}) => (
  <StyledMobile
    className={classnames(
      `d-${hideFrom}-none bg-${bgColor} px-${px ? px : 4} py-${
        py ? py : 4
      } ${prefix}-mobile`,
      { open: isOpen }
    )}
    style={{ top: startingAt ? startingAt : 0 }}
  >
    <MobileNav navigation={navigation ? navigation : []} {...linkSpacing} />
    <hr className={`my-${separator}`} />
    <MobileLaguages
      languages={languages ? languages : []}
      translate={translate ? translate : ""}
    />
  </StyledMobile>
);

export default Mobile;
