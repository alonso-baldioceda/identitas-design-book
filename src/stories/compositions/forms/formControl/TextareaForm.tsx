import React, { FC } from "react";
import classnames from "classnames";

// Types
export interface TextareaFormProps {
  classes: string;
  id?: string;
  name: string;
  onChange?: () => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value: string;
}

export const TextareaForm: FC<TextareaFormProps> = ({
  classes,
  id,
  name,
  onChange,
  placeholder,
  required,
  rows,
  value,
}) => (
  <textarea
    className={classnames({ [`${classes}`]: classes })}
    id={id ? id : name}
    name={name}
    onChange={onChange ? onChange: null}
    placeholder={placeholder ? placeholder : ""}
    required={required ? required : false}
    rows={rows ? rows : 3}
    value={value}
  />
);

export default TextareaForm;
