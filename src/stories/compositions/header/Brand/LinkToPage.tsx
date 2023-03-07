import React, { FC, ReactNode } from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import { prefix } from "./../../../../shared/styles.js";

// Types
interface LinkToPageProps {
  children: ReactNode;
  to: string;
}

const LinkToPage: FC<LinkToPageProps> = ({ children, to }) => (
  <Link className={classnames(`${prefix}-brand-link-to-page`)} to={to}>
    {children}
  </Link>
);

export default LinkToPage;
