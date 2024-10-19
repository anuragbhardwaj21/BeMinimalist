import {
    GET_ALL_PRODUCT,
    GET_ALL_PRODUCT_SUCCESS,
    GET_ALL_PRODUCT_FAILURE,
  } from "./../actionTypes";
  
  export const getAllProduct = (payload) => ({
    type: GET_ALL_PRODUCT,
    payload,
  });
  
  export const getAllProductSuccess = (payload) => ({
    type: GET_ALL_PRODUCT_SUCCESS,
    payload,
  });
  
  export const getAllProductFailure = () => ({
    type: GET_ALL_PRODUCT_FAILURE,
  });
  