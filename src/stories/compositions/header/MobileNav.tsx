import React, { FC, useContext } from "react";
import styled from "styled-components";
import { color } from "./../../shared/styles.js";

// Components
import LinkGatsby from "./../../components/LinkGatsby";
import LinkScroll from "./../../components/LinkScroll";

// Contexts
import LayoutContext from "./../LayoutContext";

// Types
import Link from "./../../../shared/interfaces/link";
import LinkType from "./../../../shared/enums/linkType";

// Styles
// TODO: apply theme styles
const StyledMobileNav = styled.ul`
  margin: 0;
  padding: 0;

  a {
    color: ${color.white} !important;
    display: inline-block;
    font-size: 22px;
    font-weight: 500;
    padding: 0;
    text-decoration: none;
    transition: all 0.5s ease;

    &:hover {
      color: red !important;
      text-decoration: none !important;
    }

    &:visited {
      color: ${color.white} !important;
    }

    &:focus {
      outline: none;
    }

    &.active {
      color: yellow !important;
      /* color: ${color.white} !important; */
    }
  }
`;

// Interfaces
interface MobileNavProps {
  linkMb?: number;
  navigation: Link[];
}

const MobileNav: FC<MobileNavProps> = ({ linkMb, navigation }) => {
  const { isOpen, setIsOpen } = useContext(LayoutContext);

  return (
    <StyledMobileNav>
      {navigation.map((navItem: Link, index: number) => (
        <li key={index} className={`mb-${linkMb ? linkMb : 0}`}>
          {navItem.type && navItem.type === LinkType.Link ? (
            <LinkGatsby
              text={navItem.text}
              to={navItem.anchor}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <LinkScroll
              text={navItem.text}
              to={navItem.anchor}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </li>
      ))}
    </StyledMobileNav>
  );
};
export default MobileNav;
