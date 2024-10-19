import { GET_SKIN_PRODUCT, GET_SKIN_PRODUCT_SUCCESS, GET_SKIN_PRODUCT_FAILURE } from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  skinProducts: {},
};

const skinProductReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_SKIN_PRODUCT:
      return { ...state, loading: true };
    case GET_SKIN_PRODUCT_SUCCESS:
      return { ...state, skinProducts: action?.payload, loading: false };
    case GET_SKIN_PRODUCT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default skinProductReducer;
