import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../../shared/styles.js";

// Components
import Text, { TextProps } from "./../../components/Text";
import InputForm, { InputFormProps } from "./InputForm";
import ErrorForm from "./ErrorForm";

// Types
// TODO: Add required
interface FormControlProps {
  error?: TextProps;
  id?: string;
  input: InputFormProps;
  label: TextProps;
  onChange: () => void;
  required?: boolean;
  touched: boolean;
  value: any;
}

export const FormControl: FC<FormControlProps> = ({
  error,
  id,
  input,
  label,
  onChange,
  required,
  touched,
  value,
}) => {
  const newInputProps = {
    ...input,
    id: id ? id : input.name,
    onChange: onChange,
    type: input.type ? input.type : "text",
    value: value,
  };

  return (
    <div className={classnames(`${prefix}-input`)}>
      <Text {...label} />
      <InputForm {...newInputProps} />
      <ErrorForm error={error} touched={touched} />
    </div>
  );
};

export default FormControl;
