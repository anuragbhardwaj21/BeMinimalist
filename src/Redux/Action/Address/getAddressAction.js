import {
  GET_ADDRESS,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAILURE,
} from "../actionTypes";

export const getAddress = (payload) => ({
  type: GET_ADDRESS,
  payload
});

export const getAddressSuccess = (payload) => ({
  type: GET_ADDRESS_SUCCESS,
  payload,
});

export const getAddressFailure = () => ({
  type: GET_ADDRESS_FAILURE,
});
