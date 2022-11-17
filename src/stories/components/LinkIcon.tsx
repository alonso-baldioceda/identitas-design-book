import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../shared/styles.js";

// Components
import SVG from "./SVG";

// Styles
const StyledLinkIcon = styled((props) => <a {...props} />)`
  align-items: center;
  border-radius: 50rem;
  color: transparent;
  display: inline-block;
  font-size: 0;
  justify-content: center;
  line-height: 0;
  position: relative;
`;

// Types
export enum LinkIconSizes {
  xs = "extra-small",
  sm = "small",
  md = "medium",
  lg = "large",
}

export interface LinkIconProps {
  disabled?: boolean;
  icon: ReactNode;
  mb?: number;
  me?: number;
  size?: LinkIconSizes;
  text?: string;
  url: string;
}

const LinkIcon: FC<LinkIconProps> = ({
  disabled = false,
  icon,
  mb = 0,
  me = 3,
  size,
  text,
  url,
}) => (
  <StyledLinkIcon
    href={url}
    className={classnames(
      `
        ${prefix}-button
        text-capitalize
        mb-${mb}
        me-${me}

      `,
      // TODO: create disabled
      { disabled: disabled }
    )}
  >
    {text}
    <SVG icon={icon} size={size} />
  </StyledLinkIcon>
);

export default LinkIcon;
