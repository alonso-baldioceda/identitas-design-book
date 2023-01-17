import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import ListGroup from "./../ListGroup";
import { prefix } from "./../../shared/styles.js";

// Types
import { TextProps } from "./../../components/Text";

// Styles
const StyledContact = styled((props) => <ul {...props} />)`
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;

  li {
    margin: 0 !important;

    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

// Interfaces
interface itemsProps {
  classes?: string;
  svg: ReactElement;
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
