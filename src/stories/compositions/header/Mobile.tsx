import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../../shared/styles.js";

// Components
import MobileNav from "./MobileNav";
import MobileLaguages from "./MobileLanguages";
import { TextProps } from "../../components/Text";
import HR, { HRProps } from "../../components/HR";

// Types
import Link from "./../../../shared/interfaces/link";

// Styles
const StyledMobile = styled.div`
  backdrop-filter: blur(4px);
  bottom: 0;
  display: none;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  transition: opacity 1.125s ease-in-out;
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
  classes?: string;
  hideFrom?: string;
  isOpen: boolean;
  languages?: Language[];
  mobileLanguagesLabel?: TextProps;
  navigation?: Link[];
  separator?: HRProps;
  startingAt?: number;
}

const Mobile: FC<MobileProps> = ({
  classes,
  hideFrom,
  isOpen,
  languages,
  mobileLanguagesLabel,
  navigation,
  separator,
  startingAt,
}) => (
  <StyledMobile
    className={classnames(
      { [`d-${hideFrom}-none`]: hideFrom },
      { "d-md-frrom": !hideFrom },
      { [`${classes}`]: classes },
      { open: isOpen },
      `${prefix}-mobile`
    )}
    style={{ top: startingAt ? startingAt : 0 }}
  >
    <MobileNav navigation={navigation ? navigation : []} />
    <HR {...separator} />
    <MobileLaguages
      languages={languages ? languages : [{ name: "es", classes: "" }]}
      label={mobileLanguagesLabel}
    />
  </StyledMobile>
);

export default Mobile;
