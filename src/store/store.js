import { createStore } from "redux";
import globalReducers from "./reducers/globalReducers";

const store = createStore(globalReducers);

export default store;
