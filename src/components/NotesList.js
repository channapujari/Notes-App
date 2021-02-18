import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Typography, Grid } from "@material-ui/core";

import { startGetNotes } from "../actions/notesActions";
import NotesItem from "./NotesItem";

const NotesList = (props) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(startGetNotes());
  }, []);

  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{ marginTop: "10px" }}
      >
        Notes List - {notes.length}
      </Typography>
      <Grid>
        {notes.map((note) => {
          return <NotesItem key={note._id} note={note} />;
        })}
      </Grid>
    </div>
  );
};

export default NotesList;
