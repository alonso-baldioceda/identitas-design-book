import React, { FC } from "react";
import { prefix, color } from "./../shared/styles.js";

// Components
import ListGroup, { ListGroupProps } from "./../compositions/ListGroup";
import ButtonLink, { ButtonLinkProps } from "./../components/ButtonLink";

//Props
interface CardProps {
  border?: number;
  airbnb?: ButtonLinkProps;
  foreignBackgroundColor: string;
  list: ListGroupProps["list"];
  preCta?: string | null;
  title: string;
  upfrontBackgroundColor: string;
}

const Card: FC<CardProps> = ({
  border = 4,
  airbnb,
  foreignBackgroundColor = color.primary,
  list,
  preCta = null,
  title = "title here!!",
  upfrontBackgroundColor = color.transparent,
}) => {
  return (
    <div
      className={`d-flex flex-column align-items-center border border-${border} border-${foreignBackgroundColor} ${prefix}-card`}
    >
      <h3
        className={`mb-0 py-4 text-capitalize w-100 text-center bg-${foreignBackgroundColor}`}
      >
        {title}
      </h3>
      <div className={`w-100 bg-${upfrontBackgroundColor}`}>
        <div className="px-3 py-5">
          <div className="mb-3">
            <ListGroup list={list} />
          </div>
          {preCta && <p className="text-center small mb-2">{preCta}</p>}
          {airbnb && (
            <div className="d-flex justify-content-center">
              <ButtonLink {...airbnb} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
