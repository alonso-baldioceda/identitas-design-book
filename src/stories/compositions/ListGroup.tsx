import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

// Components
import ListGroupItem from "./../components/ListGroupItem";

// Styles
const StyledListGroup = styled((props) => <ul {...props} />)`
  display: grid;
  grid-gap: 30px;

  ${(props) =>
    props.float === "true" &&
    `
      grid-template-columns: repeat(1, 1fr);

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
      }
    `}

  ${(props) =>
    props.float === "false" &&
    `
      grid-template-columns: repeat(1, 1fr);

      > li {
        margin: 0 auto;
      }
    `}
`;

interface ListGroupProps {
  // TODO: remove any
  list: any;
  float?: boolean;
  mb?: number;
  p?: number;
}

const ListGroup: FC<ListGroupProps> = ({
  mb = 0,
  p = 0,
  list,
  float = false,
}) => (
  <StyledListGroup
    className={`mb-${mb} p-${p} list-unstyled ${prefix}-list-group`}
    float={float.toString()}
  >
    {/* TODO: remove any */}
    {list.map((item: any, index: number) => (
      <ListGroupItem {...item} key={index} />
    ))}
  </StyledListGroup>
);

export default ListGroup;
