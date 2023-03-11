import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../../shared/styles";
import classnames from "classnames";

// Styles
const Container = styled.div`
  ${(props) =>
    props.color &&
    `
      color: ${props.color};
    `}
`;

// Types
export interface TextProps {
  classes?: string;
  idFor?: string;
  noWrap?: boolean;
  text: string;
  variant?: string;
}

enum TextEnum {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  span = "span",
  small = "small",
  label = "label",
}

const Text: FC<TextProps> = ({ classes, idFor, noWrap, text, variant }) => (
  <Container
    as={variant ? TextEnum[variant as TextEnum] : "p"}
    className={classnames(
      { [`${classes}`]: classes },
      { "text-nowrap": noWrap },
      `${prefix}-text`
    )}
    htmlFor={idFor ? idFor : ""}
  >
    {text}
  </Container>
);

export default Text;
