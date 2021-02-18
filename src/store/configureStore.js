import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import notesReducer from "../reducers/notesReduer";
import userLoggedInReducer from "../reducers/userLoggedInReducer";
import userInfoReducer from "../reducers/userInfoReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      isUserLoggedIn: userLoggedInReducer,
      user: userInfoReducer,
      notes: notesReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configureStore;
