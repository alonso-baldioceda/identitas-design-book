import React, { FC } from "react";

// Components
import ListGroupItem from "./ListGroupItem";

interface ListGroupProps {
  // TODO: remove any
  list: any;
}

const ListGroup: FC<ListGroupProps> = ({ list }) => (
  <ul className="mb-0 p-0 list-unstyled">
    {/* TODO: remove any */}
    {list.map((item: any, index: number) => (
      <ListGroupItem {...item} key={index} />
    ))}
  </ul>
);

export default ListGroup;
