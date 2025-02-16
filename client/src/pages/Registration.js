import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too short!").max(15, "Too long!").required("Username is required"),
    password: Yup.string().min(4, "Too short!").max(20, "Too long!").required("Password is required"),
  });

  const onSubmit = (data, { setSubmitting, resetForm }) => {
    axios.post("http://localhost:3001/auth", data)
      .then(() => {
        alert("Registration successful! 🎉");
        console.log(data);
        resetForm();
      })
      .catch((error) => {
        alert("Registration failed! ❌ " + (error.response?.data?.message || "Please try again."));
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="registrationContainer">
      <h2>Register</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ isSubmitting }) => (
          <Form className="formContainer">
            <label>Username: </label>
            <ErrorMessage name="username" component="span" className="errorMessage" />
            <Field autoComplete="off" id="inputCreatePost" name="username" placeholder="(Ex. John123...)" />

            <label>Password: </label>
            <ErrorMessage name="password" component="span" className="errorMessage" />
            <Field autoComplete="off" type="password" id="inputCreatePost" name="password" placeholder="Your Password..." />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Registration;
