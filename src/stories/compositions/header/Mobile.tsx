import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

// Components
import MobileNav from "./MobileNav";
import MobileLaguages from "./MobileLanguages";

// Types
import Link from "./../../../shared/interfaces/link";

// Styles
const StyledMobile = styled.div`
  backdrop-filter: blur(4px);
  bottom: 0;
  display: none;
  left: 0;
  position: fixed;
  right: 0;
  opacity: 0;
  transition: opacity 1.125s ease-in-out !important;
  z-index: 99999;

  &.open {
    display: block !important;
    opacity: 1;
  }
`;

// Types

interface Language {
  name: string;
  classes?: string;
}

export interface MobileProps {
  bgColor?: string;
  classes?: string;
  hideFrom?: string;
  isOpen: boolean;
  languages?: Language[];
  navigation?: Link[];
  separator?: string;
  startingAt?: number;
  translate?: string;
}

const Mobile: FC<MobileProps> = ({
  bgColor,
  classes,
  hideFrom,
  isOpen,
  languages,
  navigation,
  separator,
  startingAt,
  translate,
}) => (
  <StyledMobile
    className={classnames(
      `d-${hideFrom}-none bg-${bgColor}`,
      { [`${classes}`]: classes },
      { open: isOpen },
      `${prefix}-mobile`
    )}
    style={{ top: startingAt ? startingAt : 0 }}
  >
    <MobileNav navigation={navigation ? navigation : []} />
    {/* TODO: replace this for component HR */}
    <hr className={`${separator ? separator : ""}`} />
    <MobileLaguages
      languages={languages ? languages : [{ name: "es", classes: "" }]}
      translate={translate ? translate : ""}
    />
  </StyledMobile>
);

export default Mobile;
