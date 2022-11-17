import React, { useContext, FC, useMemo, useCallback, ReactNode } from "react";
import styled from "styled-components";
import { prefix, color } from "./../shared/styles.js";

// Components
import Brand, { BrandProps } from "./../components/Brand";
import LanguageSelector from "./../components/LanguageSelector";
import LinkGatsby from "./../components/LinkGatsby";
import LinkIcon, { LinkIconProps } from "../components/LinkIcon";
import LinkScroll from "./../components/LinkScroll";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Assets
// TODO: we can eventually move this icon to props
import PhoneIcon from "./../../images/svg/call.svg";

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

    li {
      a {
        border-bottom: 2px solid transparent;
        color: ${color.black};
        display: block;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.6px;
        margin-right: 15px;
        text-decoration: none;

        &.active,
        &:hover,
        &:focus,
        &:visited {
          color: ${color.black} !important;
        }

        &.active,
        &:focus,
        &:hover {
          border-bottom: 2px solid red;
        }

        &:focus {
          outline: none;
        }
      }
    }

    .side-left {
      .nav-item {
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
`;

const StyledPhone = styled.a`
  border-radius: 50%;
  color: transparent;
  display: block;
  font-size: 0;
  line-height: 0;
  text-decoration: none;
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

export enum Types {
  Anchor = "anchor",
  Link = "link",
}

interface HeaderMenuItemProps {
  anchor: string;
  type: string;
  text: string;
}

export interface HeaderProps {
  brand: BrandProps;
  languages: string[];
  navigation: HeaderMenuItemProps[];
  phone?: string;
  phoneIcon?: ReactNode;
  socials: LinkIconProps[];
}

const Header: FC<HeaderProps> = ({
  brand,
  languages = ["es"],
  navigation,
  phone,
  phoneIcon = PhoneIcon,
  socials,
}) => {
  //   const { t } = useTranslation();

  //   const conte: useContext(GlobalContext);

  //   const { menu, active, setActive, facebook, instagram, phoneRef } = context;

  const renderNavigation = useMemo(() => {
    const nav = navigation.map(
      (navItem: HeaderMenuItemProps, index: number) => {
        return (
          <li key={`horizontal-nav-${index}`}>
            {navItem.type && navItem.type === Types.Link ? (
              <LinkGatsby text={navItem.text} to={navItem.anchor} />
            ) : (
              <LinkScroll text={navItem.text} to={navItem.anchor} />
            )}
          </li>
        );
      }
    );

    return (
      <ul className="nav justify-content-center d-none d-xl-flex">{nav}</ul>
    );
  }, [navigation]);

  return (
    <StyledHeader className={`${prefix}-header`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between nav-wrapper">
              <div className="d-flex align-items-center side-left">
                <Brand {...brand} />
                {/* TODO: create NavHeader */}
                {/* TODO: posibly add a better hover effect */}
                {renderNavigation}
              </div>
              <div className="d-flex justify-content-end align-items-center side-right">
                <div className="d-none d-xl-inline">
                  <LanguageSelector
                    languages={languages ? languages : ["es"]}
                  />
                </div>
                {phone && (
                  <>
                    <StyledPhone href={`tel:${phone}`}>{phoneIcon}</StyledPhone>
                    <StyledSeparator />
                  </>
                )}
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
