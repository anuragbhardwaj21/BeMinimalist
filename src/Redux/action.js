// import axios from "axios";
// import {
//   GET_SKIN_PRODUCT_REQUEST,
//   GET_HAIR_PRODUCT_REQUEST,
//   GET_BATHNBODY_PRODUCT_REQUEST,
//   GET_ALLPRODUCTS_PRODUCT_REQUEST,
//   GET_SKIN_PRODUCT_SUCCESS,
//   GET_HAIR_PRODUCT_SUCCESS,
//   GET_BATHNBODY_PRODUCT_SUCCESS,
//   GET_ALLPRODUCTS_PRODUCT_SUCCESS,
//   GET_SKIN_PRODUCT_FAILURE,
//   GET_HAIR_PRODUCT_FAILURE,
//   GET_BATHNBODY_PRODUCT_FAILURE,
//   GET_ALLPRODUCTS_PRODUCT_FAILURE,
//   GET_SINGLE_PRODUCT_REQUEST,
//   GET_SINGLE_PRODUCT_SUCCESS,
//   GET_SINGLE_PRODUCT_FAILURE,
//   GET_CART_REQUEST,
//   GET_CART_SUCCESS,
//   GET_CART_FAILURE,
//   POST_CART_PRODUCT,
//   DELETE_CART_PRODUCT,
//   INC_CART_QUANTITY,
//   DEC_CART_QUANTITY,
//   SIGNUP_NEW_USER,
//   LOGIN_NEW_USER,
//   CURRENT_USER,
//   IS_AUTHENTICATED,
//   LOG_OUT_USER,
//   LOGIN_ERROR,
//   POST_USER_ADDRESS,
//   GET_USER_ADDRESS,
//   GET_USER_PERSONAL_DETAILS,
//   POST_USER_PERSONAL_DETAILS,
//   CLEAR_LOGIN_ERROR,
//   CART_ITEM_ZERO,
//   SIGNUP_SUCCESS,
//   SIGNUP_FAILURE,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
// } from "./Action/actionTypes";

// // User actions

// export const loginUser = (email, password) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "https://beminimalist.onrender.com/login",
//       { email, password }
//     );

//     if (response.status === 200) {
//       const { username, userid, token } = response.data;
//       const userData = { username, userid, token };
//       localStorage.setItem("token", token);
//       localStorage.setItem("userData", JSON.stringify(userData));
//       dispatch({ type: LOGIN_SUCCESS });
//     } else {
//       dispatch({ type: LOGIN_FAILURE });
//     }
//   } catch (error) {
//     dispatch({ type: LOGIN_FAILURE });
//   }
// };

// export const signupNewUser = (userData) => ({
//   type: SIGNUP_NEW_USER,
//   payload: userData,
// });

// export const loginNewUser = (userData) => ({
//   type: LOGIN_NEW_USER,
//   payload: userData,
// });

// export const setCurrentUser = (userData) => ({
//   type: CURRENT_USER,
//   payload: userData,
// });

// export const setIsAuthenticated = (value) => ({
//   type: IS_AUTHENTICATED,
//   payload: value,
// });

// export const logOutUser = () => ({
//   type: LOG_OUT_USER,
// });
// export const loginError = (value) => ({
//   type: LOGIN_ERROR,
//   payload: value,
// });
// export const clearLoginError = () => ({
//   type: CLEAR_LOGIN_ERROR,
// });

// export const signupUser = (name, email, password) => (dispatch) => {
//   axios
//     .post("https://beminimalist.onrender.com/signup", { name, email, password })
//     .then((response) => {
//       const { username, userid, token } = response.data;
//       const userData = { username, userid, token };

//       localStorage.setItem("token", token);
//       localStorage.setItem("userData", JSON.stringify(userData));
//       dispatch(signupNewUser(userData));
//       dispatch(setCurrentUser(userData));
//       dispatch(setIsAuthenticated(true));

