import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles.js";

// Components
import SVG from "../../components/SVG";

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

      p {
        color: ${(props) => props.theme.colors.white} !important;
        margin-bottom: 0;
        text-decoration: none;
      }
    }
  }
`;

// Interfaces
interface itemsProps {
  classes?: string;
  icon: ReactElement;
  size?: string;
  text: string;
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
          <p>{contactItem.text}</p>
        </div>
      </li>
    ))}
  </StyledContact>
);

export default Nav;
