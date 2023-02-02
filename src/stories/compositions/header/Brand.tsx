import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";
import { Link } from "gatsby";
import Text from "./../../components/Text";
// import { animateScroll as scroll } from "react-scroll";
import classnames from "classnames";

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
    ${(props) =>
      props.fw &&
      `
        font-weight: ${props.fw};
      `}

    color: ${color.body};
    font-size: 1.175rem;
    margin-left: 0.375rem;

    @media (min-width: 768px) {
      font-size: 1.375rem;
    }
  }
`;

// TODO: add feature hide name in XS devices
// Types
export interface BrandProps {
  classes?: string;
  // duration: number;
  fontWeight: number;
  hideNameOnMobile?: boolean;
  // offset: number;
  // smooth: boolean;
  // spy: boolean;
  size?: string;
  svg: ReactNode;
  name: string;
  to: string;
}

const Brand: FC<BrandProps> = ({
  classes,
  // duration = 500,
  fontWeight,
  hideNameOnMobile,
  // offset = -60,
  // smooth = true,
  // spy = true,
  size,
  svg,
  name,
  to,
}) => {
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  //   setActive && setActive(0);
  // };

  // TODO: handle active on both cases
  return (
    <StyledBrand
      className={classnames({ [`${classes}`]: classes }, `${prefix}-brand`)}
      // duration={duration}
      fw={fontWeight ? fontWeight : 700}
      // offset={offset}
      // onClick={scrollToTop}
      // smooth={smooth}
      // spy={spy}
      to={to}
    >
      <SVG icon={svg} size={size ? size : Size.sm} />
      {hideNameOnMobile ? <Text text={name} variant="span" /> : null}
    </StyledBrand>
  );
};

export default Brand;
