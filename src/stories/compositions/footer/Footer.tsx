import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Components
import Contact from "./Contact";
import Nav from "./Nav";
import Spacer from "./../../components/Spacer";
import Text from "../../components/Text";

// Types
import LinkProps from "./../../../shared/interfaces/link";
import TextEnum from "./../../../shared/enums/text";
import { TextProps } from "./../../components/Text";

// Styles
const StyledFooter = styled((props) => <section {...props} />)`
  ${(props) =>
    props.bgcolor &&
    `
      background: ${props.bgcolor};
    `}

  h2 {
    color: ${color.white} !important;
  }
`;

// Types
// TODO: maybe need to move
interface ContactListItem {
  svg: ReactElement;
  svgSize?: string;
  iconMe?: number;
  text?: {
    heading: TextProps;
  };
  classes?: string;
}

export interface FooterProps {
  navigation: { header: TextProps; list: LinkProps[] };
  contact: { header: TextProps; list: ContactListItem[] };
  bgColor?: string;
  // isDark?: boolean;
}

const Footer: FC<FooterProps> = ({ bgColor, contact, navigation }) => {
  return (
    <StyledFooter
      className={`text-muted ${prefix}-footer`}
      bgcolor={bgColor ? bgColor : color.primary}
    >
      <Spacer>
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-12 col-md-6 mx-auto">
              <Text
                variant={
                  navigation.header.variant
                    ? navigation.header.variant
                    : TextEnum.h2
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
                variant={
                  contact.header.variant ? contact.header.variant : TextEnum.h2
                }
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
