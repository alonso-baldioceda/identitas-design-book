import React, { FC, useContext } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import Brand, { BrandProps } from "./Brand";
import DesktopLanguages from "./DesktopLanguages";
import LinkIcon, { LinkIconProps } from "./../../components/LinkIcon";
import DesktopNav from "./DesktopNav";
import Separator from "./Separator";
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
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  display: flex;
  position: fixed;
  /* TODO:  */
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
  margin: 0 auto;
  max-width: 2200px;
`;

// Interfaces
export interface HeaderProps {
  bgColor?: string;
  brand: BrandProps;
  call?: LinkIconProps;
  minHeight?: number;
  hideLanguagesFrom?: string;
  languages: string[];
  navigation: Link[];
  showCall?: boolean;
  mobile?: MobileProps;
  showLanguages?: boolean;
  socials?: LinkIconProps[];
  showSocials?: boolean;
  showSwitchMode?: boolean;
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
  navigation,
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
              <StyledNavWrapper className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <Brand {...brand} />
                  <DesktopNav navigation={navigation} />
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
                  {(showLanguages || showCall) && <Separator />}
                  {showSwitchMode && (
                    <SwitchMode
                      setIsDark={setIsDark}
                      isDark={isDark ? isDark : false}
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
