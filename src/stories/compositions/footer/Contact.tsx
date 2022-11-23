import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Components
import SVG from "../../components/SVG";

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
        fill: ${color.white};
      }

      p {
        color: ${color.white} !important;
        margin-bottom: 0;
        text-decoration: none;
      }
    }
  }
`;

// Interfaces
interface ContactItem {
  icon: ReactElement;
  mb?: number;
  me?: number;
  text: string;
}

export interface NavProps {
  list: ContactItem[];
}

const Nav: FC<NavProps> = ({ list }) => (
  <StyledContact className={`${prefix}-contact`}>
    {list.map((contactItem: ContactItem, index: number) => (
      <li key={index}>
        <div className={`mb-${contactItem.mb ? contactItem.mb : "3"}`}>
          <span className={`me-${contactItem.me ? contactItem.me : "3"}`}>
            <SVG icon={contactItem.icon} size="small" />
          </span>
          <p>{contactItem.text}</p>
        </div>
      </li>
    ))}
  </StyledContact>
);

export default Nav;