import React, { FC, useState, useContext, useMemo, ReactElement } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Components
import Contact from "./Contact";
import Nav from "./Nav";
import Spacer from "./../../components/Spacer";

// Contexts
// import Global from "./../contexts/global";

// Types
import Link from "./../../../shared/interfaces/link";
import LinkType from "./../../../shared/enums/linkType";

// Styles
const StyledFooter = styled((props) => <section {...props} />)`
  h2 {
    ${(props) =>
      props.bgcolor === "dark" &&
      `
        color: ${color.white} !important; 
      `}
  }
`;

// Types
// TODO: maybe need to move
interface Contact {
  icon: ReactElement;
  iconMe?: number;
  text: string;
}

export interface FooterProps {
  bgcolor?: string;
  navigation: { header: string; list: Link[] };
  // navigation: { header: string; list: any };
  contact: { header: string; list: Contact[] };
}

const Footer: FC<FooterProps> = ({ bgcolor = "dark", contact, navigation }) => {
  // const context = useContext(Global);
  // const { menu, setActive } = context;
  // const [active, setActive] = useState(-1);

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
              <Nav navigation={navigation.list} bgColor={bgcolor} />
            </div>
            <div className="col-10 col-sm-12 col-md-6 mx-auto mt-5 mt-md-0 text-start">
              <h2 className="mb-5">{contact.header}</h2>
              <Contact list={contact.list} bgColor={bgcolor} />
            </div>
          </div>
        </div>
      </Spacer>
    </StyledFooter>
  );
};

export default Footer;
