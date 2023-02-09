import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../../shared/styles";

// Components
import { TextProps } from "./../../../components/Text";
import LinkToPage from "./LinkToPage";
import LinkToScroll from "./LinkToScroll";
import LinkContent from "./LinkContent";
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
      ${(props) =>
        props.fw &&
        `
        font-weight: ${props.fw};
      `}

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
  fontWeight: number;
  showNameOnMobile?: boolean;
  location?: any;
  svg: SVGProps;
  text: TextProps;
  to: string;
}

const Brand: FC<BrandProps> = ({
  classes,
  fontWeight,
  showNameOnMobile,
  location,
  svg,
  text,
  to,
}) => {
  const linkContent = {
    showNameOnMobile: showNameOnMobile ? showNameOnMobile : true,
    icon: svg,
    text,
  };

  return (
    <StyledBrand
      className={classnames({ [`${classes}`]: classes }, `${prefix}-brand`)}
      fw={fontWeight ? fontWeight : 700}
    >
      {location?.pathname === "/" ? (
        <LinkToScroll to={to}>
          <LinkContent {...linkContent} />
        </LinkToScroll>
      ) : (
        <LinkToPage to={to}>
          <LinkContent {...linkContent} />
        </LinkToPage>
      )}
    </StyledBrand>
  );
};

export default Brand;