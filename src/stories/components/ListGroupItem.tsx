import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

// Components
import SVG from "./SVG";

// Styles
const ListGroupItemStyled = styled.li``;

const Subtext = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;

const IconWrapper = styled((props) => <span {...props} />)`
  border-radius: 50%;
  margin-right: 0.75rem;
`;

// Props
interface ListGroupItemProps {
  // headingBottom?: number;
  // heading: string;
  svg?: ReactNode;
  svgSize: string;
  text?: string;
  textBottom?: number;
  subText?: string;
}

const ListGroupItem: FC<ListGroupItemProps> = ({
  // heading,
  // headingBottom = 0,
  svgSize = "default",
  svg,
  subText,
  text,
  textBottom = 0,
}) => {
  return (
    <ListGroupItemStyled
      className={`d-flex flex-row align-items-center ${prefix}-list-group-tem`}
    >
      {svg && (
        <IconWrapper className="d-flex align-items-center justify-content-center">
          <SVG icon={svg} size={svgSize} />
        </IconWrapper>
      )}
      <div className="content">
        {text && <p className={`d-block mb-${textBottom}`}>{text}</p>}
        {subText && <Subtext className={`d-block mb-0`}>{subText}</Subtext>}
      </div>
    </ListGroupItemStyled>
  );
};

export default ListGroupItem;
