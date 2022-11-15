import React, { FC, useContext } from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkGatsby } from "gatsby";
import { prefix } from "./../shared/styles.js";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Types
export enum Types {
  Anchor = "anchor",
  Link = "link",
}

export interface LinkProps {
  type?: Types;
  // activeClass?: string;
  duration?: number;
  offset?: number;
  smooth?: boolean;
  spy?: boolean;
  text: string;
  to: string;
}

const Link: FC<LinkProps> = ({
  type,
  // activeClass = "active",
  duration = 500,
  offset = -80,
  smooth = true,
  spy = true,
  text,
  to,
}) => {
  console.log("to ===> ", to, "type ===> ", type);

  //   const context = useContext(GlobalContext);

  //   const { active, setActive } = context;

  // TODO: handle active on both cases
  // TODO: create storybook for this component
  return (type as Types) === Types.Link ? (
    <LinkGatsby to={to} className={`${prefix}-link-gatsby`} type={type}>
      {text}
    </LinkGatsby>
  ) : (
    <LinkScroll
      // activeClass="active"
      duration={duration}
      offset={offset}
      smooth={smooth}
      spy={spy}
      to={to}
      className={`${prefix}-link-scroll`}
    >
      {text}
    </LinkScroll>
  );
};

export default Link;
