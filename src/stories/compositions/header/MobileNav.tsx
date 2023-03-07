import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { prefix } from "./../../../shared/styles.js";

// Components
import LinkGatsby from "./../../components/LinkGatsby";
import LinkScroll from "./../../components/LinkScroll";

// Types
import Link from "./../../../shared/interfaces/link";
import LinkType from "./../../../shared/enums/linkType";

// Styles
const StyledMobileNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  a {
    display: inline-block;
    font-size: 22px;
    font-weight: 500;
    padding: 0;
    text-decoration: none;
    transition: all 0.15s ease;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      outline: none;
    }
  }
`;

// Interfaces
interface MobileNavProps {
  navigation: Link[];
}

const MobileNav: FC<MobileNavProps> = ({ navigation }) => {
  const navigationLinks = useMemo(
    () =>
      navigation.map((navItem: Link, index: number) => (
        <li key={index}>
          {navItem.type && navItem.type === LinkType.Link ? (
            <LinkGatsby
              text={navItem.text}
              to={navItem.anchor}
              classes={navItem.classes ? navItem.classes : ""}
            />
          ) : (
            <LinkScroll
              text={navItem.text}
              to={navItem.anchor}
              classes={navItem.classes ? navItem.classes : ""}
            />
          )}
        </li>
      )),
    [navigation]
  );

  return (
    <StyledMobileNav className={`${prefix}-mobile-nav`}>
      {navigationLinks}
    </StyledMobileNav>
  );
};

export default MobileNav;
