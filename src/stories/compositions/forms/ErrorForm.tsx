import React, { FC } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

// Components
import Text, { TextProps } from "./../../components/Text";

// Types
export interface ErrorFormProps {
  error?: TextProps;
  touched: string;
}

// Styles
const StyledErrorForm = styled.div`
  /* TODO: move the whole class to global */
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

export const ErrorForm: FC<ErrorFormProps> = ({ error, touched }) =>
  error && touched ? (
    <StyledErrorForm className={classnames(`${prefix}-error`)}>
      <Text {...error} />
    </StyledErrorForm>
  ) : null;

export default ErrorForm;
