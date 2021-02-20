import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startLoginUser } from "../actions/userAuth";
import { toggleStatus } from "../actions/toggleStatus";
import swal from "sweetalert";

import {
  Grid,
  TextField,
  Button,
  InputAdornment,
  Paper,
  Typography,
  Avatar,
} from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import LoginImage from "../images/Login.jpg";

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email can not be blank")
    .email("Not a valid E-mail"),
  password: Yup.string().required("Password can not be blank"),
});

const Login = (props) => {
  const dispatch = useDispatch();

  const [btnloginMsg, setBtnLoginMsg] = useState("Login");

  const handleSubmit = (values, formikProps) => {
    setBtnLoginMsg("Logging in...Please wait.");
    const formData = {
      email: values.email,
      password: values.password,
    };
    //console.log(formData);
    const handleRedirect = () => {
      props.history.push("/");
      swal("Good job!", "Loggedin Successfully!", "success");
      dispatch(toggleStatus());
    };
    dispatch(startLoginUser(formData, handleRedirect));
    formikProps.resetForm();
  };
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src={LoginImage}
            style={{
              width: "100%",
              height: "60%",
              objectFit: "cover",
              marginTop: "15px",
            }}
            alt="notes-app"
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
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5">Login</Typography>
            </Grid>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSubmit}
              validationSchema={signInSchema}
            >
              {(props) => (
                <Form>
                  <Field
                    style={{ marginTop: "10px" }}
                    as={TextField}
                    label="Email"
                    placeholder="Enter email"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="email" />}
                    name="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    style={{ marginTop: "10px" }}
                    as={TextField}
                    required
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    fullWidth
                    name="password"
                    helperText={<ErrorMessage name="password" />}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockRounded />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    fullWidth
                    style={{ margin: "30px 0" }}
                    variant="contained"
                    margin="10px 0"
                  >
                    {btnloginMsg}
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

export default Login;
