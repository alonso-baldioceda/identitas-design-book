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
    background: transparent;
    border-bottom: 2px solid transparent;
    color: ${color.white};
    display: inline-block;
    font-size: 22px;
    font-weight: 500;
    padding: 0;
    text-decoration: none;
    transition: all 0.5s ease;

    &:hover {
      border-bottom: 2px solid blue;
      color: red;
      text-decoration: none;
    }

    &:visited {
      color: ${color.white} !important;
    }

    &:focus {
      outline: none;
    }

    &.active {
      border-bottom: 2px solid red;
      color: ${color.white} !important;
    }
  }
`;

// Interfaces
interface MobileNavProps {
  // isOpen?: boolean;
  linkMb?: number;
  navigation: Link[];
}

const MobileNav: FC<MobileNavProps> = ({ linkMb = 2, navigation }) => (
  <StyledMobileNav>
    {navigation.map((navItem: Link, index: number) => (
      <li key={index} className={`mb-${linkMb}`}>
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
