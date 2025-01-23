export const ADD_CART = "ADD_CART";

export const addFavorite = (item) => {
  return { type: ADD_CART, payload: item };
};
//item=furniture
