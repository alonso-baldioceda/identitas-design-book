import React, { FC, useContext } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import LinkGatsby from "./../../components/LinkGatsby";
import LinkScroll from "./../../components/LinkScroll";

// Contexts
import LayoutContext from "./../LayoutContext";

// Types
import Link from "./../../../shared/interfaces/link";
import LinkType from "./../../../shared/enums/linkType";

// Styles
const StyledMobileNav = styled.ul`
  margin: 0;
  padding: 0;

  a {
    color: ${(props) => props.theme.colors.white} !important;
    display: inline-block;
    font-size: 22px;
    font-weight: 500;
    padding: 0;
    text-decoration: none;
    /* TODO: move to variable */
    transition: all 0.5s ease;

    &:hover {
      color: ${(props) => props.theme.colors.secondary} !important;
      text-decoration: none !important;
    }

    &:visited {
      color: ${(props) => props.theme.colors.white} !important;
    }

    &:focus {
      outline: none;
    }

    &.active {
      color: ${(props) => props.theme.colors.secondary} !important;
    }
  }
`;

// Interfaces
interface MobileNavProps {
  navigation: Link[];
}

const MobileNav: FC<MobileNavProps> = ({ navigation }) => {
  const { isOpen, setIsOpen } = useContext(LayoutContext);

  return (
    <StyledMobileNav className={`${prefix}-mobile-nav`}>
      {navigation.map((navItem: Link, index: number) => (
        <li key={index}>
          {navItem.type && navItem.type === LinkType.Link ? (
            <LinkGatsby
              text={navItem.text}
              to={navItem.anchor}
              onClick={() => setIsOpen(!isOpen)}
              classes={navItem.classes ? navItem.classes : ""}
            />
          ) : (
            <LinkScroll
              text={navItem.text}
              to={navItem.anchor}
              onClick={() => setIsOpen(!isOpen)}
              classes={navItem.classes ? navItem.classes : ""}
            />
          )}
        </li>
      ))}
    </StyledMobileNav>
  );
};

export default MobileNav;
