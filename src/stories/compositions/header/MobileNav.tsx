import React, { useContext, FC } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { color } from "./../../shared/styles.js";

// Components
import LinkGatsby from "./../../components/LinkGatsby";
import LinkScroll from "./../../components/LinkScroll";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Types
import Link from "./../../../shared/interfaces/link";
import LinkType from "./../../../shared/enums/linkType";

// Styles
// TODO: apply theme styles
const StyledMobileNav = styled((props) => <motion.ul {...props} />)`
  margin: 0;
  padding: 0;

  a {
    color: ${color.white};
    display: inline-block;
    font-size: 22px;
    font-weight: 500;
    padding: 0;
    text-decoration: none;
    transition: all 0.5s ease;

    &:hover {
      color: red;
      text-decoration: none !important;
    }

    &:visited {
      color: ${color.white} !important;
    }

    &:focus {
      outline: none;
    }

    &.active {
      color: ${color.white} !important;
    }
  }
`;

// Interfaces
interface MobileNavProps {
  // isMenuOpen?: boolean;
  linkMb?: number;
  navigation: Link[];
}

const MobileNav: FC<MobileNavProps> = ({
  // isMenuOpen,
  linkMb,
  navigation,
}) => (
  <StyledMobileNav>
    {navigation.map((navItem: Link, index: number) => (
      <li key={index} className={`mb-${linkMb ? linkMb : 0}`}>
        {navItem.type && navItem.type === LinkType.Link ? (
          <LinkGatsby text={navItem.text} to={navItem.anchor} />
        ) : (
          <LinkScroll text={navItem.text} to={navItem.anchor} />
        )}
      </li>
    ))}
  </StyledMobileNav>
);

export default MobileNav;
