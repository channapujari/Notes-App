const initialUserStatus = {};

const userInfoReducer = (state = initialUserStatus, action) => {
  switch (action.type) {
    case "GET_USER": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default userInfoReducer;
