import {
  GET_ADDRESS,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAILURE,
} from "./../actionTypes";

export const getAddress = () => ({
  type: GET_ADDRESS,
});

export const getAddressSuccess = (payload) => ({
  type: GET_ADDRESS_SUCCESS,
  payload,
});

export const getAddressFailure = () => ({
  type: GET_ADDRESS_FAILURE,
});
