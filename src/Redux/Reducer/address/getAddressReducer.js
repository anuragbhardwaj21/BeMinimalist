import {
  GET_ADDRESS,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAILURE,
} from "../../Action/actionTypes";
import { getLocalStorageItem } from "../../../Utils/helper";

const INIT_STATE = {
  loading: false,
  userAddress: JSON.parse(getLocalStorageItem("userAddress")) || [],
};

const getAddressReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ADDRESS:
      return { ...state, loading: true };
    case GET_ADDRESS_SUCCESS:
      return {
        ...state,
        userAddress: action?.payload,
        loading: false,
      };
    case GET_ADDRESS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default getAddressReducer;
