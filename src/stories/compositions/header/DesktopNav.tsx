import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import LinkGatsby from "./../../components/LinkGatsby";
import LinkScroll from "./../../components/LinkScroll";

// Contexts
// import LayoutContext from "./../LayoutContext";

// Types
import Link from "./../../../shared/interfaces/link";
import LinkType from "./../../../shared/enums/linkType";

// Styles
const StyledDesktopNav = styled.ul`
  display: none;
  justify-content: center;

  @media (min-width: 1200px) {
    display: flex;
  }

  li {
    a {
      border-bottom: 2px solid ${(props) => props.theme.colors.transparent};
      display: block;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.6px;
      /* TODO: include margin-right into props */
      margin-right: 15px;
      text-decoration: none;

      &.active,
      &:focus,
      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.colors.secondary};
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

// Interfaces
export interface DesktopNavProps {
  navigation: Link[];
}

//  TODO: possibly add a better hover effect */
// TODO: analize including useMemo
const DesktopNav: FC<DesktopNavProps> = ({ navigation }) => (
  <StyledDesktopNav className={`nav ${prefix}-nav`}>
    {navigation.map((navItem: Link, index: number) => (
      <li key={`nav-${index}`}>
        {navItem.type && navItem.type === LinkType.Link ? (
          <LinkGatsby text={navItem.text} to={navItem.anchor} />
        ) : (
          <LinkScroll text={navItem.text} to={navItem.anchor} />
        )}
      </li>
    ))}
  </StyledDesktopNav>
);

export default DesktopNav;
