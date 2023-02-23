import React, { FC, ReactNode } from "react";
import classnames from "classnames";
import { Link } from "react-scroll";
import { prefix } from "./../../../shared/styles.js";

// Types
interface LinkToScrollProps {
  children: ReactNode;
  to: string;
}

const LinkToScroll: FC<LinkToScrollProps> = ({ children, to }) => (
  <Link className={classnames(`${prefix}-brand-link-to-scroll`)} to={to}>
    {children}
  </Link>
);

export default LinkToScroll;
