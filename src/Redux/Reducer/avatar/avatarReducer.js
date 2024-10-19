import {
  GET_AVATAR,
  GET_AVATAR_SUCCESS,
  GET_AVATAR_FAILURE,
  POST_AVATAR,
  POST_AVATAR_SUCCESS,
  POST_AVATAR_FAILURE,
} from "../../Action/actionTypes";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../../Utils/helper";

const INIT_STATE = {
  loading: false,
  avatarDetails: JSON.parse(getLocalStorageItem("avatarDetails")) || {},
};

const avatarReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_AVATAR:
    case POST_AVATAR:
      return { ...state, loading: true };

    case GET_AVATAR_SUCCESS:
    case POST_AVATAR_SUCCESS:
      setLocalStorageItem("avatarDetails", JSON.stringify(action.payload));
      return { ...state, avatarDetails: action.payload, loading: false };

    case GET_AVATAR_FAILURE:
    case POST_AVATAR_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default avatarReducer;
