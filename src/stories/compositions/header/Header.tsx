import React, { useContext, FC, useMemo, useCallback, ReactNode } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Components
import Brand, { BrandProps } from "../../components/Brand";
import LanguageSelector from "../../components/LanguageSelector";
import LinkIcon, { LinkIconProps } from "../../components/LinkIcon";
import Nav from "./Nav";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Types
import Link from "../../../shared/interfaces/link";

// Styles
const StyledHeader = styled.div`
  /* TODO: replace colors for variables */
  background: ${color.white};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  height: 82px;
  position: fixed;
  width: 100%;
  z-index: 200;

  .nav-wrapper {
    margin: 0 auto;
    max-width: 2200px;
  }
`;

const StyledSeparator = styled.span`
  background: ${color.black};
  height: 44px;
  margin: 0 0.5rem;
  width: 2px;

  @media (min-width: 768px) {
    margin: 0 0.75rem;
  }

  @media (min-width: 1200px) {
    margin: 1.25rem;
  }
`;

// Types
// TODO: move to common types
enum LinkIconSizes {
  xs = "extra-small",
  sm = "small",
  md = "medium",
  lg = "large",
}

// Interfaces
export interface HeaderProps {
  brand: BrandProps;
  languages?: string[];
  navigation: Link[];
  call?: LinkIconProps;
  socials?: LinkIconProps[];
}

const Header: FC<HeaderProps> = ({
  brand,
  languages = ["es"],
  navigation,
  call,
  socials,
}) => {
  //  const conte: useContext(GlobalContext);
  //  const { active, setActive } = context;

  return (
    <StyledHeader className={`${prefix}-header`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between nav-wrapper">
              <div className="d-flex align-items-center">
                <Brand {...brand} />
                <Nav navigation={navigation} />
              </div>
              <div className="d-flex justify-content-end align-items-center">
                {languages && (
                  // TODO: add when to hide to props
                  <div className="d-none d-xl-inline">
                    <LanguageSelector
                      languages={languages ? languages : ["es"]}
                    />
                  </div>
                )}
                {call && <LinkIcon {...call} />}
                <StyledSeparator />
                {socials &&
                  socials.map((social: LinkIconProps, index: number) => (
                    <LinkIcon {...social} key={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
