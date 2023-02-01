import React, { FC, useContext } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";
import classnames from "classnames";

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
const StyledHeader = styled((props) => <header {...props} />)`
  &.fixed {
    position: fixed;
  }

  ${(props) =>
    props.bgcolor &&
    `
      background: ${props.bgcolor};
    `}

  align-items: center;
  /* TODO: move shadow to variable */
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  display: flex;
  /* TODO: move transition to variable */
  transition: all 0.15s ease-in-out;
  width: 100%;
  z-index: 200;

  .${prefix}-brand {
    svg {
      path {
        fill: ${color.black};
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

interface Language {
  name: string;
  classes?: string;
}

export interface HeaderProps {
  bgColor?: string;
  brand: BrandProps;
  call?: LinkIconProps;
  hideLanguagesFrom?: string;
  fixed?: boolean;
  languages: Language[];
  minHeight?: number;
  mobile?: MobileProps;
  separator?: SeparatorProps;
  showCall?: boolean;
  showLanguages?: boolean;
  showSocials?: boolean;
  showSwitchMode?: boolean;
  socials?: LinkIconProps[];
  navigation: Link[];
}

const Header: FC<HeaderProps> = ({
  bgColor,
  brand,
  call,
  minHeight,
  hideLanguagesFrom,
  fixed,
  languages,
  mobile,
  navigation,
  separator,
  showCall,
  showLanguages,
  showSocials,
  showSwitchMode,
  socials,
}) => {
  const { isOpen, isDark, setIsDark } = useContext(LayoutContext);

  const mobileProps = { ...mobile, isOpen };

  return (
    <>
      <StyledHeader
        className={classnames({ fixed: fixed }, `${prefix}-header`)}
        style={{ minHeight: minHeight ? minHeight : 84 }}
        bgcolor={bgColor ? bgColor : color.white}
        fixed={fixed ? fixed.toString() : null}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <StyledNavWrapper>
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
                  {(showLanguages || showCall) && <Separator {...separator} />}
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
                  {/* TODO: consider move this to props */}
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
