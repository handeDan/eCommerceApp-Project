import { ADD_CART } from "../actions/cartAction";

const initialState = {
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return {};
    default:
      return state;
  }
}
