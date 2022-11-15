import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../shared/styles.js";

import SVG from "./SVG";

const StyledLinkIcon = styled((props) => <a {...props} />)`
  align-items: center;
  color: transparent;
  display: inline-block;
  font-size: 0;
  justify-content: center;
  line-height: 0;
  margin-right: 0.5rem;
  padding: 10px;

  svg {
    transition: all 0.25s !important;
    vertical-align: top;

    &:hover {
      fill: red;
    }
  }
`;

interface LinkIconProps {
  appearance: string;
  disabled?: boolean;
  mb?: number;
  text?: string;
  icon: ReactNode;
  // TODO: probably need to create ENUM for size
  size: string;
  url: string;
}

const LinkIcon: FC<LinkIconProps> = ({
  appearance = "primary",
  disabled = false,
  icon,
  mb = 0,
  text,
  size,
  url,
}) => (
  <StyledLinkIcon
    href={url}
    className={classnames(
      `
        ${prefix}-button
        text-capitalize
        rounded-pill
        bg-${appearance}
        mb-${mb}
      `,
      { disabled: disabled }
    )}
  >
    {text}

    <SVG icon={icon} size={size} />
  </StyledLinkIcon>
);

export default LinkIcon;
