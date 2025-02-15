import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const navigate = useNavigate();

    //kiem tra co nhap dung khonf
    const validationSchema = Yup.object().shape({
        userName: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(6).max(20).required(),
    })

    //lay gia tri
    const initialValues = {
        userName: "",
        password: "",
    };
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then((response) => {
            navigate("/login");
        })
    };
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <lable>User Name:</lable>
                    <ErrorMessage name="userName" component="span" />
                    <Field autocomplete="off" id="inputCreatePost" name="userName" placeholder="Your name" />
                    <lable>Password:</lable>
                    <ErrorMessage name="password" component="span" />
                    <Field autocomplete="off" id="inputCreatePost" name="password" placeholder="Password" />
                    <button type="submit">Registration</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Registration 
