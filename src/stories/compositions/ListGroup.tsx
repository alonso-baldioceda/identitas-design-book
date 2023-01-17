import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

// Components
import ListGroupItem, {
  ListGroupItemProps,
} from "./../components/ListGroupItem";

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

export interface ListGroupProps {
  list: ListGroupItemProps[];
  float?: boolean;
  classes?: string;
}

const ListGroup: FC<ListGroupProps> = ({ classes, list, float }) => (
  <StyledListGroup
    className={`${classes ? classes : ""} list-unstyled ${prefix}-list-group`}
    float={float ? float.toString() : "false"}
  >
    {list
      ? list.map((item: ListGroupItemProps, index: number) => (
          <ListGroupItem {...item} key={index} />
        ))
      : ""}
  </StyledListGroup>
);

export default ListGroup;
