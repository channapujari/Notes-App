import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { startPostNotes } from "../actions/notesActions";

import { Typography, Grid, TextField, Button } from "@material-ui/core";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const notesSchema = Yup.object().shape({
  title: Yup.string().required("Title can not be blank"),
  body: Yup.string().required("Body can not be blank"),
});

const NotesForm = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, formikProps) => {
    const note = {
      title: values.title,
      body: values.body,
    };
    dispatch(startPostNotes(note));
    formikProps.resetForm();
  };

  return (
    <div style={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="h4" gutterBottom align="center">
        Notes Form
      </Typography>
      <Grid align="center">
        <Formik
          initialValues={{ title: "", body: "" }}
          onSubmit={handleSubmit}
          validationSchema={notesSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="Title"
                required
                name="title"
                variant="outlined"
                fullWidth
                helperText={<ErrorMessage name="title" />}
              />
              <Field
                as={TextField}
                style={{ marginTop: "10px" }}
                id="outlined-multiline-static"
                fullWidth
                required
                label="Body"
                multiline
                rows={4}
                name="body"
                variant="outlined"
                helperText={<ErrorMessage name="body" />}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
              >
                Add Note
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </div>
  );
};

export default NotesForm;
