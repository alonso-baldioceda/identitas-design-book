import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../../shared/styles";

// Components
import Text, { TextProps } from "./../../components/Text";

//Props
export interface HeaderProps {
  text?: TextProps;
  backgroundColor?: string;
}

// Styles
const StyledHeader = styled((props) => <div {...props} />)`
  ${(props) =>
    props.background &&
    `
      background-color: ${props.background};
    `}

  ${(props) =>
    !props.background &&
    `
      background-color: ${color.primary};
    `}

  width: 100%;
`;

const Header: FC<HeaderProps> = ({ text, backgroundColor }) => {
  return (
    <StyledHeader
      className={`text-center ${prefix}-card-header`}
      background={backgroundColor ? backgroundColor : ""}
    >
      <Text
        text={text?.text ? text.text : ""}
        variant={text?.variant ? text.variant : "h3"}
        classes={text?.classes ? text.classes : "mb-0 py-4 text-capitalize"}
      />
    </StyledHeader>
  );
};

export default Header;
