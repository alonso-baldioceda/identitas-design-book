import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "../../../../shared/styles";

// Components
import Text from "./../../../components/Text";

export interface InputProps {
  type?: string;
  touched?: boolean;
  error?: boolean;
  placeholder?: string;
  field?: string;
  value?: string;
  handleChange?: any;
}

export const Input: FC<InputProps> = ({
  type,
  touched,
  error,
  placeholder,
  field,
  value,
  handleChange,
}) => {
  return (
    <div className={`${prefix}-input`}>
      <label htmlFor={field}>{placeholder}</label>
      <input
        type={type}
        className={classnames(
          "form-control",
          {
            "is-valid": touched && !error,
          },
          {
            "is-invalid": touched && error,
          }
        )}
        placeholder={placeholder}
        name={field}
        id={field}
        value={value}
        onChange={handleChange}
      />
      {error && touched ? <p className='invalid'>{error}</p> : null}
    </div>
  );
};

export default Input;
