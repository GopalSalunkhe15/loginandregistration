import { createStore } from "redux";
import LoginReducer from "./reducer";
const store = createStore(LoginReducer);

export default store;
