import React, { FC, ReactNode, useContext } from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Styles
const StyledBrand = styled((props) => <AnchorLink {...props} />)`
  height: 82px;
  text-decoration: none;

  svg {
    height: 60px;
    margin: 0;
    width: 60px;
  }

  span {
    color: var(--black);
    font-size: 1.175rem;
    font-weight: 700;
    margin-left: 0.375rem;
    margin-right: 1.25rem;

    @media (min-width: 768px) {
      font-size: 1.375rem;
      padding-bottom: 0.25rem;
    }
  }
`;

// Types
export interface BrandProps {
  //   onAnchorLinkClick: () => void;
  //   stripHash?: boolean;
  logo: ReactNode;
  text: string;
  to: string;
}

const Brand: FC<BrandProps> = ({
  logo,
  text = "Company name",
  to = "/#topPage",
}) => {
  //   const context = useContext(GlobalContext);

  //   const { setActive } = context;

  return (
    <StyledBrand
      className="d-flex align-items-center"
      to={to}
      onAnchorLinkClick={() => {
        console.log("hi!!");
        // setActive !== undefined && setActive(-1);
      }}
    >
      {logo}
      <span>{text}</span>
    </StyledBrand>
  );
};

export default Brand;
