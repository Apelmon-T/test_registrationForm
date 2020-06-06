import { combineReducers, createStore } from "redux";
import usersReducer from "./usersReducer";
import { reducer as formReducer } from "redux-form";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
  usersPage: usersReducer,
  form: formReducer,
});

let store = createStore(reducers, composeWithDevTools());

window.store = store;

export default store;
