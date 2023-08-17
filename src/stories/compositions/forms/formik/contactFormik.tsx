import React, { FC, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";
import { Formik } from "formik";

// Components
import Contact, { ContactProps } from "./../templates/Contact";

// Styles
const StyledContactFormik = styled.div``;

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

interface ContactFormikProps {}

export const ContactFormik: FC<ContactFormikProps> = (props) => {
  const [conf, setConf] = useState({});

  const schema = Yup.object({
    firstname: Yup.string().required("Nombre requerido"),
    lastname: Yup.string().required("Apellido requerido"),
    email: Yup.string()
      .required("Correo electrónico requerido")
      .email("Correo electrónico invalido"),
    phone: Yup.string().required("Teléfono requerido"),
    subject: Yup.string().required("Asunto requerido"),
    message: Yup.string().required("Mensage requerido"),
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
    console.log("hi!!");
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
    //       const timer = setTimeout(() => {
    //         handleClose();
    //       }, 5000);
    //       return () => clearTimeout(timer);
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
    //       const timer = setTimeout(() => {
    //         handleClose();
    //       }, 5000);
    //       return () => clearTimeout(timer);
    //     }
    //   }
    // };

    // sendForm();

    // axios
    //   .request<IServerData>({
    //     method: "post",
    //     url: `${process.env.GATSBY_AWS_API_GATEWAY}`,
    //     headers: {
    //       "Content-Type": "application/json",
    //       // "Access-Control-Allow-Origin": "http://localhost:8000",
    //     },

    //     transformRequest: (data = formData) => JSON.stringify(data),
    //     transformResponse: (response: IServerResponse) => response.data,
    //   })
    //   .then((response) => {
    //     if (response.status === 200) {
    //       resetForm();
    //       setConf({
    //         type: "success",
    //         error: false,
    //         heading: "Mensaje enviado :)",
    //         body: "De ser necesario lo contactaremos, gracias!",
    //         visible: true,
    //       });
    //       // setTimeout(() => handleClose(), 5000);
    //       const timer = setTimeout(() => {
    //         handleClose();
    //       }, 5000);
    //       return () => clearTimeout(timer);
    //     }
    //   })
    //   .catch(function (error) {
    //     setSubmitting(false);
    //     if (error) {
    //       setConf({
    //         type: "alert",
    //         error: true,
    //         heading: "Algo pasó :(",
    //         body: "Por favor inténtelo de nuevo, gracias!",
    //         visible: true,
    //       });
    //       // setTimeout(() => handleClose(), 5000);
    //       const timer = setTimeout(() => {
    //         handleClose();
    //       }, 5000);
    //       return () => clearTimeout(timer);
    //     }
    //   });
  };

  const handleClose = () => {
    setConf({ ...conf, visible: false });
  };

  return (
    <StyledContactFormik>
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
          return <Contact {...props} />;
        }}
      </Formik>
    </StyledContactFormik>
  );
};

export default ContactFormik;
