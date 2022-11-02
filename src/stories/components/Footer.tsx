import React, { FC, useState, useContext, useMemo, ReactElement } from "react";
import styled from "styled-components";

// Components
import FooterNavMainAnchor from "./FooterNavMainAnchor";
import SVG from "./SVG";

// Contexts
// import Global from "./../contexts/global";

// Styles
const StyledFooter = styled((props) => <section {...props} />)`
  svg {
    fill: #fff;
  }

  h2,
  p {
    ${(props) =>
      props.bgcolor === "dark" &&
      `
      color: #fff;
    `}
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
export interface MenuItemProps {
  anchor: string;
  name: string;
  text: string;
}

export interface ContactItemProps {
  icon: ReactElement;
  text: string;
}

interface FooterProps {
  bgcolor?: string;
  navigation: { header: string; list: MenuItemProps[] };
  contact: { header: string; list: ContactItemProps[] };
}

const Footer: FC<FooterProps> = ({ bgcolor = "dark", contact, navigation }) => {
  //   const context = useContext(Global);

  //   const { menu, setActive } = context;

  const [active, setActive] = useState(-1);

  const renderNavigationItems = useMemo(() => {
    return (
      <ul className="list-unstyled mb-0">
        {navigation.list.map((menuItem: MenuItemProps, index: number) => (
          <li className="mb-1 mb-lg-3" key={`navigation-${index}`}>
            <FooterNavMainAnchor
              to={`/${menuItem.anchor}`}
              index={index}
              onAnchorLinkClick={() => setActive(index)}
              text={menuItem.text}
            />
          </li>
        ))}
      </ul>
    );
  }, [navigation.list]);

  const renderContactItems = useMemo(() => {
    return (
      <ul className="list-unstyled mb-0">
        {contact.list.map((contactItem: ContactItemProps, index: number) => (
          <li key={`contact-${index}`}>
            <div className="d-flex align-items-center mb-3">
              <span className="me-3">
                <SVG icon={contactItem.icon} size="small" />
              </span>
              <p className="mb-0">{contactItem.text}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }, [contact.list]);

  return (
    <StyledFooter
      className={`py-3 py-md-5 text-center text-lg-start text-muted bg-${bgcolor}`}
      bgcolor={bgcolor}
    >
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-12 col-md-6 mx-auto text-start">
            <h2 className="mb-4 mb-lg-5">{navigation.header}</h2>
            {renderNavigationItems}
          </div>
          <div className="col-10 col-sm-12 col-md-6 mx-auto mt-5 mt-md-0 text-start">
            <h2 className="mb-4 mb-lg-5">{contact.header}</h2>
            {renderContactItems}
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
