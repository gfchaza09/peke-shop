import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import './CartForm.styles.css';

const ValidationSchema = yup.object().shape({
    firstName: yup.string().required("*Campo requerido").min(2, "*Mínimo 2 caracteres"),
    lastName: yup.string().required("*Campo requerido").min(2, "*Mínimo 2 caracteres"),
    email: yup
    .string()
    .required("*Campo requerido")
    .email("*Email inválido"),
    phoneNumber: yup.string().required("*Campo requerido")
});

export const CartForm = ({ onSubmit, onCancel }) => {
  return (
    <Formik initialValues={{firstName: "", lastName: "", email: "", phoneNumber: ""}}
    validationSchema={ValidationSchema}
    onSubmit={onSubmit}>
      {
        ({errors, touched}) => (
          <Form className="form">
            <div>
              <Field name="firstName" placeholder="Nombre" className="form__input"/>
              {errors.firstName && touched.firstName ? (
             <div className="form__error">{errors.firstName}</div>
           ) : null}
            </div>
            <div>
              <Field name="lastName" placeholder="Apellido" className="form__input"/>
              {errors.lastName && touched.lastName ? (
             <div className="form__error">{errors.lastName}</div>
           ) : null}
            </div>
            <div>
              <Field name="email" placeholder="Email" className="form__input" />
              {errors.email && touched.email ? (
             <div className="form__error">{errors.email}</div>
           ) : null}
            </div>
            <div>
              <Field name="phoneNumber" placeholder="Número de teléfono" className="form__input" />
              {errors.phoneNumber && touched.phoneNumber ? (
             <div className="form__error">{errors.phoneNumber}</div>
           ) : null}
            </div>

            <div className="form__container--btn">
              <button className="form__btn" onClick={onCancel} type="button">
                Cancelar
              </button>
              <button
                className="form__btn"
                type="submit"
              >
                Comprar
              </button>
            </div>
          </Form>
        )
      }
    </Formik>
  );
};
