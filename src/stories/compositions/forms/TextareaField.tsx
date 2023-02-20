import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

// Components
import Text from "./../../components/Text";

// Types
interface TextareaFieldProps {
  classes?: string;
  error: any;
  id?: string;
  label: string;
  name: string;
  onChange: any;
  rows?: number;
  touched: any;
  value: any;
}

export const TextareaField: FC<TextareaFieldProps> = ({
  classes,
  error,
  id,
  label,
  name,
  onChange,
  touched,
  rows,
  value,
}) => {
  return (
    <div className={classnames(`${prefix}-input`)}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        id={id ? id : name}
        name={name}
        onChange={onChange}
        placeholder={label}
        rows={rows ? rows : 3}
        value={value}
        className={classnames({ [`${classes}`]: classes })}
      />
      {error && touched ? <Text classes="invalid px-2" text={error} /> : null}
    </div>
  );
};

export default TextareaField;
