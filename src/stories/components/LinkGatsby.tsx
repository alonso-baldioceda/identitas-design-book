import React, { FC } from "react";
import { Link } from "gatsby";
import { prefix } from "./../shared/styles.js";
import styled from "styled-components";

// Styles
const StyledLinkGatsby = styled((props) => <Link {...props} />)`
  color: ${(props) => props.theme.colors.body};
  cursor: pointer;

  &.active,
  &:hover,
  &:focus,
  &:visited {
    color: ${(props) => props.theme.colors.body};
  }
`;

interface LinkGatsbyProps {
  text: string;
  to: string;
  onClick?: () => void;
}

const LinkGatsby: FC<LinkGatsbyProps> = ({ text = "gatsby link", to }) => (
  <StyledLinkGatsby to={to} className={`${prefix}-link-gatsby`}>
    {text}
  </StyledLinkGatsby>
);
export default LinkGatsby;
