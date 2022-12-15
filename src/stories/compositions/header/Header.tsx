import React, { FC, useContext } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import Brand, { BrandProps } from "./Brand";
import DesktopLanguages from "./DesktopLanguages";
import LinkIcon, { LinkIconProps } from "./../../components/LinkIcon";
import DesktopNav from "./DesktopNav";
import Separator, { SeparatorProps } from "./Separator";
import SwitchMode from "./../../components/SwitchMode";
import MenuClose from "./MenuClose";
import Mobile, { MobileProps } from "./Mobile";

// Contexts
import LayoutContext from "./../LayoutContext";

// Types
import Link from "./../../../shared/interfaces/link";

// Styles
const StyledHeader = styled((props) => <div {...props} />)`
  align-items: center;
  background: ${(props) =>
    props.bgcolor ? props.bgcolor : `${props.theme.colors.bgPrimary}`};
  /* TODO: move shadow to variable */
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  display: flex;
  position: fixed;
  /* TODO: move transition to variable */
  transition: all 0.15s ease-in-out;
  width: 100%;
  z-index: 200;

  .${prefix}-brand {
    svg {
      path {
        fill: ${(props) => props.theme.colors.body};
      }
    }
  }
`;

const StyledNavWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 2200px;
`;

// Interfaces
export interface HeaderProps {
  bgColor?: string;
  brand: BrandProps;
  call?: LinkIconProps;
  hideLanguagesFrom?: string;
  languages: string[];
  minHeight?: number;
  mobile?: MobileProps;
  separator?: SeparatorProps;
  showCall?: boolean;
  showLanguages?: boolean;
  showSocials?: boolean;
  showSwitchMode?: boolean;
  socials?: LinkIconProps[];
  nav: {
    links: Link[];
    transform?: "uppercase" | "lowercase" | "capitalize" | "none";
    classes?: string;
  };
}

const Header: FC<HeaderProps> = ({
  bgColor,
  brand,
  call,
  minHeight,
  hideLanguagesFrom,
  // TODO: replace languages for global languages variable
  languages = ["es"],
  mobile,
  nav,
  separator,
  showCall,
  showLanguages = false,
  showSocials,
  showSwitchMode,
  socials,
}) => {
  const { isOpen, isDark, setIsDark } = useContext(LayoutContext);

  const mobileProps = { ...mobile, isOpen };

  return (
    <>
      <StyledHeader
        className={`${prefix}-header`}
        style={{ minHeight: minHeight ? minHeight : 84 }}
        bgcolor={bgColor}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <StyledNavWrapper>
                <div className="d-flex align-items-center">
                  <Brand {...brand} />
                  <DesktopNav
                    navigation={nav.links}
                    transform={nav.transform}
                    classes={nav.classes}
                  />
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  {showLanguages && languages && (
                    <div
                      className={`d-none d-${
                        hideLanguagesFrom ? hideLanguagesFrom : "xl"
                      }-inline`}
                    >
                      <DesktopLanguages languages={languages} />
                    </div>
                  )}
                  {showCall && call && <LinkIcon {...call} />}
                  {(showLanguages || showCall) && <Separator {...separator} />}
                  {showSwitchMode && (
                    <SwitchMode
                      setIsDark={setIsDark}
                      isDark={isDark ? isDark : false}
                      me={2}
                      meSm={2}
                    />
                  )}
                  {showSocials &&
                    socials?.map((social: LinkIconProps, index: number) => (
                      <LinkIcon {...social} key={index} />
                    ))}
                  <div className="d-xl-none d-flex">
                    <MenuClose />
                  </div>
                </div>
              </StyledNavWrapper>
            </div>
          </div>
        </div>
      </StyledHeader>
      {mobileProps && <Mobile {...mobileProps} />}
    </>
  );
};

export default Header;
