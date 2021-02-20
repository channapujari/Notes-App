import axios from "axios";

const getNotes = (notes) => {
  return {
    type: "GET_NOTES",
    payload: notes,
  };
};
export const startGetNotes = () => {
  return (dispatch) => {
    axios
      .get("http://dct-user-auth.herokuapp.com/api/notes", {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const notes = response.data;
        //console.log(notes);
        dispatch(getNotes(notes));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const deleteNotes = (note) => {
  return {
    type: "DELETE_NOTE",
    payload: note,
  };
};

export const startDeleteNotes = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(deleteNotes(response.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const postNotes = (note) => {
  return {
    type: "ADD_NOTE",
    payload: note,
  };
};
export const startPostNotes = (note) => {
  return (dispatch) => {
    axios
      .post("http://dct-user-auth.herokuapp.com/api/notes", note, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(postNotes(response.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
