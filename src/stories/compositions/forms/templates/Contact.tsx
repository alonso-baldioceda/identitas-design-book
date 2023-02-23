import React, { FC } from "react";
import styled from "styled-components";

// Components
import FormControl from "./forms/FormControl";

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
            {/* <div className="col-12 col-md-6 mb-3">
              <FormControl
                {...formData.fields[0]}
                error={formData.fields[0].error}
                onChange={handleChange}
                touched={touched.firstname}
                value={values.firstname}
              />
            </div> */}
            {/* <div className="col-12 col-md-6 mb-3">
                      <FormControl
                        {...formData.fields[1]}
                        error={formData.fields[1].error}
                        onChange={handleChange}
                        touched={touched.lastname}
                        value={values.lastname}
                      />
                    </div> */}
            {/* <div className="col-12 col-md-6 mb-3">
                      <FormControl
                        {...formData.fields[2]}
                        error={formData.fields[2].error}
                        onChange={handleChange}
                        touched={touched.email}
                        value={values.email}
                      />
                    </div> */}
            {/* <div className="col-12 col-md-6 mb-3">
                      <FormControl
                        {...formData.fields[3]}
                        error={formData.fields[3].error}
                        onChange={handleChange}
                        touched={touched.phone}
                        value={values.phone}
                      />
                    </div> */}
            {/* <div className="col-12 mb-3">
                      <FormControl
                        {...formData.fields[4]}
                        error={formData.fields[4].error}
                        onChange={handleChange}
                        touched={touched.subject}
                        value={values.subject}
                      />
                    </div> */}
            {/* <div className="col-12 mb-3">
                      <TextareaField
                        {...formData.fields[5]}
                        error={formData.fields[5].error}
                        onChange={handleChange}
                        touched={touched.message}
                        value={values.message}
                      />
                    </div> */}
          </div>
        </div>
      </form>
    </StyledContact>
  );
};

export default Contact;
