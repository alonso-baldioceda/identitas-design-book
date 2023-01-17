import React, { FC } from "react";
import { prefix, color } from "./../../shared/styles.js";

// Components
import ListGroup, { ListGroupProps } from "./../../compositions/ListGroup";
import ButtonLink, { ButtonLinkProps } from "./../../components/ButtonLink";

//Props
export interface BodyProps {
  airbnb?: ButtonLinkProps;
  foreignBackgroundColor?: string;
  list: ListGroupProps["list"];
  preCta?: string | null;
  upfrontBackgroundColor: string;
}

const Body: FC<BodyProps> = ({
  airbnb,
  list,
  preCta,
  upfrontBackgroundColor,
}) => {
  return (
    <div className={`w-100 bg-${upfrontBackgroundColor}`}>
      <div className="px-3 py-5">
        <ListGroup list={list} classes="mb-3 p-0" />
        {preCta && <p className="text-center small mb-2">{preCta}</p>}
        {airbnb && (
          <div className="d-flex justify-content-center">
            <ButtonLink {...airbnb} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
