import React, { FC, useContext, ReactNode } from "react";
import styled from "styled-components";
import { color } from "./../shared/styles.js";

import { Link } from "react-scroll";
// import classnames from "classnames";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Styles
const StyledBrand = styled((props) => <Link {...props} />)`
  align-items: center;
  display: flex;
  padding: 12px 0;
  text-decoration: none;

  svg {
    height: ${(props) => `${props.logoSize}px !important`};
    margin: 0;
    width: ${(props) => `${props.logoSize}px !important`};
  }

  span {
    color: ${color.black};
    font-size: 1.175rem;
    font-weight: 700;
    margin-left: 0.375rem;

    @media (min-width: 768px) {
      font-size: 1.375rem;
      /* padding-bottom: 0.25rem; */
    }
  }
`;

// Types
export interface BrandProps {
  activeClass?: string;
  duration?: number;
  logoIcon: ReactNode;
  logoMarginRight?: number;
  logoSize?: number;
  offset?: number;
  smooth?: boolean;
  spy?: boolean;
  text: string;
  to: string;
}

const Brand: FC<BrandProps> = ({
  activeClass,
  duration = 500,
  logoIcon,
  logoMarginRight = 3,
  logoSize = 60,
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
    <StyledBrand
      // TODO: should I use activeClass here?
      activeClass={activeClass}
      duration={duration}
      logoIcon={logoIcon}
      logoSize={logoSize}
      offset={offset}
      smooth={smooth}
      spy={spy}
      text={text}
      to={to}
      className={`me-${logoMarginRight}`}
    >
      {logoIcon}
      <span>{text}</span>
    </StyledBrand>
  );
};

export default Brand;
