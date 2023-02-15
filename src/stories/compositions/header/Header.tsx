import React, { FC, useContext } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";
import classnames from "classnames";

// Components
import Brand, { BrandProps } from "./brand/Brand";
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

  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  display: flex;
  transition: all 0.15s ease;
  width: 100%;
  z-index: 200;
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
  brand: BrandProps;
  call?: LinkIconProps;
  fixed?: boolean;
  hideCloseFrom?: string;
  hideLanguagesFrom?: string;
  languages: Language[];
  location: string;
  minHeight?: number;
  mobile?: MobileProps;
  navigation: Link[];
  separator?: SeparatorProps;
  socials?: LinkIconProps[];
}

const Header: FC<HeaderProps> = ({
  brand,
  call,
  fixed,
  hideCloseFrom,
  hideLanguagesFrom,
  languages,
  location,
  minHeight,
  mobile,
  navigation,
  separator,
  socials,
}) => {
  const { isOpen, isDark, setIsDark } = useContext(LayoutContext);

  const mobileProps = { ...mobile, isOpen };

  return (
    <>
      <StyledHeader
        className={classnames({ fixed: fixed }, `${prefix}-header`)}
        style={{ minHeight: minHeight ? minHeight : 84 }}
        fixed={fixed ? fixed.toString() : null}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <StyledNavWrapper>
                <div className="d-flex align-items-center">
                  <Brand {...brand} location={location} />
                  <DesktopNav navigation={navigation} />
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  {languages && (
                    <DesktopLanguages
                      languages={languages}
                      hideLanguagesFrom={hideLanguagesFrom}
                    />
                  )}
                  {separator && <Separator {...separator} />}
                  {call && <LinkIcon {...call} />}
                  <SwitchMode
                    setIsDark={setIsDark}
                    isDark={isDark ? isDark : false}
                  />
                  {socials && (
                    <div className="d-flex">
                      {socials?.map((social: LinkIconProps, index: number) => (
                        <LinkIcon {...social} key={index} />
                      ))}
                    </div>
                  )}
                  <MenuClose hideCloseFrom={hideCloseFrom} />
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
