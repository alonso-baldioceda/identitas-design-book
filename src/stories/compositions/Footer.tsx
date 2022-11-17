import React, { FC, useState, useContext, useMemo, ReactElement } from "react";
import styled from "styled-components";
import { prefix, color } from "./../shared/styles.js";

// Components
import SVG from "./../components/SVG";
import LinkScroll from "./../components/LinkScroll";
import LinkGatsby from "./../components/LinkGatsby";
import Spacer from "./../components/Spacer";

// Contexts
// import Global from "./../contexts/global";

// Styles
const StyledFooter = styled((props) => <section {...props} />)`
  svg {
    fill: ${color.white};
  }

  h2,
  p,
  a {
    ${(props) =>
      props.bgcolor === "dark" &&
      `
        color: ${color.white} !important; 
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
export enum Types {
  Anchor = "anchor",
  Link = "link",
}

interface FooterMenuItemProps {
  anchor: string;
  type: string;
  text: string;
}

interface ContactItemProps {
  icon: ReactElement;
  text: string;
}

export interface FooterProps {
  bgcolor?: string;
  navigation: { header: string; list: FooterMenuItemProps[] };
  contact: { header: string; list: ContactItemProps[] };
}

const Footer: FC<FooterProps> = ({ bgcolor = "dark", contact, navigation }) => {
  //   const context = useContext(Global);

  //   const { menu, setActive } = context;

  // const [active, setActive] = useState(-1);

  const renderNavigationItems = useMemo(() => {
    return (
      <ul className="list-unstyled mb-0">
        {navigation.list.map((navItem: FooterMenuItemProps, index: number) => (
          <li className="mb-3" key={`footer-nav-${index}`}>
            {navItem.type && navItem.type === Types.Link ? (
              <LinkGatsby text={navItem.text} to={navItem.anchor} />
            ) : (
              <LinkScroll text={navItem.text} to={navItem.anchor} />
            )}
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
      className={`text-center text-lg-start text-muted bg-${bgcolor} ${prefix}-footer`}
      bgcolor={bgcolor}
    >
      <Spacer>
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-12 col-md-6 mx-auto text-start">
              <h2 className="mb-5">{navigation.header}</h2>
              {renderNavigationItems}
            </div>
            <div className="col-10 col-sm-12 col-md-6 mx-auto mt-5 mt-md-0 text-start">
              <h2 className="mb-5">{contact.header}</h2>
              {renderContactItems}
            </div>
          </div>
        </div>
      </Spacer>
    </StyledFooter>
  );
};

export default Footer;
