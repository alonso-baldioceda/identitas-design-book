import React, { useContext, FC, useMemo } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Components
import LinkGatsby from "../../components/LinkGatsby";
import LinkScroll from "../../components/LinkScroll";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Styles
const StyledNav = styled.ul`
  display: none;
  justify-content: center;

  @media (min-width: 1200px) {
    display: flex;
  }

  li {
    a {
      border-bottom: 2px solid transparent;
      color: ${color.black};
      display: block;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.6px;
      margin-right: 15px;
      text-decoration: none;

      &.active,
      &:hover,
      &:focus,
      &:visited {
        color: ${color.black} !important;
      }

      &.active,
      &:focus,
      &:hover {
        border-bottom: 2px solid red;
      }

      &:focus {
        outline: none;
      }
    }

    &:last-of-type {
      a {
        margin-right: 0;
      }
    }
  }
`;

// Types
export enum Types {
  Anchor = "anchor",
  Link = "link",
}

interface HeaderMenuItemProps {
  anchor: string;
  type: string;
  text: string;
}

export interface HeaderProps {
  navigation: HeaderMenuItemProps[];
}

//  TODO: possibly add a better hover effect */
const Nav: FC<HeaderProps> = ({ navigation }) => {
  //   const conte: useContext(GlobalContext);
  //   const {  active, setActive } = context;
  // TODO: analize including useMemo
  return (
    <StyledNav className={`nav ${prefix}-nav`}>
      {navigation.map((navItem: HeaderMenuItemProps, index: number) => (
        <li key={`horizontal-nav-${index}`}>
          {navItem.type && navItem.type === Types.Link ? (
            <LinkGatsby text={navItem.text} to={navItem.anchor} />
          ) : (
            <LinkScroll text={navItem.text} to={navItem.anchor} />
          )}
        </li>
      ))}
    </StyledNav>
  );
};

export default Nav;
