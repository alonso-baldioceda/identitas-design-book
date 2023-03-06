import React, { FC } from "react";
import styled from "styled-components";

// Components
import FormControl, { FormControlProps } from "./../formControl/FormControl";

// Styles
const StyledContact = styled.div``;

// Types
interface ContactProps {
  formData?: any;
  handleSubmit: () => void;
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
              <FormControl {...formData[0]} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <FormControl {...formData[1]} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <FormControl {...formData[2]} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <FormControl {...formData[3]} />
            </div>
            <div className="col-12 mb-3">
              <FormControl {...formData[4]} />
            </div>
            <div className="col-12 mb-3">
              <FormControl {...formData[5]} />
            </div>
          </div>
        </div>
      </form>
    </StyledContact>
  );
};

export default Contact;
