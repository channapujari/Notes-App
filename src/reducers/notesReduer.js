const initialNotesState = [];
const notesReducer = (state = initialNotesState, action) => {
  switch (action.type) {
    case "GET_NOTES": {
      return [...action.payload];
    }
    case "ADD_NOTE": {
      return [action.payload, ...state];
    }
    case "DELETE_NOTE": {
      return state.filter((note) => {
        return note._id !== action.payload._id;
      });
    }
    default: {
      return [...state];
    }
  }
};

export default notesReducer;
