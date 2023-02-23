import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

// Components
import Text, { TextProps } from "./../../components/Text";

// Types
export interface ErrorFormProps {
  error?: TextProps;
  touched: boolean;
}

// Styles
const StyledErrorForm = styled.div`
  .invalid {
    /* TODO:  move color */
    background-color: red;
    border-radius: 10px;
    color: #fff !important;
    display: inline-block;
    font-size: 0.875rem;
    margin-top: 10px;
  }
`;

export const ErrorForm: FC<ErrorFormProps> = ({ error, touched }) => (
  <StyledErrorForm className={classnames(`${prefix}-error`)}>
    {error && touched ? <Text {...error} /> : null}
  </StyledErrorForm>
);

export default ErrorForm;
