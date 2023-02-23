import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";

// Components
import Button from "./../components/Button";
import FormControl from "./forms/FormControl";
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
}

export const Contact: FC<ContactProps> = ({ formData }) => {
  const { t } = useTranslation();
  const [conf, setConf] = useState({});

  // Translations
  const contact: any = t("contact", { returnObjects: true });

  const schema = Yup.object({
    firstname: Yup.string().required(t(contact.validation.firstnameRequired)),
    lastname: Yup.string().required(t(contact.validation.lastnameRequired)),
    email: Yup.string()
      .required(t(contact.validation.emailRequired))
      .email(t(contact.validation.emailInvalid)),
    phone: Yup.string().required(t(contact.validation.phoneRequired)),
    subject: Yup.string().required(t(contact.validation.subjectRequired)),
    message: Yup.string().required(t(contact.validation.messageRequired)),
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
    const formData = { ...model };

    // const axiosConfig = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Access-Control-Allow-Origin": "http://localhost:8000",
    //   },
    // };

    // const sendForm = async () => {
    //   try {
    //     const response = await axios.post(
    //       `${process.env.GATSBY_AWS_API_GATEWAY}`,
    //       formData,
    //       axiosConfig
    //     );
    //     if (response.status === 200) {
    //       resetForm();
    //       setConf({
    //         type: "success",
    //         error: false,
    //         heading: t(contact.validation.successHeader),
    //         body: t(contact.validation.successBody),
    //         visible: true,
    //       });
    //       setTimeout(() => handleClose(), 5000);
    //     }
    //   } catch (error) {
    //     setSubmitting(false);
    //     if (error) {
    //       setConf({
    //         type: "alert",
    //         error: true,
    //         heading: t(contact.validation.errorHeader),
    //         body: t(contact.validation.errorBody),
    //         visible: true,
    //       });
    //       setTimeout(() => handleClose(), 5000);
    //     }
    //   }
    // };

    // sendForm();

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
            heading: t(contact.validation.successHeader),
            body: t(contact.validation.successBody),
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
            heading: t(contact.validation.errorHeader),
            body: t(contact.validation.errorBody),
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
        // errors,
        touched,
        handleChange,
        handleSubmit,
        isValid,
        isSubmitting,
      }) => {
        return (
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
                      <FormControl
                        {...formData.fields[0]}
                        error={formData.fields[0].error}
                        onChange={handleChange}
                        touched={touched.firstname}
                        value={values.firstname}
                      />
                    </div>
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
                    <div className="col-12">
                      <Button
                        {...formData.fields[6]}
                        text={
                          isSubmitting
                            ? t(contact.submitting)
                            : t(contact.submit)
                        }
                        disabled={!isValid || isSubmitting}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </StyledContact>
          </>
        );
      }}
    </Formik>
  );
};

export default Contact;
