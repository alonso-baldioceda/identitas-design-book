import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../../../shared/styles";

// Components
import { TextProps } from "./../../../components/Text";
import LinkToPage from "./LinkToPage";
import LinkToScroll from "./LinkToScroll";
import Content from "./Content";
import { SVGProps } from "./../../../components/SVG";

// Styles
const StyledBrand = styled((props) => <div {...props} />)`
  a {
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 12px 0;
    text-decoration: none;

    span {
      font-size: 1.175rem;
      margin-left: 0.375rem;
      transition: all 0.15s ease;

      @media (min-width: 768px) {
        font-size: 1.375rem;
      }
    }
  }
`;

// Types
export interface BrandProps {
  classes?: string;
  showNameOnMobile?: boolean;
  location?: any;
  svg: SVGProps;
  text: TextProps;
  to: string;
}

const Brand: FC<BrandProps> = ({
  classes,
  showNameOnMobile,
  location,
  svg,
  text,
  to,
}) => {
  const content = {
    showNameOnMobile: showNameOnMobile ? showNameOnMobile : true,
    icon: svg,
    text,
  };

  return (
    <StyledBrand
      className={classnames({ [`${classes}`]: classes }, `${prefix}-brand`)}
    >
      {location?.pathname === "/" ? (
        <LinkToScroll to={to}>
          <Content {...content} />
        </LinkToScroll>
      ) : (
        <LinkToPage to={to}>
          <Content {...content} />
        </LinkToPage>
      )}
    </StyledBrand>
  );
};

export default Brand;
