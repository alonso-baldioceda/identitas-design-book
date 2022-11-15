import React, { FC, useContext } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkGatsby } from "gatsby";
import { prefix } from "./../shared/styles.js";
// import classnames from "classnames";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Types
export enum Types {
  Anchor = "anchor",
  Link = "linkn",
}

export interface LinkProps {
  type?: Types;
  activeClass?: string;
  duration?: number;
  index?: number;
  offset?: number;
  smooth?: boolean;
  spy?: boolean;
  text: string;
  to: string;
}

const Link: FC<LinkProps> = ({
  type = "link",
  activeClass,
  duration = 500,
  index,
  offset = -70,
  smooth = true,
  spy = true,
  text,
  to,
}) => {
  //   const context = useContext(GlobalContext);

  //   const { active, setActive } = context;

  // TODO: handle active on both cases
  // TODO: create storybook for this component
  return (type as Types) === Types.Link ? (
    <LinkGatsby to={to} className={`${prefix}-link-gatsby`} />
  ) : (
    <LinkScroll
      activeClass="active"
      duration={duration}
      offset={offset}
      smooth={smooth}
      spy={spy}
      to={`${to}`}
      href={`${to}`}
      // index={index}
      className={`${prefix}-link-scroll`}
    >
      {text}
    </LinkScroll>
  );
};

export default Link;
