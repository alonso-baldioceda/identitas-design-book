import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { spacing } from "./../shared/styles.js";

// Components
import ListGroupItem from "./ListGroupItem";

// Styles
const StyledListGroup = styled((props) => <ul {...props} />)`
  flex-wrap: wrap;

  li {
    ${(props) =>
      props.float === "false" &&
      `
        justify-content: center;
      `}

    ${(props) =>
      props.float === "true" &&
      `
        flex: 0 0 100%;
 
        @media (min-width: 768px) {
          flex: 0 0  50%;
        }

        @media (min-width: 992px) {
          flex: 0 0 33.33333%;
        }

        > div {
          padding-right: ${spacing.padding.medium}px;
        }
      `}
  }
`;

interface ListGroupProps {
  // TODO: remove any
  list: any;
  float?: boolean;
}

const ListGroup: FC<ListGroupProps> = ({ list, float = false }) => (
  <StyledListGroup
    className={classnames("mb-0 p-0 list-unstyled d-flex", {
      "flex-row": float === true,
      "flex-column": float === false,
    })}
    float={float.toString()}
  >
    {/* TODO: remove any */}
    {list.map((item: any, index: number) => (
      <ListGroupItem {...item} key={index} />
    ))}
  </StyledListGroup>
);

export default ListGroup;
