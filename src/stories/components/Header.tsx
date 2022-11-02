import React, { useContext, FC, useMemo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "gatsby";
import classnames from "classnames";

// Components
import Brand from "./brand";
import NavigationAnchorTop from "./navigationAnchorTop";
import LanguageSelector from "./languageSelector";

// Contexts
import GlobalContext from "./../contexts/globalContext";

// Assets
import Call from "./../images/svg/call.svg";
import Instagram from "./../images/svg/instagram.svg";
import Facebook from "./../images/svg/facebook.svg";

// Styles
const Nav = styled.div`
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

// Types
interface IMenuItemProps {
  anchor: string;
  name: string;
  translate: string;
}

const Header: FC = () => {
  const { t } = useTranslation();

  const context = useContext(GlobalContext);

  const { menu, active, setActive, facebook, instagram, phoneRef } = context;

  const languagesList = {
    es: "Esp",
    en: "Eng",
  };

  const renderBrand = useCallback(() => {
    return (
      <Brand
        className="d-flex align-items-center"
        to={`/#topPage`}
        onAnchorLinkClick={() => {
          setActive !== undefined && setActive(-1);
        }}
      />
    );
  }, [setActive]);

  const renderNavigation = useMemo(() => {
    return menu.map((menuItem: IMenuItemProps, menuIndex: number) => {
      return (
        <li className="nav-item" key={`menu-horizontal-nav-${menuIndex}`}>
          <NavigationAnchorTop
            item={menuItem}
            to={`/${menuItem.anchor}`}
            index={menuIndex}
            stripHash
            onAnchorLinkClick={() => {
              setActive !== undefined && setActive(menuIndex);
            }}
            className={classnames("nav-link ", {
              active: menuIndex === active,
            })}
          >
            {t(menuItem.translate)}
          </NavigationAnchorTop>
        </li>
      );
    });
  }, [menu]);

  const renderPhone = useMemo(() => {
    return (
      <a href={`tel:${phoneRef}`} className="phone muted-link">
        <Call />
      </a>
    );
  }, [phoneRef]);

  return (
    <Nav>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between nav-wrapper">
              <div className="d-flex align-items-center left-options">
                {renderBrand()}
                <ul className="nav justify-content-center d-none d-xl-flex">
                  {renderNavigation}
                  <li className="nav-item">
                    <Link
                      className={classnames(
                        "nav-link default-navigation-link text-decoration-none",
                        {
                          active: active === 6,
                        }
                      )}
                      to="/info"
                    >
                      Info
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-end align-items-center right-options">
                <div className="d-none d-xl-inline">
                  <LanguageSelector languagesList={languagesList} />
                </div>
                {renderPhone}
                <span className="separator"></span>
                <a
                  href={instagram}
                  target="_blank"
                  className="muted-link header-social"
                >
                  {t(`followInstagram`)}
                  <Instagram />
                </a>
                <a
                  href={facebook}
                  target="_blank"
                  className="muted-link header-social"
                >
                  {t(`followFacebook`)}
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Header;
