import React, { FC } from "react";
import { Link } from "gatsby";
import { prefix } from "./../shared/styles.js";
import classnames from "classnames";

interface LinkGatsbyProps {
  classes?: string;
  text: string;
  to: string;
}

const LinkGatsby: FC<LinkGatsbyProps> = ({ text, to, classes }) => (
  <Link
    to={to}
    className={classnames({ [`${classes}`]: classes }, `${prefix}-link-gatsby`)}
  >
    {text}
  </Link>
);

export default LinkGatsby;
