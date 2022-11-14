import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

// Components
import SVG from "./SVG";

// Styles
const IconWrapper = styled((props) => <span {...props} />)`
  border-radius: 50%;
  margin-right: 0.75rem;
`;

// Props
interface ListGroupItemProps {
  headingBottom?: number;
  heading: string;
  svg?: ReactNode;
  svgSize: string;
  text?: string;
  textBottom?: number;
}

const ListGroupItem: FC<ListGroupItemProps> = ({
  heading,
  headingBottom = 0,
  svgSize = "default",
  svg,
  text,
  textBottom = 0,
}) => {
  return (
    <li
      className={`d-flex flex-row align-items-center ${prefix}-list-group-tem`}
    >
      {svg && (
        <IconWrapper className="d-flex align-items-center justify-content-center">
          <SVG icon={svg} size={svgSize} />
        </IconWrapper>
      )}
      <p className={`mb-${headingBottom}`}>{heading}</p>
      {text && <p className={`d-block mb-${textBottom}`}>{text}</p>}
    </li>
  );
};

export default ListGroupItem;
