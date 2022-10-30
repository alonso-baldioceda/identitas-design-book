import React, { FC, useState, useContext, useMemo, ReactElement } from "react";
import styled from "styled-components";

// Components
import NavigationAnchorBottom from "./NavigationAnchorBottom";
import SVG from "./SVG";

// Contexts
// import Global from "./../contexts/global";

// Styles
const StyledFooter = styled.section`
  svg {
    fill: #fff;
  }

  ul {
    li {
      &:last-of-type {
        margin-bottom: 0 !important;
      }
    }
  }
`;

// Types
interface MenuItemProps {
  anchor: string;
  name: string;
  text: string;
}

interface ContactItemProps {
  icon: ReactElement;
  text: string;
}

interface FooterProps {
  bgColor?: string;
  headerContact: string;
  headerLinks: string;
  menu: MenuItemProps[];
  contact: ContactItemProps[];
}

const Footer: FC<FooterProps> = ({
  bgColor = "dark",
  contact,
  headerContact,
  headerLinks,
  menu,
}) => {
  //   const context = useContext(Global);

  //   const { menu, setActive } = context;

  const [active, setActive] = useState(-1);

  const renderNavigationItems = useMemo(() => {
    return (
      <ul className="list-unstyled list-navigation mb-0">
        {menu.map((menuItem: MenuItemProps, menuIndex: number) => (
          <li className="mb-1 mb-lg-3" key={`navigation-${menuIndex}`}>
            <NavigationAnchorBottom
              to={`/${menuItem.anchor}`}
              index={menuIndex}
              stripHash
              onAnchorLinkClick={() => setActive(menuIndex)}
              text={menuItem.text}
            />
          </li>
        ))}
      </ul>
    );
  }, [menu]);

  const renderContactItems = useMemo(() => {
    return (
      <ul className="list-unstyled list-contact mb-0">
        {contact.map((contactItem: ContactItemProps, menuIndex: number) => (
          <li key={`contact-${menuIndex}`}>
            <p className="text-white mb-3 d-flex align-items-center">
              <span className="me-3">
                <SVG icon={contactItem.icon} size="small" />
              </span>
              {contactItem.text}
            </p>
          </li>
        ))}
      </ul>
    );
  }, [contact]);

  return (
    <StyledFooter
      className={`py-3 py-md-5 text-center text-lg-start text-muted bg-${bgColor}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-12 col-md-6 mx-auto text-start">
            <h2 className="text-white mb-4 mb-lg-5">{headerLinks}</h2>
            {renderNavigationItems}
          </div>
          <div className="col-10 col-sm-12 col-md-6 mx-auto mt-5 mt-md-0 text-start">
            <h2 className="text-white mb-4 mb-lg-5">{headerContact}</h2>
            {renderContactItems}
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
