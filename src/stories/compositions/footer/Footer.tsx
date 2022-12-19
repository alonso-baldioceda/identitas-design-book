import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import Contact from "./Contact";
import Nav from "./Nav";
import Spacer from "./../../components/Spacer";

// Types
import Link from "./../../../shared/interfaces/link";

// Styles
const StyledFooter = styled((props) => <section {...props} />)`
  ${(props) =>
    props.bgcolor &&
    `
      background: ${props.bgcolor};
    `}

  ${(props) =>
    !props.bgcolor &&
    `
      background: ${props.theme.colors.bgPrimary};
    `}

  h2 {
    color: ${(props) => props.theme.colors.white} !important;
  }
`;

// Types
// TODO: maybe need to move
interface Contact {
  icon: ReactElement;
  iconMe?: number;
  text: string;
  classes?: string;
}

export interface FooterProps {
  navigation: { header: string; list: Link[] };
  contact: { header: string; list: Contact[] };
  bgColor?: string;
}

const Footer: FC<FooterProps> = ({ bgColor, contact, navigation }) => (
  <StyledFooter
    className={`text-center text-lg-start text-muted ${prefix}-footer`}
    bgcolor={bgColor}
  >
    <Spacer>
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-12 col-md-6 mx-auto text-start">
            {/* TODO: pass spacing - maybe using the Text component*/}
            <h2 className="mb-5">{navigation.header}</h2>
            <Nav navigation={navigation.list} />
          </div>
          <div className="col-10 col-sm-12 col-md-6 mx-auto mt-5 mt-md-0 text-start">
            {/* TODO: pass spacing */}
            <h2 className="mb-5">{contact.header}</h2>
            <Contact list={contact.list} />
          </div>
        </div>
      </div>
    </Spacer>
  </StyledFooter>
);

export default Footer;
