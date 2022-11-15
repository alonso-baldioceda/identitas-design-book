import React, { useContext, FC, useMemo, useCallback, ReactNode } from "react";
import styled from "styled-components";
import { prefix, color } from "./../shared/styles.js";

// Components
import Brand, { BrandProps } from "./../components/Brand";
import LanguageSelector from "./../components/LanguageSelector";
import Link, { Types as LinkTypes } from "./../components/Link";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Assets
// TODO: we can eventually move this icon to props
import PhoneIcon from "./../../images/svg/call.svg";
import { type } from "os";

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

    .side-left,
    .side-right {
      .nav-item {
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

      svg {
        height: 26px;
        transition: all 0.125s !important;
        vertical-align: top;
        width: 26px;

        &:hover {
          fill: red;
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

const StyledSocial = styled.a`
  color: transparent;
  font-size: 0;
  height: 26px;
  line-height: 0;
  margin-right: 0.5rem;
  width: 26px;

  @media (min-width: 1200px) {
    margin-right: 1.25rem;
  }

  &:last-of-type {
    margin-right: calc(40px + 0.5rem);

    @media (min-width: 768px) {
      margin-right: calc(40px + 0.75rem);
    }

    @media (min-width: 1200px) {
      margin-right: 0;
    }
  }
`;

// Types
interface MenuItemProps {
  anchor: string;
  type: string;
  text: string;
}

export interface SocialProps {
  text: string;
  url: string;
  icon: ReactNode;
}

interface HeaderProps {
  brand: BrandProps;
  languagesList: string[];
  navigation: MenuItemProps[];
  phone?: string;
  phoneIcon?: ReactNode;
  socials: SocialProps[];
}

const Header: FC<HeaderProps> = ({
  brand,
  languagesList = ["es"],
  navigation,
  phone,
  phoneIcon = PhoneIcon,
  socials,
}) => {
  //   const { t } = useTranslation();

  //   const context = useContext(GlobalContext);

  //   const { menu, active, setActive, facebook, instagram, phoneRef } = context;

  const renderNavigation = useMemo(() => {
    const nav = navigation.map((menuItem: MenuItemProps, index: number) => {
      return (
        <li className="nav-item" key={`horizontal-nav-${index}`}>
          <Link
            text={menuItem.text}
            type={
              menuItem.type && menuItem.type === LinkTypes.Link
                ? LinkTypes.Link
                : LinkTypes.Anchor
            }
            to={`${
              menuItem.type === "link"
                ? `/${menuItem.anchor}`
                : `${menuItem.anchor}`
            }`}
          />
        </li>
      );
    });

    return (
      <ul className="nav justify-content-center d-none d-xl-flex">{nav}</ul>
    );
  }, [navigation]);

  // const renderNavigation = () =>
  //   navigation.map((menuItem: MenuItemProps, index: number) => (
  //     <li className="nav-item" key={`horizontal-nav-${index}`}>
  //       <Link
  //         text={menuItem.text}
  //         type={
  //           menuItem.type && menuItem.type === LinkTypes.Link
  //             ? LinkTypes.Link
  //             : LinkTypes.Anchor
  //         }
  //         to={`${
  //           menuItem.type === "link"
  //             ? `/${menuItem.anchor}`
  //             : `${menuItem.anchor}`
  //         }`}
  //       />
  //     </li>
  //   ));

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
                {/* <ul className="nav justify-content-center d-none d-xl-flex"> */}
                {renderNavigation}
                {/* </ul> */}
              </div>
              <div className="d-flex justify-content-end align-items-center side-right">
                <div className="d-none d-xl-inline">
                  <LanguageSelector
                    languagesList={languagesList ? languagesList : ["es"]}
                  />
                </div>
                {phone && (
                  <>
                    <StyledPhone href={`tel:${phone}`}>{phoneIcon}</StyledPhone>
                    <StyledSeparator />
                  </>
                )}
                {socials && (
                  <div className="social">
                    {/* TODO: create component for this (ButtonCircle) */}
                    {socials.map((social: SocialProps, index: number) => (
                      <StyledSocial
                        href={social.url}
                        target="_blank"
                        key={`social-${index}`}
                      >
                        {social.text}
                        {social.icon}
                      </StyledSocial>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
