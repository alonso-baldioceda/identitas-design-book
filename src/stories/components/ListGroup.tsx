import React, { FC } from "react";
import styled from "styled-components";

// Components
import ListGroupItem from "./ListGroupItem";

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
}

const ListGroup: FC<ListGroupProps> = ({ list, float = false }) => (
  <StyledListGroup className="mb-0 p-0 list-unstyled" float={float.toString()}>
    {/* TODO: remove any */}
    {list.map((item: any, index: number) => (
      <ListGroupItem {...item} key={index} />
    ))}
  </StyledListGroup>
);

export default ListGroup;
