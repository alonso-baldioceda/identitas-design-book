import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

// Components
import SVG from "./SVG";

// Types
import Size from "./../../shared/enums/size";
import Text, { TextProps } from "./../components/Text";

// Styles
const ListGroupItemStyled = styled.li`
  align-items: center;
  display: flex;
  flex-direction: row;
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
  text?: {
    heading?: TextProps;
    bottom?: TextProps;
  };
}

const ListGroupItem: FC<ListGroupItemProps> = ({ svgSize, svg, text }) => (
  <ListGroupItemStyled className={`${prefix}-list-group-item`}>
    {svg && (
      <IconWrapper>
        <SVG icon={svg} size={svgSize ? svgSize : Size.sm} />
      </IconWrapper>
    )}
    {text && (
      <div className="text">
        {text?.heading && <Text {...text.heading} />}
        {text?.bottom && <Text {...text.bottom} />}
      </div>
    )}
  </ListGroupItemStyled>
);

export default ListGroupItem;
