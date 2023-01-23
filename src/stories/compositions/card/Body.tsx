import React, { FC } from "react";
import styled from "styled-components";
import { prefix, color } from "./../../shared/styles.js";

// Components
import Text, { TextProps } from "./../../components/Text";
import ListGroup, { ListGroupProps } from "./../../compositions/ListGroup";
import ButtonLink, { ButtonLinkProps } from "./../../components/ButtonLink";

//Props
export interface BodyProps {
  airbnb?: ButtonLinkProps;
  booking?: ButtonLinkProps;
  list: ListGroupProps["list"];
  preCta?: TextProps;
  backgroundColor: string;
}

// Styles
const StyledBody = styled((props) => <div {...props} />)`
  ${(props) =>
    props.background &&
    `
      background-color: ${props.background};
    `}

  ${(props) =>
    !props.background &&
    `
      background-color: ${color.transparent};
    `}

  width: 100%;
`;

const Body: FC<BodyProps> = ({
  airbnb,
  booking,
  list,
  preCta,
  backgroundColor,
}) => (
  <StyledBody
    className={`${prefix}-card-body`}
    background={backgroundColor ? backgroundColor : ""}
  >
    <div className="px-3 py-5">
      <ListGroup list={list} classes="mb-3 p-0" />
      {preCta && (
        <Text
          text={preCta.text}
          variant={preCta?.variant ? preCta.variant : ""}
          classes={preCta?.classes ? preCta.classes : ""}
        />
      )}
      {airbnb && (
        <div className="d-flex justify-content-center">
          <ButtonLink {...airbnb} />
        </div>
      )}
      {booking && (
        <div className="d-flex justify-content-center">
          <ButtonLink {...booking} />
        </div>
      )}
    </div>
  </StyledBody>
);

export default Body;
