import React from "react";
import { startDeleteNotes } from "../actions/notesActions";
import { useDispatch } from "react-redux";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const NotesItem = (props) => {
  const { note } = props;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      dispatch(startDeleteNotes(id));
    }
  };
  return (
    <div>
      <Card style={{ minWidth: 275, marginTop: "10px" }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {note.title}
          </Typography>
          <Typography variant="body2" component="p">
            {note.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => {
              handleDelete(note._id);
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default NotesItem;
