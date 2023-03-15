import React, { FC, useContext } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../../shared/styles";

// Components
import Brand, { BrandProps } from "./brand/Brand";
import LinkIcon, { LinkIconProps } from "./../../components/LinkIcon";
import DesktopNav from "./DesktopNav";
import MenuClose from "./MenuClose";
import Mobile, { MobileProps } from "./Mobile";

// Contexts
import LayoutContext from "./../LayoutContext";

// Types
import Link from "./../../../shared/interfaces/link";

// Styles
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
export interface HeaderProps {
  brand: BrandProps;
  call?: LinkIconProps;
  fixed?: boolean;
  hideCloseFrom?: string;
  location: string;
  minHeight?: number;
  mobile: MobileProps;
  navigation: Link[];
}

const Header: FC<HeaderProps> = ({
  brand,
  call,
  fixed,
  hideCloseFrom,
  location,
  minHeight,
  mobile,
  navigation,
}) => {
  const { isOpen } = useContext(LayoutContext);

  const headerMinHeight = minHeight ? minHeight : 84;
  const isFixed = fixed ? fixed.toString() : null;

  const brandProps = { ...brand, location };
  const mobileProps = { ...mobile, isOpen };
  //   const switchModeProps = { isDark, setIsDark };

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
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  <DesktopNav navigation={navigation} />
                  {/* <SwitchMode {...switchModeProps} /> */}
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
