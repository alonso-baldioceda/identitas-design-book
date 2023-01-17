import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";
import classnames from "classnames";

// Components
import SVG from "./SVG";

// Types
import Size from "./../../shared/enums/size";
import { TextProps } from "./../components/Text";

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
    <div className="text">
      {text?.heading && (
        <p className={classnames(`${text ? text.heading?.classes : ""}`)}>
          {text ? text.heading?.text : null}
        </p>
      )}
      {text?.bottom && (
        <small className={classnames(`${text ? text.bottom?.classes : ""}`)}>
          {text ? text.bottom?.text : null}
        </small>
      )}
    </div>
  </ListGroupItemStyled>
);

export default ListGroupItem;
