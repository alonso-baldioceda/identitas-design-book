import React, { FC } from "react";
import styled from "styled-components";

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
interface TextProps {
  text: string;
  color?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "small"
    | "label";
  classes?: string;
  noWrap?: boolean;
}

const Text: FC<TextProps> = ({ variant, color, classes, noWrap, text }) => {
  return (
    <Container
      as={variant}
      className={`${classes ? classes : ""} ${noWrap ? "text-nowrap" : ""}`}
      color={color}
    >
      {text}
    </Container>
  );
};

export default Text;
