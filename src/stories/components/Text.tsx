import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";
import classnames from "classnames";

// Types
import TextEnum from "./../../shared/enums/text";

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
  color?: string;
  idFor?: string;
  noWrap?: boolean;
  text: string;
  variant?: string;
}

const Text: FC<TextProps> = ({
  classes,
  color,
  idFor,
  noWrap,
  text,
  variant,
}) => (
  <Container
    as={variant ? TextEnum[variant as TextEnum] : TextEnum.p}
    className={classnames(
      { [`${classes}`]: classes },
      { "text-nowrap": noWrap },
      `${prefix}-text`
    )}
    color={color ? color : ""}
    htmlFor={idFor ? idFor : ""}
  >
    {text}
  </Container>
);

export default Text;
