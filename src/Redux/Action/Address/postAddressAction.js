import {
  POST_ADDRESS,
  POST_ADDRESS_SUCCESS,
  POST_ADDRESS_FAILURE,
} from "../actionTypes";

export const postAddress = (payload) => ({
  type: POST_ADDRESS,
  payload,
});

export const postAddressSuccess = (payload) => ({
  type: POST_ADDRESS_SUCCESS,
  payload,
});

export const postAddressFailure = () => ({
  type: POST_ADDRESS_FAILURE,
});
