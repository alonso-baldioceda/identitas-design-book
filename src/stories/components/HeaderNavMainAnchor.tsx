import React, { FC, useContext } from "react";
// import { AnchorLink } from "gatsby-plugin-anchor-links"; ---> remover esta librería
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkGatsby } from "gatsby";
// import classnames from "classnames";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Types
export enum Types {
  Anchor = "anchor",
  Link = "linkn",
}

export interface HeaderNavMainAnchorProps {
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

const HeaderNavMainAnchor: FC<HeaderNavMainAnchorProps> = ({
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
  return (type as Types) === Types.Link ? (
    <LinkGatsby to={to} />
  ) : (
    <LinkScroll
      activeClass="active"
      duration={duration}
      offset={offset}
      smooth={smooth}
      spy={spy}
      to={to}
      // index={index}
    >
      {text}
    </LinkScroll>
  );
};

export default HeaderNavMainAnchor;
