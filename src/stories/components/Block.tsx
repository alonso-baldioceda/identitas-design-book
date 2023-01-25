import React, { FC } from "react";

export interface BlockProps {
  id?: string;
  classes?: string;
  children?: React.ReactNode;
}

const Block: FC<BlockProps> = ({ id, classes, children }) => (
  <section className={`${classes}`} id={`${id ? id : ""}`}>
    {children}
  </section>
);

export default Block;
