import {
    GET_CART,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
    ADD_TO_CART,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
  } from "../../Action/actionTypes";
  import { getLocalStorageItem, setLocalStorageItem } from "../../../Utils/helper";
  
  const INIT_STATE = {
    loading: false,
    cartData: JSON.parse(getLocalStorageItem("cartData")) || {},
  };
  
  const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_CART:
      case ADD_TO_CART:
        return { ...state, loading: true };
  
      case GET_CART_SUCCESS:
      case ADD_TO_CART_SUCCESS:
        setLocalStorageItem("cartData", JSON.stringify(action.payload));
        return { ...state, cartData: action.payload, loading: false };
  
      case GET_CART_FAILURE:
      case ADD_TO_CART_FAILURE:
        return { ...state, loading: false };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  