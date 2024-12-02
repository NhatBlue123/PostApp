import React from 'react';
import {Formik, Form, Field , ErrorMessage} from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom'


const CreatePost = () =>{
    const navigate = useNavigate();

    //kiem tra co nhap dung khonf
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        userName: Yup.string().min(3).max(15).required(),
    })

    //lay gia tri
    const initialValues = {
        title: "",
        postText: "",
        userName: "",
    };
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts",data).then((response) => {
            // console.log(response.data);
            navigate("/");
        })
    };
    return(
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <lable>Title:</lable>
                    <ErrorMessage name="title" component="span" />
                    <Field autocomplete="off" id="inputCreatePost" name="title" placeholder="Title"/>
                    <lable>Post Text:</lable>
                    <ErrorMessage name="postText" component="span" />
                    <Field autocomplete="off" id="inputCreatePost" name="postText" placeholder="Write something..."/>
                    <lable>User Name:</lable>
                    <ErrorMessage name="userName" component="span" />
                    <Field autocomplete="off" id="inputCreatePost" name="userName" placeholder="Your name"/>
                    <button type="submit">Creat Post</button>
                </Form>
            </Formik>
        </div>
    )
}
export default CreatePost;