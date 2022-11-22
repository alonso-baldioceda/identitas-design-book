import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Components
import Brand, { BrandProps } from "./Brand";
import Languages from "./Languages";
import LinkIcon, { LinkIconProps } from "./../../components/LinkIcon";
import Nav from "./Nav";
import Separator from "./Separator";

// Types
import Link from "./../../../shared/interfaces/link";

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
  hideFrom: string;
  languages?: string[];
  navigation: Link[];
  call?: LinkIconProps;
  socials?: LinkIconProps[];
}

const Header: FC<HeaderProps> = ({
  brand,
  hideFrom = "xl",
  languages = ["es"],
  navigation,
  call,
  socials,
}) => {
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
                {/* TODO: set control to show languages */}
                {languages && (
                  <div className={`d-none d-${hideFrom}-inline`}>
                    <Languages languages={languages} />
                  </div>
                )}
                {call && <LinkIcon {...call} />}
                <Separator />
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
