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

// Types
import Size from "./../../../shared/enums/size";

// Styles
const StyledBrand = styled((props) => <Link {...props} />)`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 12px 0;
  text-decoration: none;

  span {
    color: ${color.black};
    font-size: 1.175rem;
    margin-left: 0.375rem;

    ${(props) =>
      props.fontWeight &&
      `
        font-weight: ${props.bgcolor};
      `}

    @media (min-width: 768px) {
      font-size: 1.375rem;
      margin-bottom: 4px;
    }
  }
`;

// TODO: add feature hide name in XS devices
// Types
export interface BrandProps {
  // duration: number;
  fontWeight: number;
  hideNameOnMobile?: boolean;
  logoMarginRight: number;
  // offset: number;
  // smooth: boolean;
  // spy: boolean;
  size?: string;
  svg: ReactNode;
  text: string;
  to: string;
}

const Brand: FC<BrandProps> = ({
  // duration = 500,
  fontWeight = 700,
  hideNameOnMobile,
  logoMarginRight = 3,
  // offset = -60,
  // smooth = true,
  // spy = true,
  size,
  svg,
  text = "",
  to = "",
}) => {
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
      <SVG icon={svg} size={size ? size : Size.sm} />
      {hideNameOnMobile !== false && <span>{text}</span>}
    </StyledBrand>
  );
};

export default Brand;
