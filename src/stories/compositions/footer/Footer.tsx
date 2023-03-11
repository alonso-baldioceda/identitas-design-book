import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../../shared/styles";

// Components
import Contact from "./Contact";
import Nav from "./Nav";
import Spacer from "./../../components/Spacer";
import Text from "../../components/Text";

// Types
import LinkProps from "./../../../shared/interfaces/link";
import { TextProps } from "./../../components/Text";

// Styles
const StyledFooter = styled((props) => <footer {...props} />)``;

// Types
// TODO: maybe need to move
interface ContactListItem {
  svg: string;
  svgSize?: string;
  iconMe?: number;
  text?: {
    heading: TextProps;
  };
  classes?: string;
}

export interface FooterProps {
  contact: { header: TextProps; list: ContactListItem[] };
  location?: any;
  navigation: { header: TextProps; list: LinkProps[] };
}

const Footer: FC<FooterProps> = ({ contact, navigation, location }) => {
  return (
    <StyledFooter className={`text-muted ${prefix}-footer`}>
      <Spacer>
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-12 col-md-6 mx-auto">
              <Text
                variant={
                  navigation.header.variant ? navigation.header.variant : "h2"
                }
                text={navigation.header.text}
                classes={
                  navigation.header.classes ? navigation.header.classes : ""
                }
              />
              <Nav navigation={navigation.list} />
            </div>
            <div className="col-10 col-sm-12 col-md-6 mx-auto mt-5 mt-md-0">
              <Text
                variant={contact.header.variant ? contact.header.variant : "h2"}
                text={contact.header.text}
                classes={contact.header.classes ? contact.header.classes : ""}
              />
              <Contact list={contact.list} />
            </div>
          </div>
        </div>
      </Spacer>
    </StyledFooter>
  );
};

export default Footer;
