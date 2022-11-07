import React, { useContext, FC, useMemo, useCallback, ReactNode } from "react";
import styled from "styled-components";

// Components
import Brand, { BrandProps } from "./Brand";
import HeaderNavMainAnchor from "./HeaderNavMainAnchor";
// import LanguageSelector from "./languageSelector";

// Contexts
// import GlobalContext from "./../contexts/globalContext";

// Assets
import PhoneIcon from "./../../images/svg/call.svg";

// Styles
const StyledHeader = styled.div`
  background: #fff;
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
        border-bottom: 2px solid transparent;
        color: #000;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.6px;
        margin-right: 15px;
        text-decoration: none;

        &.active,
        &:hover,
        &:focus,
        &:visited {
          color: #000 !important;
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

      svg {
        height: 26px;
        transition: all 0.125s !important;
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
  background: #000;
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

interface SocialProps {
  text: string;
  url: string;
  icon: ReactNode;
}

interface HeaderProps {
  brand: BrandProps;
  navigation: MenuItemProps[];
  phone?: string;
  phoneIcon?: ReactNode;
  socials: SocialProps[];
}

const Header: FC<HeaderProps> = ({
  brand,
  navigation,
  phone,
  phoneIcon = PhoneIcon,
  socials,
}) => {
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
              <div className="d-flex align-items-center side-left">
                <Brand {...brand} />
                <ul className="nav justify-content-center d-none d-xl-flex">
                  {renderNavigation}
                </ul>
              </div>
              <div className="d-flex justify-content-end align-items-center side-right">
                {/* <div className="d-none d-xl-inline">
                  <LanguageSelector languagesList={languagesList} />
                </div>*/}
                {phone && (
                  <>
                    <StyledPhone href={`tel:${phone}`}>{phoneIcon}</StyledPhone>
                    <StyledSeparator />
                  </>
                )}
                {socials && (
                  <div className="social">
                    {socials.map((social) => (
                      <StyledSocial href={social.url} target="_blank">
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
