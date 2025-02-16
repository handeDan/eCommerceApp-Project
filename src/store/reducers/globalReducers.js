import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const globalReducers = combineReducers({
  cart: cartReducer,
});

export default globalReducers;
