import React, { FC, useContext, ReactNode } from "react";
import styled from "styled-components";
import { prefix, color } from "./../shared/styles.js";
import { Link } from "react-scroll";
// import classnames from "classnames";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Assets
import LogoIcon from "./../../images/svg/logo-black.svg";

// Styles
const StyledBrand = styled((props) => <Link {...props} />)`
  align-items: center;
  display: flex;
  padding: 12px 0;
  text-decoration: none;

  /* TODO: research about how to inject props to SVG */
  svg {
    height: 60px !important;
    margin: 0;
    width: 60px !important;
  }

  span {
    color: ${color.black};
    font-size: 1.175rem;
    font-weight: ${(props) => `${props.fontWeight}`};
    margin-left: 0.375rem;

    @media (min-width: 768px) {
      font-size: 1.375rem;
      margin-bottom: 4px;
    }
  }
`;

// Types
export interface BrandProps {
  duration?: number;
  fontWeight?: number;
  // logoIcon?: ReactNode;
  logoMarginRight?: number;
  // logoSize?: number;
  offset?: number;
  smooth?: boolean;
  spy?: boolean;
  text: string;
  to: string;
}

const Brand: FC<BrandProps> = ({
  duration = 500,
  fontWeight = 700,
  // logoIcon = "",
  logoMarginRight = 3,
  // logoSize = 60,
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
      duration={duration}
      fontWeight={fontWeight}
      // logoIcon={logoIcon}
      // logoSize={logoSize}
      offset={offset}
      smooth={smooth}
      spy={spy}
      text={text}
      to={to}
      className={`me-${logoMarginRight} ${prefix}-brand`}
    >
      <LogoIcon />
      <span>{text}</span>
    </StyledBrand>
  );
};

export default Brand;
