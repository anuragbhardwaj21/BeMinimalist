import { combineReducers } from "redux";

import Login from "./auth/loginReducer";
import Logout from "./auth/logoutReducer";
import Signup from "./auth/signupReducer";
import GetSkinProduct from "./product/skinProductReducer";
import GetHairProduct from "./product/hairProductReducer";
import GetBathNBodyProduct from "./product/bathNBodyProductReducer";
import GetALLProduct from "./product/allProductReducer";
import GetCart from "./cart/cartReducer";
import GetAvatar from "./avatar/avatarReducer";

const appReducer = combineReducers({
  Login,
  Logout,
  Signup,
  GetSkinProduct,
  GetHairProduct,
  GetBathNBodyProduct,
  GetALLProduct,
  GetCart,
  GetAvatar,
});

const reducers = (state, action) => {
  return appReducer(state, action);
};

export default reducers;
