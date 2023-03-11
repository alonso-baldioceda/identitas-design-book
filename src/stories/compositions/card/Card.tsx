import React, { FC } from "react";
import { prefix, color } from "./../../../shared/styles";
import styled from "styled-components";

// Components
import Body, { BodyProps } from "./Body";
import Header, { HeaderProps } from "./Header";

//Props
interface CardProps {
  body: BodyProps;
  border?: number;
  borderColor?: string;
  header: HeaderProps;
}

const StyledCard = styled((props) => <div {...props} />)`
  ${(props) =>
    props.border &&
    `
      border-color: ${props.border};
    `}

  ${(props) =>
    props.borderwidth &&
    `
      border-width: ${props.borderwidth}px;
    `}

  border-style: solid;
`;

const Card: FC<CardProps> = ({ border, borderColor, header, body }) => (
  <StyledCard
    className={`d-flex flex-column align-items-center ${prefix}-card`}
    border={borderColor ? borderColor : color.primary}
    borderwidth={border ? border : 1}
  >
    <Header {...header} />
    <Body {...body} />
  </StyledCard>
);

export default Card;
