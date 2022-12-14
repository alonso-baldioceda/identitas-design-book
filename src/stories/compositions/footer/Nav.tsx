import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components

import LinkScroll from "./../../components/LinkScroll";
import LinkGatsby from "./../../components/LinkGatsby";

// Types
import Link from "./../../../shared/interfaces/link";
import LinkType from "./../../../shared/enums/linkType";

// Styles
const StyledNav = styled((props) => <ul {...props} />)`
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;

  li {
    &:last-of-type {
      margin-bottom: 0 !important;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.white} !important;
    }
  }
`;

// Interfaces
export interface NavProps {
  navigation: Link[];
}

const Nav: FC<NavProps> = ({ navigation }) => {
  // TODO: include useMemo
  return (
    <StyledNav className={`${prefix}-nav`}>
      {navigation.map((navItem: any, index: number) => (
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
      ))}
    </StyledNav>
  );
};

export default Nav;
