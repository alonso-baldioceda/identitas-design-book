import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

// Components
import SVG from "./SVG";

// Styles
const ListGroupItemStyled = styled.li`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Subtext = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 0;
`;

const IconWrapper = styled((props) => <span {...props} />)`
  align-items: center;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin-right: 0.75rem;
`;

// Types
export interface ListGroupItemProps {
  svg?: ReactNode;
  svgSize?: string;
  text?: string;
  textBottom?: number;
  subText?: string;
}

const ListGroupItem: FC<ListGroupItemProps> = ({
  svgSize,
  svg,
  subText,
  text,
  textBottom,
}) => (
  <ListGroupItemStyled className={`${prefix}-list-group-item`}>
    {svg && (
      <IconWrapper>
        <SVG icon={svg} size={svgSize ? svgSize : "sm"} />
      </IconWrapper>
    )}
    <div className="content">
      {text && <p className={`mb-${textBottom ? textBottom : 0}`}>{text}</p>}
      {subText && <Subtext>{subText}</Subtext>}
    </div>
  </ListGroupItemStyled>
);

export default ListGroupItem;
