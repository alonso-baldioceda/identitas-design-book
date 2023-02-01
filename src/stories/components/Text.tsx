import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color as colors } from "./../shared/styles.js";
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
  text: string;
  color?: string;
  variant?: string;
  classes?: string;
  noWrap?: boolean;
}

const Text: FC<TextProps> = ({ variant, color, classes, noWrap, text }) => (
  <Container
    as={variant ? TextEnum[variant as TextEnum] : TextEnum.p}
    className={classnames(
      { [`${classes}`]: classes },
      { "text-nowrap": noWrap },
      `${prefix}-text`
    )}
    color={color ? color : colors.black}
  >
    {text}
  </Container>
);

export default Text;
