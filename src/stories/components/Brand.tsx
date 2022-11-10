import React, { FC, useContext, ReactNode } from "react";

import { Link } from "react-scroll";
// import classnames from "classnames";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Types

export interface BrandProps {
  activeClass?: string;
  duration?: number;
  logo: ReactNode;
  offset?: number;
  smooth?: boolean;
  spy?: boolean;
  text: string;
  to: string;
}

const Brand: FC<BrandProps> = ({
  activeClass,
  duration = 500,
  logo,
  offset = -70,
  smooth = true,
  spy = true,
  text,
  to,
}) => {
  //   const context = useContext(GlobalContext);

  //   const { active, setActive } = context;

  // TODO: handle active on both cases
  return (
    <Link
      // TODO: should I use activeClass here?
      activeClass={activeClass}
      duration={duration}
      logo={logo}
      offset={offset}
      smooth={smooth}
      spy={spy}
      text={text}
      to={to}
    >
      <span>{logo}</span>
      <span>{text}</span>
    </Link>
  );
};

export default Brand;
