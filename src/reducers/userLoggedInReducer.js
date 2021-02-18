const userLoggedInstate = false;

const userLoggedInReducer = (state = userLoggedInstate, action) => {
  switch (action.type) {
    case "TOGGLE_STATE": {
      return !state;
    }
    default: {
      return state;
    }
  }
};

export default userLoggedInReducer;
