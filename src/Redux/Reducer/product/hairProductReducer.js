import { GET_HAIR_PRODUCT, GET_HAIR_PRODUCT_SUCCESS, GET_HAIR_PRODUCT_FAILURE } from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  hairProducts: {},
};

const hairProductReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_HAIR_PRODUCT:
      return { ...state, loading: true };
    case GET_HAIR_PRODUCT_SUCCESS:
      return { ...state, hairProducts: action?.payload, loading: false };
    case GET_HAIR_PRODUCT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default hairProductReducer;
