import React, { FC } from "react";
import styled from "styled-components";

// Components
import SVG from "./SVG";

// Styles
const StyledHeading = styled.p`
  font-size: 18px;
`;

const StyledSubheading = styled.p`
  font-size: 16px;
`;

const StyledIconWrapper = styled((props) => <span {...props} />)`
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
    <li className="d-flex flex-row align-items-center">
      {svg && (
        <StyledIconWrapper className="d-flex align-items-center justify-content-center">
          <SVG icon={svg} size={svgSize} />
        </StyledIconWrapper>
      )}
      <div>
        <StyledHeading className="mb-0">{text}</StyledHeading>
        {subText && (
          <StyledSubheading className="d-block fw-light mb-0">
            {subText}
          </StyledSubheading>
        )}
      </div>
    </li>
  );
};

export default ListGroupItem;
