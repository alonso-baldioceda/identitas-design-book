import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import SVG from "../../components/SVG";
import Text from "../../components/Text";

// Types
import Size from "../../../shared/enums/size.ts";

// Styles
const StyledContact = styled((props) => <ul {...props} />)`
  list-style: none;
  margin-bottom: 0;
  padding-left: 0;

  li {
    &:last-of-type {
      margin-bottom: 0 !important;
    }

    div {
      align-items: center;
      display: flex;

      svg {
        fill: ${(props) => props.theme.colors.white};
      }
    }
  }
`;

// Interfaces
interface itemsProps {
  classes?: string;
  icon: ReactElement;
  size?: string;
  text?: {
    text: string;
    color?: string;
    variant?: string;
    classes?: string;
    noWrap?: boolean;
  };
}

export interface NavProps {
  list: itemsProps[];
}

const Nav: FC<NavProps> = ({ list }) => (
  <StyledContact className={`${prefix}-contact`}>
    {/* TODO: use ListGroup instead of this */}
    {list.map((contactItem: itemsProps, index: number) => (
      <li key={index}>
        <div className={`${contactItem.classes ? contactItem.classes : ""}`}>
          <span className="me-3">
            <SVG
              icon={contactItem.icon}
              size={contactItem.size ? contactItem.size : Size.xs}
            />
          </span>
          <Text
            text={contactItem.text?.text ? contactItem.text?.text : ""}
            color={contactItem.text ? contactItem.text.color : "#FFFFFF"}
            classes="mb-0"
          />
        </div>
      </li>
    ))}
  </StyledContact>
);

export default Nav;
