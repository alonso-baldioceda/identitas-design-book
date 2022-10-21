import React, { FC } from "react";
import styled from "styled-components";

// Components
import SVG from "./SVG";

// Styles
const StyledListGroupItem = styled((props) => <li {...props} />)`
  /* &:last-child {
    margin-bottom: 0 !important;

    span {
      margin-bottom: 0 !important;
    }
  } */
`;

const StyledHeading = styled.p`
  font-size: 18px;
`;

const StyledSubheading = styled.p`
  font-size: 16px;
`;

const StyledListGroupItemIconWrapper = styled((props) => <span {...props} />)`
  border-radius: 50%;
  margin-right: 0.75rem;
`;

// Props
interface ListGroupItemProps {
  text: string;
  svgSize: string;
  // remove any
  svg?: any;
  subText?: string;
}

const ListGroupItem: FC<ListGroupItemProps> = ({
  text,
  svgSize = "default",
  svg,
  subText,
}) => {
  return (
    <StyledListGroupItem className="d-flex flex-row align-items-center mb-3">
      {svg && (
        <StyledListGroupItemIconWrapper className="d-flex align-items-center justify-content-center">
          <SVG icon={svg} size={svgSize} />
        </StyledListGroupItemIconWrapper>
      )}
      <div>
        <StyledHeading className="mb-0">{text}</StyledHeading>
        {subText && (
          <StyledSubheading className="d-block fw-light mb-0">
            {subText}
          </StyledSubheading>
        )}
      </div>
    </StyledListGroupItem>
  );
};

export default ListGroupItem;
