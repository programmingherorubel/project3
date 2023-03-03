import {
  ADD_TO_CART,
  CREATE_PRODUCT,
  DECREMENT,
  DELETE_CART,
  INCREMENT,
} from "./actionType";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    payload: product,
  };
};

export const incrementQuantity = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};
export const decrementQuantity = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};

export const deleteItemCart = (id) => {
  return {
    type: DELETE_CART,
    payload: id,
  };
};
