import React, { FC } from "react";
import classnames from "classnames";

export interface InputFormProps {
  classes: string;
  id?: string;
  name: string;
  onChange?: () => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value: string;
}

export const InputForm: FC<InputFormProps> = ({
  classes,
  id,
  name,
  onChange,
  placeholder,
  required,
  type,
  value,
}) => (
  <input
    className={classnames({ [`${classes}`]: classes })}
    id={id ? id : name}
    name={name}
    onChange={onChange}
    placeholder={placeholder ? placeholder : ""}
    required={required ? required : false}
    type={type ? type : "text"}
    value={value}
  />
);

export default InputForm;
