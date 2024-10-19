import { GET_BATHNBODY_PRODUCT, GET_BATHNBODY_PRODUCT_SUCCESS, GET_BATHNBODY_PRODUCT_FAILURE } from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  bathNBodyProducts: {},
};

const bathNBodyProductReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_BATHNBODY_PRODUCT:
      return { ...state, loading: true };
    case GET_BATHNBODY_PRODUCT_SUCCESS:
      return { ...state, bathNBodyProducts: action?.payload, loading: false };
    case GET_BATHNBODY_PRODUCT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default bathNBodyProductReducer;
