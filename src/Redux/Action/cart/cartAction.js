import {
  GET_CART,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
} from "../actionTypes";

export const getCart = () => ({
  type: GET_CART,
});

export const getCartSuccess = (data) => ({
  type: GET_CART_SUCCESS,
  payload: data,
});

export const getCartFailure = () => ({
  type: GET_CART_FAILURE,
});


export const addToCart = (item, callback) => ({
  type: ADD_TO_CART,
  payload: item,
  callback,
});

export const addToCartSuccess = (data) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: data,
});

export const addToCartFailure = () => ({
  type: ADD_TO_CART_FAILURE,
});
