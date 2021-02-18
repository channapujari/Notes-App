import React from "react";

import { Grid } from "@material-ui/core";

import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

const MyNotes = () => {
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <NotesList />
        </Grid>
        <Grid container item xs={12} sm={6} style={{ padding: 10 }}>
          <NotesForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default MyNotes;
