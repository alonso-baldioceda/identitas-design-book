import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

// Components
import Text from "./../../components/Text";

interface InputFieldProps {
  classes?: string;
  error: any;
  id?: string;
  label: string;
  name: string;
  onChange: any;
  touched: any;
  type?: string;
  value: any;
}

export const InputField: FC<InputFieldProps> = ({
  classes,
  error,
  id,
  label,
  name,
  onChange,
  touched,
  type,
  value,
}) => {
  return (
    <div className={classnames(`${prefix}-input`)}>
      <Text classes="form-label" text={label} variant="label" idFor={name} />
      <input
        type={type ? type : "text"}
        placeholder={label}
        name={name}
        id={id ? id : name}
        value={value}
        onChange={onChange}
        className={classnames("form-control", { [`${classes}`]: classes })}
      />
      {error && touched ? <Text classes="invalid px-2" text={error} /> : null}
    </div>
  );
};

export default InputField;
