import React, { useContext, FC, useMemo, useCallback, ReactNode } from "react";
// import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "gatsby";
import classnames from "classnames";

// Components
import Brand, { BrandProps } from "./Brand";
import HeaderNavMainAnchor from "./HeaderNavMainAnchor";
// import LanguageSelector from "./languageSelector";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Styles
const StyledHeader = styled.div`
  background: var(--white);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  height: 82px;
  position: fixed;
  width: 100%;
  z-index: 200;

  .nav-wrapper {
    margin: 0 auto;
    max-width: 2200px;

    .left-options {
      ul {
        li {
          &:last-of-type {
            a {
              padding-right: 0;
            }
          }
        }
      }
    }

    .right-options {
      flex-grow: 1;

      .phone {
        border-radius: 50%;
        display: block;
        height: 32px;
        text-decoration: none;
        width: 32px;

        @media (min-width: 768px) {
          height: 26px;
          width: 26px;
        }

        svg {
          height: 100%;
          transition: all 0.125s !important;
          width: 100%;
        }

        &:hover {
          svg {
            fill: var(--terracotta);
          }
        }
      }
    }
  }
`;

const NavPage = styled((props) => <Link {...props} />)`
  background: transparent;
  border-bottom: 2px solid transparent;
  color: var(--black);
  display: inline-block;
  margin: 0 1.25rem 0 0;
  padding: 0 !important;
  position: relative;
  z-index: 1;

  &.active {
    border-bottom: 2px solid var(--terracotta);
    color: var(--black) !important;
  }

  &:hover {
    border-bottom: 2px solid var(--terracotta);
    color: var(--black) !important;
  }

  &:visited {
    color: var(--black) !important;
  }

  &:focus {
    outline: none;
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

  svg {
    height: 26px;
    transition: all 0.125s !important;
    width: 26px;

    &:hover {
      fill: var(--terracotta);
    }
  }
`;

// Types
interface MenuItemProps {
  anchor: string;
  name: string;
  text: string;
}

interface SocialProps {
  text: string;
  url: string;
  icon: ReactNode;
}

interface HeaderProps {
  brand: BrandProps;
  navigation: MenuItemProps[];
  socials: SocialProps[];
}

const Header: FC<HeaderProps> = ({ brand, navigation, socials }) => {
  //   const { t } = useTranslation();

  //   const context = useContext(GlobalContext);

  //   const { menu, active, setActive, facebook, instagram, phoneRef } = context;

  //   const languagesList = {
  //     es: "Esp",
  //     en: "Eng",
  //   };

  const renderNavigation = useMemo(() => {
    return navigation.map((menuItem: MenuItemProps, menuIndex: number) => {
      return (
        <li className="nav-item" key={`menu-horizontal-nav-${menuIndex}`}>
          <HeaderNavMainAnchor
            className={classnames("nav-link ", {
              // active: menuIndex === active,
            })}
            index={menuIndex}
            text={menuItem.text}
            to={`/${menuItem.anchor}`}
          />
        </li>
      );
    });
  }, [navigation]);

  return (
    <StyledHeader>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between nav-wrapper">
              <div className="d-flex align-items-center left-options">
                <Brand {...brand} />
                <ul className="nav justify-content-center d-none d-xl-flex">
                  {renderNavigation}
                  <li className="nav-item">
                    <NavPage
                      className={classnames("nav-link", {
                        // active: active === 6,
                      })}
                      to="/info"
                    >
                      Info
                    </NavPage>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-end align-items-center right-options">
                {/* <div className="d-none d-xl-inline">
                  <LanguageSelector languagesList={languagesList} />
                </div>
                <a href={`tel:${phoneRef}`} className="phone muted-link">
                    <Call />
                </a> */}
                <span className="separator"></span>
                <div className="social">
                  {socials.map((social) => (
                    <StyledSocial href={social.url} target="_blank">
                      {social.text}
                      {social.icon}
                    </StyledSocial>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
