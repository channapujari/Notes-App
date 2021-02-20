import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";

import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import { startRegisterUser } from "../actions/userAuth";
import RegisterImage from "../images/register.jpg";

const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username can not be blank")
    .min(8, "Username must be at least 8 characters"),
  email: Yup.string()
    .required("Email can not be blank")
    .email("Not a valid E-mail"),
  password: Yup.string()
    .required("Password can not be blank")
    .min(8, "Must be at least 8 characters"),
});

const Register = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, formikProps) => {
    const formData = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    //console.log(formData);
    const handleRedirect = () => {
      props.history.push("/login");
      swal("Good job!", "Registration Success!", "success");
    };
    dispatch(startRegisterUser(formData, handleRedirect));
    formikProps.resetForm();
  };

  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src={RegisterImage}
            style={{
              width: "100%",
              height: "75%",
              objectFit: "cover",
              marginTop: "15px",
            }}
            alt="user-auth"
          />
        </Grid>
        <Grid container item xs={12} sm={6} style={{ padding: 10 }}>
          <Paper
            elevation={5}
            style={{
              padding: "20px",
              height: "400px",
              width: "300px",
              margin: "50px auto",
            }}
          >
            <Grid align="center">
              <Avatar style={{ backgroundColor: "green", margin: "5px 0" }}>
                <AddCircleOutlineIcon />
              </Avatar>
              <Typography variant="h5">Register</Typography>
            </Grid>
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              onSubmit={handleSubmit}
              validationSchema={signUpSchema}
            >
              {(props) => (
                <Form>
                  <Field
                    as={TextField}
                    label="Username"
                    placeholder="Enter username"
                    fullWidth
                    required
                    name="username"
                    helperText={<ErrorMessage name="username" />}
                  />
                  <Field
                    as={TextField}
                    label="Email"
                    placeholder="Enter email"
                    type="text"
                    fullWidth
                    required
                    name="email"
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Field
                    as={TextField}
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    fullWidth
                    required
                    name="password"
                    helperText={<ErrorMessage name="password" />}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    style={{ margin: "30px 0" }}
                    variant="contained"
                    margin="10px 0"
                  >
                    Register Now
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
