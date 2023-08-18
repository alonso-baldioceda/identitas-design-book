import React, { FC } from "react";
import styled from "styled-components";
import { prefix } from "../../../shared/styles";

// Components
import Input from "./controls/Input";
import Textarea from "./controls/Textarea";

// Styles
const StyledControlsHandler = styled.div``;

interface ControlsHandlerProps {
  field: any;
  touched: any;
  error: any;
  value: any;
  handleChange: any;
}

const ControlsHandler: FC<ControlsHandlerProps> = ({
  field,
  touched,
  error,
  value,
  handleChange,
}) => {
  const { containerClasses, input } = field;

  const { type, placeholder, name } = input || "";
  const { rows } = input || 2;

  return (
    <StyledControlsHandler
      className={`${prefix}-controls-handler ${containerClasses}`}
    >
      {field.control === "input" ? (
        <Input
          type={type}
          touched={touched}
          error={error}
          placeholder={placeholder}
          field={name}
          value={value}
          handleChange={handleChange}
        />
      ) : null}

      {field.control === "textarea" ? (
        <Textarea
          touched={touched}
          error={error}
          placeholder={placeholder}
          field={name}
          value={value}
          handleChange={handleChange}
          rows={rows}
        />
      ) : null}
    </StyledControlsHandler>
  );
};

export default ControlsHandler;
