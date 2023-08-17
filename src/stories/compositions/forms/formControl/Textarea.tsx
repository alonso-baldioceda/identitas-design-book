import React, { FC } from "react";
import classnames from "classnames";

export interface TextareaProps {
  containerClasses?: string;
  rows?: number;
  touched?: boolean;
  error?: boolean;
  placeholder?: string;
  field?: string;
  value?: string;
  handleChange?: any;
}

export const Textarea: FC<TextareaProps> = ({
  containerClasses,
  rows,
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
      <textarea
        className={classnames(
          "form-control",
          {
            "is-valid": touched && !error,
          },
          {
            "is-invalid": touched && error,
          }
        )}
        rows={rows ? rows : 2}
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

export default Textarea;
