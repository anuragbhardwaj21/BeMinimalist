import { GET_ALL_PRODUCT, GET_ALL_PRODUCT_SUCCESS, GET_ALL_PRODUCT_FAILURE } from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  allProducts: {},
};

const allProductReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return { ...state, loading: true };
    case GET_ALL_PRODUCT_SUCCESS:
      return { ...state, allProducts: action?.payload, loading: false };
    case GET_ALL_PRODUCT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default allProductReducer;
