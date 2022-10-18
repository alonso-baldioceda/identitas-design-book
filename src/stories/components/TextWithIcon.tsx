import React, { FC } from "react";
import styled from "styled-components";

// Styles
const StyledTextWithIcon = styled.div`
  svg {
    width: 44px;
  }

  span {
    font-size: 1rem;
    font-weight: 300;
  }
`;

const StyledSubheading = styled.span`
  font-size: 1rem;
  font-weight: 300;
`;

// Props
interface IProps {
  icon: any;
  heading: string;
  subheading?: string;
}

const TextWithIcon: FC<IProps> = ({ icon, heading, subheading }) => {
  return (
    <StyledTextWithIcon className="d-flex align-items-center text-with-icon mb-0">
      <span className="me-3">{icon}</span>
      <p className="mb-0">
        {heading}
        {subheading && (
          <StyledSubheading className="d-block">{subheading}</StyledSubheading>
        )}
      </p>
    </StyledTextWithIcon>
  );
};

export default TextWithIcon;
