import React, { FC } from "react";
import classnames from "classnames";
import { prefix } from "./../../../shared/styles.js";

// Components
import Text, { TextProps } from "../../../components/Text";
import InputForm, { InputFormProps } from "./InputForm";
import TextareaForm, { TextareaFormProps } from "./TextareaForm";
import ErrorForm from "../ErrorForm";

// Types
export enum Types {
  INPUT = "input",
  TEXTAREA = "textarea",
}

// TODO: Add required
export interface FormControlProps {
  control: Types;
  error?: TextProps;
  id?: string;
  input: InputFormProps | TextareaFormProps;
  label: TextProps;
  onChange: () => void;
  required?: boolean;
  touched: string;
  value: string;
}

export const FormControl: FC<FormControlProps> = ({
  control,
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
    value: value,
  };

  return (
    <div className={classnames(`${prefix}-input`)}>
      <Text {...label} />
      {control === Types.INPUT ? (
        <InputForm {...newInputProps} />
      ) : (
        <TextareaForm {...newInputProps} />
      )}
      <ErrorForm error={error} touched={touched} />
    </div>
  );
};

export default FormControl;
