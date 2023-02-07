import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import LinkGatsby from "./../../components/LinkGatsby";
import LinkScroll from "./../../components/LinkScroll";

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
      display: block;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.6px;
      text-decoration: none;
      transition: all 0.15s ease;

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

const DesktopNav: FC<DesktopNavProps> = ({ navigation }) => {
  const navigationLinks = useMemo(
    () =>
      navigation.map((navItem: Link, index: number) => (
        <li key={`nav-${index}`}>
          {navItem.type && navItem.type === LinkType.Link ? (
            <LinkGatsby
              text={navItem.text}
              to={`/${navItem.anchor}`}
              classes={navItem.classes ? navItem.classes : ""}
            />
          ) : (
            <LinkScroll
              text={navItem.text}
              to={navItem.anchor}
              classes={navItem.classes ? navItem.classes : ""}
              offset={navItem.offset ? navItem.offset : 0}
              smooth={navItem.smooth ? navItem.smooth : true}
              spy={navItem.spy ? navItem.spy : true}
              duration={navItem.duration ? navItem.duration : 500}
            />
          )}
        </li>
      )),
    [navigation]
  );

  return (
    <StyledDesktopNav className={`nav ${prefix}-nav`}>
      {navigationLinks}
    </StyledDesktopNav>
  );
};

export default DesktopNav;
