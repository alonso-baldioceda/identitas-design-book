import React, { FC } from "react";
import classnames from "classnames";

export interface InputProps {
  containerClasses?: string;
  type?: string;
  touched?: boolean;
  error?: boolean;
  placeholder?: string;
  field?: string;
  value?: string;
  handleChange?: any;
}

export const Input: FC<InputProps> = ({
  containerClasses,
  type,
  touched,
  error,
  placeholder,
  field,
  value,
  handleChange,
}) => {
  return (
    <div className={containerClasses}>
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
