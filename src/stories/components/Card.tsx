import React, { FC } from "react";
import { color } from "./../shared/styles.js";

// Components
import ListGroup from "./ListGroup";
import ButtonLink from "./ButtonLink";

//Props
interface CardProps {
  border?: number;
  // TODO: remove any
  cta?: any | null;
  foreignBackgroundColor: string;
  // TODO: remove any
  list: any;
  preCta?: string | null;
  title: string;
  upfrontBackgroundColor: string;
}

const Card: FC<CardProps> = ({
  border = 4,
  cta = null,
  foreignBackgroundColor = color.primary,
  list,
  preCta = null,
  title = "title here!!",
  upfrontBackgroundColor = color.transparent,
}) => (
  <div
    className={`d-flex flex-column align-items-center border border-${border} border-${foreignBackgroundColor}`}
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
        {cta && (
          <div className="d-flex justify-content-center">
            <ButtonLink {...cta} />
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Card;
