import React, { FC } from "react";
import { Link } from "gatsby";
import { prefix } from "./../shared/styles.js";

interface LinkGatsbyProps {
  // TODO: build active
  // active?: string;
  text: string;
  to: string;
  onClick?: () => void;
}

const LinkGatsby: FC<LinkGatsbyProps> = ({ text = "gatsby link", to }) => (
  <Link to={to} className={`${prefix}-link-gatsby`}>
    {text}
  </Link>
);
export default LinkGatsby;
