import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import Contact from "./Contact";
import Nav from "./Nav";
import Spacer from "./../../components/Spacer";
import Text from "../../components/Text";

// Types
import LinkProps from "./../../../shared/interfaces/link";
import TextEnum from "./../../../shared/enums/text";

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
interface ContactListItem {
  icon: ReactElement;
  iconMe?: number;
  text?: {
    text: string;
    color?: string;
    variant?: string;
    classes?: string;
    noWrap?: boolean;
  };
  classes?: string;
}

interface HeaderProps {
  text: string;
  color?: string;
  variant?: string;
  classes?: string;
  noWrap?: boolean;
}

export interface FooterProps {
  navigation: { header: HeaderProps; list: LinkProps[] };
  contact: { header: HeaderProps; list: ContactListItem[] };
  bgColor?: string;
  isDark?: boolean;
}

const Footer: FC<FooterProps> = ({ bgColor, contact, isDark, navigation }) => {
  return (
    <StyledFooter className={`text-muted ${prefix}-footer`} bgcolor={bgColor}>
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
