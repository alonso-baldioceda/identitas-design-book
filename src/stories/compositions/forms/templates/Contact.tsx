import React, { FC } from "react";
import styled from "styled-components";

// Components
import FormControl, { FormControlProps } from "./../formControl/FormControl";
import Button, { ButtonProps } from "./../../../components/Button";

// Styles
const StyledContact = styled.div``;

// Types
export interface ContactProps {
  formData?: any;
  handleSubmit?: () => void;
}

export const Contact: FC<ContactProps> = ({ formData, handleSubmit }) => {
  return (
    <StyledContact>
      <form
        noValidate
        onSubmit={handleSubmit}
        action={`${process.env.GATSBY_AWS_API_GATEWAY}`}
        method="POST"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <FormControl {...formData.fields[0]} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <FormControl {...formData.fields[1]} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <FormControl {...formData.fields[2]} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <FormControl {...formData.fields[3]} />
            </div>
            <div className="col-12 mb-3">
              <FormControl {...formData.fields[4]} />
            </div>
            <div className="col-12 mb-3">
              <FormControl {...formData.fields[5]} />
            </div>
            <div className="col-12">
              <Button {...formData.button} />
            </div>
          </div>
        </div>
      </form>
    </StyledContact>
  );
};

export default Contact;
