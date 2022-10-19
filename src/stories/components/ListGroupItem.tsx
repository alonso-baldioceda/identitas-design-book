import React, { FC } from "react";
import styled from "styled-components";
import { sizing } from "./../shared/styles.js";

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

const StyledSubheading = styled.span`
  font-size: 16px;
`;

const StyledListGroupItemIconWrapper = styled((props) => <span {...props} />)`
  border-radius: 50%;
  margin-right: 0.75rem;
  // TODO: analyze bg-color improvement
  /* background-color: red; */
  /* ${(props) =>
    props.iconsize === "small" &&
    `
      height: ${sizing.icon.small + 30}px;
      width: ${sizing.icon.small + 30}px;
    `}

  ${(props) =>
    props.iconsize === "default" &&
    `
      height: ${sizing.icon.default + 30}px;
      width: ${sizing.icon.default + 30}px;
  `}

  ${(props) =>
    props.iconsize === "large" &&
    `
      height: ${sizing.icon.large + 30}px;
      width: ${sizing.icon.large + 30}px;
  `} */

  svg {
    ${(props) =>
      props.iconsize === "small" &&
      `
        height: ${sizing.icon.small}px;
        width: ${sizing.icon.small}px;
      `}

    ${(props) =>
      props.iconsize === "default" &&
      `
        height: ${sizing.icon.default}px;
        width: ${sizing.icon.default}px;
      `}

    ${(props) =>
      props.iconsize === "large" &&
      `
        height: ${sizing.icon.large}px;
        width: ${sizing.icon.large}px;
      `}
  }
`;

// Props
interface ListGroupItemProps {
  text: string;
  iconsize: string;
  // remove any
  svg?: any;
  subtext?: string;
}

const ListGroupItem: FC<ListGroupItemProps> = ({
  text,
  iconsize = "default",
  svg,
  subtext,
}) => {
  return (
    <StyledListGroupItem className="d-flex flex-row align-items-center justify-content-center mb-2">
      {svg && (
        <StyledListGroupItemIconWrapper
          className="d-flex align-items-center justify-content-center"
          iconsize={iconsize}
        >
          {svg}
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
