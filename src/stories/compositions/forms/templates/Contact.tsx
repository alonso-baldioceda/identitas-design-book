import React, { FC } from "react";
import styled from "styled-components";

// Components
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
        method='POST'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <Button {...formData.button} />
            </div>
          </div>
        </div>
      </form>
    </StyledContact>
  );
};

export default Contact;
