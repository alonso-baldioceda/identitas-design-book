import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

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
  font-size: 0;
  justify-content: center;
  line-height: 0;
  margin-bottom: 0;
  position: relative;
`;

export interface LinkIconProps {
  disabled?: boolean;
  icon: ReactNode;
  mb?: number;
  me?: number;
  meSm?: number;
  meMd?: number;
  meLg?: number;
  meXl?: number;
  size?: Size;
  text?: string;
  url: string;
}

const LinkIcon: FC<LinkIconProps> = ({
  disabled,
  icon,
  mb,
  me,
  meSm,
  meMd,
  meLg,
  meXl,
  size,
  text,
  url,
}) => {
  return (
    <StyledLinkIcon
      href={url}
      className={`${prefix}-button text-capitalize mb-${mb} me-${me} me-sm-${meSm} me-mb-${meMd} me-lg-${meLg} me-xl-${meXl} 
      ${disabled ? disabled : ""}`}
      size={size}
    >
      {text}
      <SVG icon={icon} size={size ? size : Size.sm} />
    </StyledLinkIcon>
  );
};

export default LinkIcon;
