import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Components

import LinkScroll from "./../../components/LinkScroll";
import LinkGatsby from "./../../components/LinkGatsby";

// Types
import Link from "./../../../shared/interfaces/link";
import LinkType from "./../../../shared/enums/linkType";

// Styles
const StyledNav = styled.ul`
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;

  li {
    &:last-of-type {
      margin-bottom: 0 !important;
    }

    a {
      color: ${color.white} !important;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

// Interfaces
export interface NavProps {
  navigation: Link[];
}

const Nav: FC<NavProps> = ({ navigation }) => {
  const navigationLinks = useMemo(
    () =>
      navigation.map((navItem: any, index: number) => (
        <li key={index}>
          {navItem.type && navItem.type === LinkType.Link ? (
            <LinkGatsby
              text={navItem.text}
              to={navItem.anchor}
              classes={`${navItem.classes ? navItem.classes : ""}`}
            />
          ) : (
            <LinkScroll
              text={navItem.text}
              to={navItem.anchor}
              classes={`${navItem.classes ? navItem.classes : ""}`}
            />
          )}
        </li>
      )),
    [navigation]
  );

  return <StyledNav className={`${prefix}-nav`}>{navigationLinks}</StyledNav>;
};

export default Nav;
