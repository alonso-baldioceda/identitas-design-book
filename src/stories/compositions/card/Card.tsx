import React, { FC } from "react";
import { prefix, color } from "./../../shared/styles.js";
import styled from "styled-components";

// Components
import Body, { BodyProps } from "./Body";
import Header, { HeaderProps } from "./Header";

//Props
interface CardProps {
  border?: number;
  foreignBackgroundColor?: string;
  header: HeaderProps;
  body: BodyProps;
}

const StyledCard = styled((props) => <div {...props} />)`
  ${(props) =>
    props.border &&
    `
      border-color: ${props.border};
    `}

  ${(props) =>
    !props.border &&
    `
      border-color: ${color.primary};
    `}

  border-style: solid;
`;

const Card: FC<CardProps> = ({
  border,
  foreignBackgroundColor,
  header,
  body,
}) => {
  return (
    <StyledCard
      className={`d-flex flex-column align-items-center border-${
        border ? border : 4
      } ${prefix}-card`}
      border={foreignBackgroundColor ? foreignBackgroundColor : ""}
    >
      <Header {...header} />
      <Body {...body} />
    </StyledCard>
  );
};

export default Card;
