import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "../../../shared/styles";

// Components
import Text, { TextProps } from "../../components/Text";

// Types
export interface ErrorProps {
  text: TextProps;
}

// Styles
const StyledError = styled.div`
  .invalid {
    background-color: red;
    border-radius: 10px;
    color: #fff !important;
    display: inline-block;
    font-size: 0.875rem;
    margin-top: 10px;
  }
`;

export const Error: FC<ErrorProps> = ({ text }) => (
  <StyledError className={classnames(`${prefix}-error`)}>
    <Text {...text} />
  </StyledError>
);

export default Error;