//       dispatch(getUserAddress());
//       dispatch(getUserPersonalDetails());
//     })
//     .catch((error) => {
//       console.error("Error");
//     });
// };

// export const login = (email, password) => (dispatch) => {
//   axios
//     .post("https://beminimalist.onrender.com/login", { email, password })
//     .then((response) => {
//       dispatch(loginError(false));
//       const { username, userid, token } = response.data;
//       const userData = { username, userid, token };
//       localStorage.setItem("token", token);
//       localStorage.setItem("userData", JSON.stringify(userData));
//       dispatch(loginNewUser(userData));
//       dispatch(setCurrentUser(userData));
//       dispatch(setIsAuthenticated(true));
//       dispatch(getCartProducts);
//       dispatch(getUserAddress());
//       dispatch(getUserPersonalDetails());
//     })
//     .catch((error) => {
//       dispatch(loginError(true));
//     });
// };

// export const logoutUser = () => (dispatch) => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("savedAddress");
//   localStorage.removeItem("savedPersonalDetails");
//   localStorage.removeItem("userData");
//   localStorage.removeItem("cartItems");
//   dispatch(getCartProducts);
//   dispatch(logOutUser());
//   dispatch({ type: LOGIN_FAILURE });
//   dispatch(setIsAuthenticated(false));
// };

// export const postUserAddress = (addressData) => (dispatch) => {
//   const token = localStorage.getItem("token");
//   axios
//     .post("https://cyclestore.onrender.com/addaddress", addressData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       dispatch({
//         type: POST_USER_ADDRESS,
//         payload: res.data,
//       });
//       dispatch(getUserAddress());
//     })
//     .catch((error) => {
//       console.error("Error posting user address:", error);
//     });
// };

// export const getUserAddress = () => (dispatch) => {
//   const token = localStorage.getItem("token");
//   axios
//     .get("https://cyclestore.onrender.com/getaddress", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       dispatch({
//         type: GET_USER_ADDRESS,
//         payload: res.data.address,
//       });
//       localStorage.setItem("savedAddress", JSON.stringify(res.data.address));
//     })
//     .catch((error) => {
//       console.error("Error fetching user address:", error);
//     });
// };

// export const getUserPersonalDetails = () => (dispatch) => {
//   const token = localStorage.getItem("token");
//   axios
//     .get("https://cyclestore.onrender.com/getdetails", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       dispatch({
//         type: GET_USER_PERSONAL_DETAILS,
//         payload: res.data.personalDetails,
//       });
//       localStorage.setItem(
//         "savedPersonalDetails",
//         JSON.stringify(res.data.personalDetails)
//       );
//     })
//     .catch((error) => {
//       console.error("Error fetching user personal details:", error);
//     });
// };

// export const postUserPersonalDetails = (personalData) => (dispatch) => {
//   const token = localStorage.getItem("token");
//   axios
//     .post("https://cyclestore.onrender.com/adddetails", personalData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       dispatch({
//         type: POST_USER_PERSONAL_DETAILS,
//         payload: res.data,
//       });
//       dispatch(getUserPersonalDetails());
//     })
//     .catch((error) => {
//       console.error("Error posting user personal details:", error);
//     });
// };

// // cart
// const getCartDataRequestAction = () => {
//   return {
//     type: GET_CART_REQUEST,
//   };
// };
// const getCartDataSuccessAction = (payload) => {
//   return {
//     type: GET_CART_SUCCESS,
//     payload,
//   };
// };
// const clearCart = (payload) => {
//   return {
//     type: CART_ITEM_ZERO,
//     payload,
//   };
// };

// const getCartDataFailureAction = () => {
//   return {
//     type: GET_CART_FAILURE,
//   };
// };
// const postCartDataAction = (payload) => {
//   return {
//     type: POST_CART_PRODUCT,
//     payload,
//   };
// };
// const deleteCartDataAction = (payload) => {
//   return {
//     type: DELETE_CART_PRODUCT,
//     payload,
//   };
// };
// const incrementCartQuantityAction = (payload) => {
//   return {
//     type: INC_CART_QUANTITY,
//     payload,
//   };
// };
// const decrementCartQuantityAction = (payload) => {
//   return {
//     type: DEC_CART_QUANTITY,
//     payload,
//   };
// };

