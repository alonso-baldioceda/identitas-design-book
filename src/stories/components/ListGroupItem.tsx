import React, { FC } from "react";
import styled from "styled-components";

// Components
import SVG from "./SVG";

// Styles
const StyledListGroupItem = styled((props) => <li {...props} />)`
  &:last-child {
    margin-bottom: 0 !important;

    span {
      margin-bottom: 0 !important;
    }
  }
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
  size: string;
  // remove any
  svg?: any;
  subtext?: string;
}

const ListGroupItem: FC<ListGroupItemProps> = ({
  text,
  size = "default",
  svg,
  subtext,
}) => {
  return (
    <StyledListGroupItem className="d-flex flex-row align-items-center justify-content-center mb-2">
      {svg && (
        <StyledListGroupItemIconWrapper className="d-flex align-items-center justify-content-center">
          <SVG icon={svg} size={size} />
        </StyledListGroupItemIconWrapper>
      )}
      <div>
        <StyledHeading className="mb-0">{text}</StyledHeading>
        {subtext && (
          <StyledSubheading className="d-block fw-light">
            {subtext}
          </StyledSubheading>
        )}
      </div>
    </StyledListGroupItem>
  );
};

export default ListGroupItem;
