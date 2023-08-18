import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

// Components
// import Toast from "./toast";
import ControlsHandler from "../ControlsHandler";

// Styles
const ContactForm = styled.div`
  .invalid {
    color: var(--terracotta);
    font-size: 0.875rem;
    margin-top: 10px;
  }
`;

// Types
interface IModel {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface IServerData {
  method: string;
  url: string;
  headers: any;
  data: IModel;
}

interface IServerResponse {
  data: any;
}

interface ContactProps {
  formData?: any;
  validations?: any;
}

export const Contact: FC<ContactProps> = ({ formData }) => {
  const { validations } = formData;

  const [conf, setConf] = useState({});

  const schema = Yup.object({
    firstname: Yup.string().required(validations.firstnameRequired),
    lastname: Yup.string().required(validations.lastnameRequired),
    email: Yup.string()
      .required(validations.emailRequired)
      .email(validations.emailInvalid),
    phone: Yup.string().required(validations.phoneRequired),
    subject: Yup.string().required(validations.subjectRequired),
    message: Yup.string().required(validations.messageRequired),
  });

  const handleSubmit = (
    model: IModel,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    const { firstname, lastname, email, phone, subject, message } = model;

    const formData = {
      firstname,
      lastname,
      email,
      phone,
      subject,
      message,
    };

    axios
      .request<IServerData>({
        method: "post",
        url: `${process.env.GATSBY_AWS_API_GATEWAY}`,
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "http://localhost:8000",
        },

        transformRequest: (data = formData) => JSON.stringify(data),
        transformResponse: (response: IServerResponse) => response.data,
      })
      .then((response) => {
        if (response.status === 200) {
          resetForm();
          setConf({
            type: "success",
            error: false,
            heading: validations.successHeader,
            body: validations.successBody,
            visible: true,
          });
          setTimeout(() => handleClose(), 5000);
        }
      })
      .catch(function (error) {
        setSubmitting(false);
        if (error) {
          setConf({
            type: "alert",
            error: true,
            heading: validations.errorHeader,
            body: validations.errorBody,
            visible: true,
          });
          setTimeout(() => handleClose(), 5000);
        }
      });
  };

  const handleClose = () => {
    setConf({ ...conf, visible: false });
  };

  useEffect(() => {
    handleSubmit;
  }, []);

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        // isValid,
        isSubmitting,
      }) => (
        <section className='position-relative'>
          {/* <Toast handleClose={handleClose} conf={conf} /> */}
          <ContactForm>
            <Form
              noValidate
              onSubmit={handleSubmit}
              action={`${process.env.GATSBY_AWS_API_GATEWAY}`}
              method='POST'
            >
              <div className='row'>
                {formData.fields.map((field: any, index: number) => {
                  const { input } = field;

                  return (
                    <ControlsHandler
                      key={`controls-handler-${index}`}
                      field={field}
                      touched={touched[input.name]}
                      error={errors[input.name]}
                      value={values[input.name]}
                      handleChange={handleChange}
                    />
                  );
                })}
                <div className='col-12'>
                  <Button
                    disabled={isSubmitting}
                    type={
                      formData.button.type ? formData.button.type : "submit"
                    }
                    className={formData.button.classes}
                  >
                    {isSubmitting
                      ? formData.button.submitting
                      : formData.button.submit}
                  </Button>
                </div>
              </div>
            </Form>
          </ContactForm>
        </section>
      )}
    </Formik>
  );
};

export default Contact;
