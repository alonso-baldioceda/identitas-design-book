import React, { FC } from "react";
import styled from "styled-components";

// Styles
const StyledListGroupItem = styled.li`
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

const StyledSubheading = styled.span`
  font-size: 16px;
`;

const StyledListGroupItemIconWrapper = styled.span`
  border-radius: 50%;
  height: 52px;
  margin-right: 0.75rem;
`;

// Props
interface ListGroupItemProps {
  alt?: string;
  text: string;
  height?: number;
  src?: string;
  small?: string;
  width?: number;
}

const ListGroupItem: FC<ListGroupItemProps> = ({
  alt = "",
  text = "some text here!!",
  height = 40,
  src = "",
  small = "",
  width = 40,
}) => {
  return (
    <StyledListGroupItem className="d-flex flex-row align-items-center justify-content-center mb-2">
      {src && (
        <StyledListGroupItemIconWrapper className="d-flex align-items-center justify-content-center">
          {/* TODO: add Gatsby svg support */}
          <img src={src} alt={alt} height={height} width={width} />
        </StyledListGroupItemIconWrapper>
      )}
      <div>
        <StyledHeading className="mb-0">{text}</StyledHeading>
        {small && (
          <StyledSubheading className="d-block fw-light">
            {small}
          </StyledSubheading>
        )}
      </div>
    </StyledListGroupItem>
  );
};

export default ListGroupItem;
