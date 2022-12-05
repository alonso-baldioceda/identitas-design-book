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

// TODO: check if delete
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
export enum ListGroupItemSizes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
}

interface ListGroupItemProps {
  svg?: ReactNode;
  svgSize: string;
  text?: string;
  textBottom?: number;
  subText?: string;
}

const ListGroupItem: FC<ListGroupItemProps> = ({
  svgSize = ListGroupItemSizes.md,
  svg,
  subText,
  text,
  textBottom = 0,
}) => {
  return (
    <ListGroupItemStyled className={`${prefix}-list-group-tem`}>
      {svg && (
        <IconWrapper>
          <SVG icon={svg} size={svgSize} />
        </IconWrapper>
      )}
      <div className="content">
        {text && <p className={`mb-${textBottom}`}>{text}</p>}
        {subText && <small>{subText}</small>}
      </div>
    </ListGroupItemStyled>
  );
};

export default ListGroupItem;
