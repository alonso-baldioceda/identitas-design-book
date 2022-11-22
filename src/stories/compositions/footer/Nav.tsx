import React, { FC, useState, useContext, useMemo } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Components

import LinkScroll from "./../../components/LinkScroll";
import LinkGatsby from "./../../components/LinkGatsby";

// Contexts
// import Global from "./../contexts/global";

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
      color: ${color.white} !important;
    }
  }
`;

// Interfaces
export interface NavProps {
  // bgColor?: string;
  mb?: number;
  navigation: Link[];
}

const Nav: FC<NavProps> = ({ mb, navigation }) => {
  // const context = useContext(Global);
  // const { menu, setActive } = context;

  // TODO: include useMemo
  return (
    <StyledNav className={`${prefix}-nav`}>
      {navigation.map((navItem: any, index: number) => (
        <li key={index} className={`mb-${mb ? mb : "3"}`}>
          {navItem.type && navItem.type === LinkType.Link ? (
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
