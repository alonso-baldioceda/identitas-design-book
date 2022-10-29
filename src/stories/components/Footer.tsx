import React, { FC, useState, useContext, useMemo } from "react";
import styled from "styled-components";

// Components
import NavigationAnchorBottom from "./navigationAnchorBottom";

// Contexts
// import Global from "./../contexts/global";

// Asets
import HomeIcon from "./../../images/svg/home.svg";
import EnvelopeIcon from "./../../images/svg/envelope.svg";
import PhoneIcon from "./../../images/svg/phone.svg";

// Types
interface MenuItemProps {
  anchor: string;
  name: string;
  translate: string;
}

interface FooterProps {
  menu: MenuItemProps[];
}

// Styles
const StyledFooter = styled.div`
  /* padding: 2.5rem 0;

  @media (min-width: 768px) {
    padding: 4.5rem 0;
  } */

  svg {
    fill: var(--white);
    height: 30px;
    width: 30px;

    @media (min-width: 768px) {
      height: 32px;
      width: 32px;
    }
  }
`;

const Footer: FC<FooterProps> = ({ menu }) => {
  //   const context = useContext(Global);

  //   const { menu, setActive } = context;

  const [active, setActive] = useState(-1);

  const renderNavigation = useMemo(() => {
    return menu.map((menuItem: MenuItemProps, menuIndex: number) => {
      const isLast = menu.length !== menuIndex + 1;

      return (
        <NavigationAnchorBottom
          item={menuItem}
          to={`/${menuItem.anchor}`}
          index={menuIndex}
          stripHash
          onAnchorLinkClick={() => {
            setActive !== undefined && setActive(menuIndex);
          }}
          isLast={isLast}
          key={`nav-${menuIndex}`}
        >
          {menuItem.translate}
        </NavigationAnchorBottom>
      );
    });
  }, [menu]);

  return (
    <StyledFooter className="py-3 py-md-5 text-center text-lg-start bg-gun-powder text-muted">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-12 col-md-6 mx-auto text-start">
              <h2 className="text-white mb-4 mb-lg-5">Enlaces</h2>
              {renderNavigation}
            </div>
            <div className="col-10 col-sm-12 col-md-6 mx-auto mt-5 mt-md-0 text-start">
              <h2 className="text-white mb-4 mb-lg-5">Contáctenos</h2>
              <p className="text-white mb-3 d-flex align-items-center">
                <HomeIcon className="me-3" /> Costa Rica, Guanacaste, Río
                Piedras, Tilarán.
              </p>
              <p className="text-white mb-3 d-flex align-items-center">
                <EnvelopeIcon className="me-3" />
                vistalagoarenal@gmail.com
              </p>
              <p className="text-white mb-0 d-flex align-items-center">
                <PhoneIcon className="me-3" /> +(506) 8327 4040
              </p>
            </div>
          </div>
        </div>
      </section>
    </StyledFooter>
  );
};

export default Footer;
