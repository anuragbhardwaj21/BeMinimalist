import {
  GET_BATHNBODY_PRODUCT,
  GET_BATHNBODY_PRODUCT_SUCCESS,
  GET_BATHNBODY_PRODUCT_FAILURE,
} from "./../actionTypes";

export const getBathNBodyProduct = (payload) => ({
  type: GET_BATHNBODY_PRODUCT,
  payload,
});

export const getBathNBodyProductSuccess = (payload) => ({
  type: GET_BATHNBODY_PRODUCT_SUCCESS,
  payload,
});

export const getBathNBodyProductFailure = () => ({
  type: GET_BATHNBODY_PRODUCT_FAILURE,
});
