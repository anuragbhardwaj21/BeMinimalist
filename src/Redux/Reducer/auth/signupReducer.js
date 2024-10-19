import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,} from "../../Action/actionTypes";

const INIT_STATE = {
  loading: false,
  userData: {},
};

const signupReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, userData: action?.payload, loading: false };
    case SIGNUP_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default signupReducer;
