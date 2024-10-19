import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../../Action/actionTypes";
import { LOGOUT_SUCCESS } from "../../Action/actionTypes";
import {getLocalStorageItem } from "../../../Utils/helper";

const INIT_STATE = {
  loading: false,
  userData: JSON.parse(getLocalStorageItem("userData")) || {},
};

const loginReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, userData: action?.payload, loading: false };
    case LOGIN_FAILURE:
      return { ...state, loading: false };
    case LOGOUT_SUCCESS:
      return { ...state, userData: {}, loading: false };
    default:
      return state;
  }
};

export default loginReducer;
