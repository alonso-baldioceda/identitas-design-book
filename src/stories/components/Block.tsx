import React, { FC } from "react";
import classnames from "classnames";

export interface BlockProps {
  id?: string;
  classes?: string;
  children?: React.ReactNode;
}

const Block: FC<BlockProps> = ({ id, classes, children }) => (
  <section
    className={classnames({ [`${classes}`]: classes })}
    id={`${id ? id : ""}`}
  >
    {children}
  </section>
);

export default Block;
