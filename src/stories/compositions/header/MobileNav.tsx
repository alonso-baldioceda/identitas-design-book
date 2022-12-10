import React, { FC, useContext } from "react";
import styled from "styled-components";
import classnames from "classnames";
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
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  navigation: Link[];
}

const MobileNav: FC<MobileNavProps> = ({ xs, sm, md, lg, xl, navigation }) => {
  const { isOpen, setIsOpen } = useContext(LayoutContext);

  return (
    <StyledMobileNav className={`${prefix}-mobile-nav`}>
      {navigation.map((navItem: Link, index: number) => (
        <li
          key={index}
          className={classnames(
            `mb-${xs ? xs : 0}`,
            `mb-sm-${sm ? sm : 0}`,
            `mb-md-${md ? md : 0}`,
            `mb-lg-${lg ? lg : 0}`,
            `mb-xl-${xl ? xl : 0}`
          )}
        >
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