// export const getCartProducts = (dispatch) => {
//   dispatch(getCartDataRequestAction());

//   const token = localStorage.getItem("token");

//   axios
//     .get("https://beminimalist.onrender.com/cart", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       dispatch(getCartDataSuccessAction(res.data.cart));
//       localStorage.setItem("cartItems", JSON.stringify(res.data.cart));
//     })
//     .catch(() => dispatch(getCartDataFailureAction()));
// };

// export const postCartProduct = (input) => (dispatch) => {
//   const productIds = [input.id];
//   const token = localStorage.getItem("token");

//   axios
//     .post(
//       `https://beminimalist.onrender.com/cart/add`,
//       { productIds },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//     .then((res) => {
//       dispatch(postCartDataAction(res.data));
//       dispatch(getCartProducts);
//     })
//     .catch((error) => {
//       console.error(error);
//       dispatch(getCartDataFailureAction());
//     });
// };

// export const deleteCartProduct = (productIds) => (dispatch) => {
//   const token = localStorage.getItem("token");

//   axios
//     .post(
//       "https://beminimalist.onrender.com/cart/remove",
//       { productIds },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//     .then((res) => {
//       dispatch(deleteCartDataAction(productIds));
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// export const incCartQuantity = (id) => (dispatch) => {
//   dispatch(incrementCartQuantityAction(id));
// };

// export const decCartQuantity = (id) => (dispatch) => {
//   dispatch(decrementCartQuantityAction(id));
// };

// // products

// const API_BASE_URL = "https://beminimalist.onrender.com/products/";

// export const getSkinProducts = () => async (dispatch) => {
//   dispatch({ type: GET_SKIN_PRODUCT_REQUEST });
//   try {
//     const response = await axios.get(`${API_BASE_URL}skin`);
//     dispatch({
//       type: GET_SKIN_PRODUCT_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_SKIN_PRODUCT_FAILURE,
//       payload: error.message,
//     });
//   }
// };

// export const getHairProducts = () => async (dispatch) => {
//   dispatch({ type: GET_HAIR_PRODUCT_REQUEST });
//   try {
//     const response = await axios.get(`${API_BASE_URL}hair`);
//     dispatch({
//       type: GET_HAIR_PRODUCT_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_HAIR_PRODUCT_FAILURE,
//       payload: error.message,
//     });
//   }
// };

// export const getBathnBodyProducts = () => async (dispatch) => {
//   dispatch({ type: GET_BATHNBODY_PRODUCT_REQUEST });
//   try {
//     const response = await axios.get(`${API_BASE_URL}bathnbody`);
//     dispatch({
//       type: GET_BATHNBODY_PRODUCT_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_BATHNBODY_PRODUCT_FAILURE,
//       payload: error.message,
//     });
//   }
// };

// export const getAllProducts = () => async (dispatch) => {
//   dispatch({ type: GET_ALLPRODUCTS_PRODUCT_REQUEST });
//   try {
//     const response = await axios.get(`${API_BASE_URL}`);
//     dispatch({
//       type: GET_ALLPRODUCTS_PRODUCT_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_ALLPRODUCTS_PRODUCT_FAILURE,
//       payload: error.message,
//     });
//   }
// };

// export const getSingleProduct = (value) => async (dispatch) => {
//   dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
//   try {
//     const response = await axios.get(`${API_BASE_URL}${value}`);
//     localStorage.setItem(
//       "product-detail-beminimalist",
//       JSON.stringify(response.data)
//     );
//     dispatch({
//       type: GET_SINGLE_PRODUCT_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_SINGLE_PRODUCT_FAILURE,
//       payload: error.message,
//     });
//   }
// };
