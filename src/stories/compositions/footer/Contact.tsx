import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import ListGroup from "./../ListGroup";
import { prefix, color } from "./../../shared/styles.js";

// Types
import { TextProps } from "./../../components/Text";

// Styles
const StyledContact = styled.ul`
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;

  li {
    margin: 0 !important;

    svg {
      fill: ${color.white};
    }
  }
`;

// Interfaces
interface itemsProps {
  classes?: string;
  svg: string;
  size?: string;
  text?: {
    heading: TextProps;
  };
}

export interface NavProps {
  list: itemsProps[];
}

const Nav: FC<NavProps> = ({ list }) => (
  <StyledContact className={`${prefix}-contact`}>
    <ListGroup list={list} />
  </StyledContact>
);

export default Nav;
