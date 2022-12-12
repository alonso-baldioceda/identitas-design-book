import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";
import classnames from "classnames";

// Components
import SVG from "./SVG";

// Types
import Size from "./../../shared/enums/size";

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
  // TODO: group SVG things into one object
  svg?: ReactNode;
  svgSize?: string;
  text?: {
    heading?: {
      text: string;
      mb?: number;
      mbSm?: number;
      mbMd?: number;
      mbLg?: number;
      mbXl?: number;
    };
    bottom?: {
      text: string;
      mb?: number;
      mbSm?: number;
      mbMd?: number;
      mbLg?: number;
      mbXl?: number;
    };
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
      {text && (
        <p
          className={classnames(
            `mb-${text ? text.heading?.mb : 2}`,
            `mb-sm-${text ? text.heading?.mbSm : 2}`,
            `mb-md-${text ? text.heading?.mbMd : 2}`,
            `mb-lg-${text ? text.heading?.mbLg : 2}`,
            `mb-xl-${text ? text.heading?.mbXl : 2}`
          )}
        >
          {text ? text.heading?.text : null}
        </p>
      )}
      {text && (
        <small
          className={classnames(
            `mb-${text ? text.bottom?.mb : 0}`,
            `mb-sm-${text ? text.bottom?.mbSm : 0}`,
            `mb-md-${text ? text.bottom?.mbMd : 0}`,
            `mb-lg-${text ? text.bottom?.mbLg : 0}`,
            `mb-xl-${text ? text.bottom?.mbXl : 0}`
          )}
        >
          {text ? text.bottom?.text : null}
        </small>
      )}
    </div>
  </ListGroupItemStyled>
);

export default ListGroupItem;
