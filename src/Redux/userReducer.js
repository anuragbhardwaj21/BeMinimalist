// import {
//   SIGNUP_NEW_USER,
//   LOGIN_NEW_USER,
//   CURRENT_USER,
//   IS_AUTHENTICATED,
//   LOG_OUT_USER,
//   POST_USER_ADDRESS,
//   GET_USER_ADDRESS,
//   GET_USER_PERSONAL_DETAILS,
//   POST_USER_PERSONAL_DETAILS,
//   LOGIN_ERROR,
//   CLEAR_LOGIN_ERROR,
//   SIGNUP_FAILURE,
//   SIGNUP_SUCCESS,
//   LOGIN_FAILURE,
//   LOGIN_SUCCESS,
// } from "./Action/actionTypes";

// const initialState = {
//   loginError: false,
//   currentUser: JSON.parse(localStorage.getItem("userData")) || {},
//   isAuthenticated: localStorage.getItem("token") ? true : false,
//   signupSuccess: false,
//   loginSuccess: false,
//   loginFailure: false,
//   address: JSON.parse(localStorage.getItem("savedAddress")) || null,
//   personalDetails:
//     JSON.parse(localStorage.getItem("savedPersonalDetails")) || null,
// };

// const userReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case SIGNUP_NEW_USER:
//     case LOGIN_NEW_USER:
//     case CURRENT_USER:
//       return { ...state, currentUser: payload, isAuthenticated: true };
//     case SIGNUP_SUCCESS:
//       return { ...state, signupSuccess: true };
//     case SIGNUP_FAILURE:
//       return { ...state, signupSuccess: false };
//     case LOGIN_SUCCESS:
//       return { ...state, isAuthenticated: true, loginSuccess: true };
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         isAuthenticated: false,
//         loginSuccess: false,
//         loginFailure: true,
//       };
//     case LOG_OUT_USER:
//       return { ...state, currentUser: {}, isAuthenticated: false };
//     case LOGIN_ERROR:
//       return { ...state, loginError: payload };
//     case CLEAR_LOGIN_ERROR:
//       return { ...state, loginError: false };
//     case IS_AUTHENTICATED:
//       return { ...state, isAuthenticated: payload };
//     case POST_USER_ADDRESS:
//     case GET_USER_ADDRESS:
//       return {
//         ...state,
//         address: payload,
//       };

//     case GET_USER_PERSONAL_DETAILS:
//     case POST_USER_PERSONAL_DETAILS:
//       return {
//         ...state,
//         personalDetails: payload,
//       };
//     default:
//       return state;
//   }
// };

// export { userReducer };
