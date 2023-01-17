import React, { FC } from "react";
import styled from "styled-components";

// Types
import TextEnum from "./../../shared/enums/text";

// Styles
const Container = styled.div`
  ${(props) =>
    props.color &&
    `
      color: ${props.color};
    `}

  ${(props) =>
    !props.color &&
    `
      color: ${props.theme.colors.body};
    `}
`;

// Types
export interface TextProps {
  text: string;
  color?: string;
  variant?: string;
  classes?: string;
  noWrap?: boolean;
}

const Text: FC<TextProps> = ({ variant, color, classes, noWrap, text }) => (
  <Container
    as={variant ? TextEnum[variant as TextEnum] : TextEnum.p}
    className={`${classes ? classes : ""} ${noWrap ? "text-nowrap" : ""}`}
    color={color}
  >
    {text}
  </Container>
);

export default Text;
