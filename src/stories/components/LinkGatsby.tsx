import React, { FC } from "react";
import { Link } from "gatsby";
import { prefix } from "./../../shared/styles";
import classnames from "classnames";

interface LinkGatsbyProps {
  // appearance: string;
  classes?: string;
  text: string;
  to: string;
}

const LinkGatsby: FC<LinkGatsbyProps> = ({
  //appearance,
  text,
  to,
  classes,
}) => (
  <Link
    to={to}
    className={classnames(
      { [`${classes}`]: classes },
      // { "bg-primary": !appearance },
      // { [`bg-${appearance}`]: appearance },
      `${prefix}-link-gatsby`
    )}
  >
    {text}
  </Link>
);

export default LinkGatsby;
