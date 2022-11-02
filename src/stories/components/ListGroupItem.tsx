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
  headingBottom?: number;
  heading: string;
  // remove any
  svg?: any;
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
    <li className="d-flex flex-row align-items-center">
      {svg && (
        <StyledIconWrapper className="d-flex align-items-center justify-content-center">
          <SVG icon={svg} size={svgSize} />
        </StyledIconWrapper>
      )}
      <div>
        <StyledHeading className={`mb-${headingBottom}`}>
          {heading}
        </StyledHeading>
        {text && (
          <StyledSubheading className={`d-block fw-light mb-${textBottom}`}>
            {text}
          </StyledSubheading>
        )}
      </div>
    </li>
  );
};

export default ListGroupItem;
