import React, { FC, useContext } from "react";
// import { AnchorLink } from "gatsby-plugin-anchor-links"; ---> remover esta librería
import { Link } from "react-scroll";
import classnames from "classnames";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Types
export interface HeaderNavMainAnchorProps {
  className?: string;
  //   index: number;
  activeClass?: string;
  duration?: number;
  index: number;
  offset?: number;
  smooth?: boolean;
  spy?: boolean;
  text: string;
  to: string;
}

const HeaderNavMainAnchor: FC<HeaderNavMainAnchorProps> = ({
  activeClass,
  className = "nav-link",
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

  return (
    <Link
      activeClass="active"
      className={classnames(`${className}`, {
        // active: index === active,
      })}
      duration={duration}
      offset={offset}
      smooth={smooth}
      spy={spy}
      to={to}
    >
      {text}
    </Link>
  );
};

export default HeaderNavMainAnchor;
