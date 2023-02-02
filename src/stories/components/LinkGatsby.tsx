import React, { FC } from "react";
import { Link } from "gatsby";
import { prefix, color } from "./../shared/styles.js";
import styled from "styled-components";
import classnames from "classnames";

// Styles
const StyledLinkGatsby = styled((props) => <Link {...props} />)`
  color: ${color.body};
  cursor: pointer;

  &.active,
  &:hover,
  &:focus,
  &:visited {
    color: ${(props) => (props.hover ? props.hover : color.body)};
  }
`;

interface LinkGatsbyProps {
  classes?: string;
  hover?: string;
  onClick?: () => void;
  text: string;
  to: string;
}

const LinkGatsby: FC<LinkGatsbyProps> = ({ text, to, hover, classes }) => (
  <StyledLinkGatsby
    to={to}
    hover={hover}
    className={classnames({ [`${classes}`]: classes }, `${prefix}-link-gatsby`)}
  >
    {text ? text : "Link"}
  </StyledLinkGatsby>
);
export default LinkGatsby;
