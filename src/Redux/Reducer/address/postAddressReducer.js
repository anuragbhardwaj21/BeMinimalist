import {
    POST_ADDRESS,
    POST_ADDRESS_SUCCESS,
    POST_ADDRESS_FAILURE,
  } from "../../Action/actionTypes";
  
  const INIT_STATE = {
    loading: false,
    userAddress: [],
  };
  
  const postAddressReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case POST_ADDRESS:
        return { ...state, loading: true };
      case POST_ADDRESS_SUCCESS:
        return {
          ...state,
          userAddress: [...state.userAddress, action?.payload],
          loading: false,
        };
      case POST_ADDRESS_FAILURE:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default postAddressReducer;
  