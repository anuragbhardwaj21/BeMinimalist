import {
  GET_HAIR_PRODUCT,
  GET_HAIR_PRODUCT_SUCCESS,
  GET_HAIR_PRODUCT_FAILURE,
} from "./../actionTypes";

export const getHairProduct = (payload) => ({
  type: GET_HAIR_PRODUCT,
  payload,
});

export const getHairProductSuccess = (payload) => ({
  type: GET_HAIR_PRODUCT_SUCCESS,
  payload,
});

export const getHairProductFailure = () => ({
  type: GET_HAIR_PRODUCT_FAILURE,
});
