import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";

// Components
import InputField from "./forms/InputField";
import TextareaField from "./forms/TextareaField";
// import Toast from "./toast";

// Styles
const StyledContact = styled.div`
  .invalid {
    background-color: red;
    border-radius: 10px;
    color: #fff !important;
    display: inline-block;
    font-size: 0.875rem;
    margin-top: 10px;
  }
`;

// Types
interface IModel {
  firstName: string;
  lastName: string;
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

export const Contact = () => {
  const { t } = useTranslation();
  const [conf, setConf] = useState({});

  // Translations
  const contact: any = t("contact", { returnObjects: true });
  const { validation } = contact;

  // const schema = Yup.object({
  //   firstName: Yup.string().required(t(validation.firstNameRequired)),
  //   lastName: Yup.string().required(t(validation.lastNameRequired)),
  //   email: Yup.string()
  //     .required(t(validation.emailRequired))
  //     .email(t(validation.emailInvalid)),
  //   phone: Yup.string().required(t(validation.phoneRequired)),
  //   subject: Yup.string().required(t(validation.subjectRequired)),
  //   message: Yup.string().required(t(validation.messageRequired)),
  // });

  // Failed to load preset: {} on level 2

  const schema = Yup.object({
    firstName: Yup.string().required("required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().required("required").email("required"),
    phone: Yup.string().required("required"),
    subject: Yup.string().required("required"),
    message: Yup.string().required("required"),
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
    const { firstName, lastName, email, phone, subject, message } = model;

    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
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
            heading: t(validation.successHeader),
            body: t(validation.successBody),
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
            heading: t(validation.errorHeader),
            body: t(validation.errorBody),
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
        firstName: "",
        lastName: "",
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
        isValid,
        isSubmitting,
      }) => (
        <>
          {/* <Toast handleClose={handleClose} conf={conf} /> */}
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
                    <InputField
                      classes="form-control"
                      error={errors.firstName}
                      label="firstname"
                      name="firstName"
                      onChange={handleChange}
                      touched={touched.firstName}
                      value={values.firstName}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <InputField
                      classes="form-control"
                      error={errors.lastName}
                      label="lastname"
                      name="lastName"
                      onChange={handleChange}
                      touched={touched.lastName}
                      value={values.lastName}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <InputField
                      classes="form-control"
                      error={errors.email}
                      label="email"
                      name="email"
                      onChange={handleChange}
                      touched={touched.email}
                      type="email"
                      value={values.email}
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <InputField
                      classes="form-control"
                      error={errors.phone}
                      label="phone"
                      name="phone"
                      onChange={handleChange}
                      touched={touched.phone}
                      value={values.phone}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <InputField
                      classes="form-control"
                      error={errors.subject}
                      label="subject"
                      name="subject"
                      onChange={handleChange}
                      touched={touched.subject}
                      value={values.subject}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <TextareaField
                      classes="form-control"
                      error={errors.message}
                      label="message"
                      name="message"
                      onChange={handleChange}
                      rows={3}
                      touched={touched.message}
                      value={values.message}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      disabled={!isValid || isSubmitting}
                      type="submit"
                      className="btn rounded-pill py-2 px-4 text-capitalize font-weight-bold"
                    >
                      {isSubmitting
                        ? t(`contact.submitting`)
                        : t(`contact.submit`)}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </StyledContact>
        </>
      )}
    </Formik>
  );
};

export default Contact;
