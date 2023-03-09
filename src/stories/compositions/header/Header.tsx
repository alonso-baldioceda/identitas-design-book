import React, { FC, useContext } from "react";
import styled from "styled-components";
import classnames from "classnames";

// Compositions
import Brand, { BrandProps } from "@/stories/compositions/header/brand/Brand";
import DesktopLanguages from "@/stories/compositions/header/DesktopLanguages";
import DesktopNav from "@/stories/compositions/header/DesktopNav";
import MenuClose from "@/stories/compositions/header/MenuClose";
import Mobile, { MobileProps } from "@/stories/compositions/header/Mobile";
import Separator, {
  SeparatorProps,
} from "@/stories/compositions/header/Separator";
import Socials from "@/stories/compositions/header/Socials";

// Components
import LinkIcon, { LinkIconProps } from "@/stories/components/LinkIcon";
import SwitchMode from "@/stories/components/SwitchMode";

// Contexts
import LayoutContext, {
  LayoutContextProps,
} from "@/stories/compositions/LayoutContext";

// Types
import Link from "@/shared/interfaces/link";

// Styles
import { prefix } from "@/shared/styles";

const StyledHeader = styled((props) => <header {...props} />)`
  ${(props) =>
    props.minheight &&
    `
      min-height: ${props.minheight};
    `}

  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  display: flex;
  transition: all 0.15s ease;
  width: 100%;
  z-index: 200;

  &.fixed {
    position: fixed;
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
  brand: typeof BrandProps;
  call?: typeof LinkIconProps;
  fixed?: boolean;
  hideCloseFrom?: string;
  hideLanguagesFrom?: string;
  languages: Language[];
  location: string;
  minHeight?: number;
  mobile: typeof MobileProps;
  navigation: (typeof Link)[];
  separator?: typeof SeparatorProps;
  socials?: (typeof LinkIconProps)[];
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
  const { isOpen, isDark, setIsDark } =
    useContext<typeof LayoutContextProps>(LayoutContext);

  const headerMinHeight = minHeight ? minHeight : 84;
  const isFixed = fixed ? fixed.toString() : null;

  const brandProps = { ...brand, location };
  const mobileProps = { ...mobile, isOpen };
  const desktopLanguagesProps = { languages, hideLanguagesFrom };
  const switchModeProps = { isDark, setIsDark };

  return (
    <>
      <StyledHeader
        className={classnames({ fixed: fixed }, `${prefix}-header`)}
        fixed={isFixed}
        minheight={headerMinHeight}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12">
              <StyledNavWrapper>
                <div className="d-flex align-items-center">
                  <Brand {...brandProps} />
                  <DesktopNav navigation={navigation} />
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  <DesktopLanguages {...desktopLanguagesProps} />
                  <Separator {...separator} />
                  {call && <LinkIcon {...call} />}
                  <SwitchMode {...switchModeProps} />
                  <Socials socials={socials} />
                  <MenuClose hideCloseFrom={hideCloseFrom} />
                </div>
              </StyledNavWrapper>
            </div>
          </div>
        </div>
      </StyledHeader>
      <Mobile {...mobileProps} />
    </>
  );
};

export default Header;
