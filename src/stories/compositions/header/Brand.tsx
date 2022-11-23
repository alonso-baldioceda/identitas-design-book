import React, { FC, ReactNode, useContext } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";
import { Link } from "gatsby";
// import { animateScroll as scroll } from "react-scroll";
// import classnames from "classnames";

// Components
import SVG from "./../../components/SVG";

// Contexts
// import LayoutContext from "./../compositions/LayoutContext";

// Assets
import LogoIcon from "./../../../images/svg/logo-black.svg";

// Styles
const StyledBrand = styled((props) => <Link {...props} />)`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 12px 0;
  text-decoration: none;

  /* TODO: probably we will need to use the background image approach if want "hover" state */
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
  // duration: number;
  fontWeight: number;
  logoMarginRight: number;
  // offset: number;
  // smooth: boolean;
  // spy: boolean;
  svg: ReactNode;
  text: string;
  to: string;
}

const Brand: FC<BrandProps> = ({
  // duration = 500,
  fontWeight = 700,
  logoMarginRight = 3,
  // offset = -60,
  // smooth = true,
  // spy = true,
  svg,
  text = "",
  to = "",
}) => {
  // const { active, setActive } = useContext(LayoutContext);

  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  //   setActive && setActive(0);
  // };

  // TODO: handle active on both cases

  return (
    <StyledBrand
      className={`me-${logoMarginRight} ${prefix}-brand`}
      // duration={duration}
      fontWeight={fontWeight}
      // offset={offset}
      // onClick={scrollToTop}
      // smooth={smooth}
      // spy={spy}
      text={text}
      to={to}
      // activeClass="brand-active"
    >
      {/* TODO: move this to SVG component */}
      <SVG icon={svg} size="medium" />
      <span>{text}</span>
    </StyledBrand>
  );
};

export default Brand;