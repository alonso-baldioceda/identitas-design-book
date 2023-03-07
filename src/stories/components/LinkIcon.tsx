import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

// Components
import SVG from "./SVG";

// Types
import Size from "./../../shared/enums/size";

// Styles
const StyledLinkIcon = styled((props) => <a {...props} />)`
  align-items: center;
  border-radius: 50rem;
  color: transparent;
  display: flex;
  font-size: 0 !important;
  justify-content: center;
  line-height: 0;
  margin-bottom: 0;
  position: relative;
`;

export interface LinkIconProps {
  // appearance: string;
  classes?: string;
  disabled?: boolean;
  icon: ReactNode;
  size?: Size;
  text?: string;
  url: string;
}

const LinkIcon: FC<LinkIconProps> = ({
  // appearance,
  classes,
  disabled,
  icon,
  size,
  text,
  url,
}) => (
  <StyledLinkIcon
    href={url}
    className={classnames(
      "btn",
      // { "bg-primary": !appearance },
      // { [`bg-${appearance}`]: appearance },
      { [`${classes}`]: classes },
      { disabled: disabled },
      `${prefix}-link-icon`
    )}
  >
    {text}
    <SVG icon={icon} size={size ? size : Size.sm} />
  </StyledLinkIcon>
);

export default LinkIcon;
