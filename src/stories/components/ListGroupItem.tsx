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

const StyledListGroupItemIconWrapper = styled.span`
  border-radius: 50%;
  height: 52px;
  margin-right: 0.75rem;
`;

// Props
interface ListGroupItemProps {
  alt?: string;
  height?: number;
  src?: string;
  text: string;
  width?: number;
}

const ListGroupItem: FC<ListGroupItemProps> = ({
  alt = "",
  height = 40,
  src = "",
  text = "some text here!!",
  width = 40,
}) => {
  return (
    <StyledListGroupItem className="d-flex flex-row align-items-center justify-content-center">
      {src && (
        <StyledListGroupItemIconWrapper className="d-flex align-items-center justify-content-center mb-2">
          {/* TODO: add svg support */}
          <img src={src} alt={alt} height={height} width={width} />
        </StyledListGroupItemIconWrapper>
      )}
      <p className="mb-0">{text}</p>
    </StyledListGroupItem>
  );
};

export default ListGroupItem;
