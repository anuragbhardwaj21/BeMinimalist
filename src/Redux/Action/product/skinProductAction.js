import {
  GET_SKIN_PRODUCT,
  GET_SKIN_PRODUCT_SUCCESS,
  GET_SKIN_PRODUCT_FAILURE,
} from "./../actionTypes";

export const getSkinProduct = (payload) => ({
  type: GET_SKIN_PRODUCT,
  payload,
});

export const getSkinProductSuccess = (payload) => ({
  type: GET_SKIN_PRODUCT_SUCCESS,
  payload,
});

export const getSkinProductFailure = () => ({
  type: GET_SKIN_PRODUCT_FAILURE,
});
