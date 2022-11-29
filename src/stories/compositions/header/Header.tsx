import React, { FC, useContext } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Components
import Brand, { BrandProps } from "./Brand";
import DesktopLanguages from "./DesktopLanguages";
import LinkIcon, { LinkIconProps } from "./../../components/LinkIcon";
import DesktopNav from "./DesktopNav";
import Separator from "./Separator";
import MenuClose from "../../components/MenuClose";
import Mobile, { MobileProps } from "./Mobile";

// Contexts
import LayoutContext from "./../LayoutContext";

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

// Interfaces
export interface HeaderProps {
  brand: BrandProps;
  call?: LinkIconProps;
  hideLanguagesFrom: string;
  languages: string[];
  navigation: Link[];
  showCall?: boolean;
  mobile?: MobileProps;
  showLanguages?: boolean;
  socials?: LinkIconProps[];
}

const Header: FC<HeaderProps> = ({
  brand,
  call,
  hideLanguagesFrom = "xl",
  languages = ["es"],
  navigation,
  showCall = false,
  showLanguages = false,
  socials,
}) => {
  const { active, isOpen, setActive, setIsOpen } = useContext(LayoutContext);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledHeader className={`${prefix}-header`}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between nav-wrapper">
                <div className="d-flex align-items-center">
                  <Brand {...brand} />
                  <DesktopNav navigation={navigation} />
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  {showLanguages && languages && (
                    <div className={`d-none d-${hideLanguagesFrom}-inline`}>
                      <DesktopLanguages languages={languages} />
                    </div>
                  )}
                  {showCall && call && <LinkIcon {...call} />}
                  {(showLanguages || showCall) && <Separator />}
                  {socials?.map((social: LinkIconProps, index: number) => (
                    <LinkIcon {...social} key={index} />
                  ))}
                  <div className="d-xl-none d-flex">
                    <MenuClose isOpen={isOpen} setIsOpen={handleIsOpen} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledHeader>
      <Mobile
        isOpen={isOpen}
        bgColor="dark"
        languages={["es", "en"]}
        translate="Idiomas"
        navigation={navigation}
      />
    </>
  );
};

export default Header;
