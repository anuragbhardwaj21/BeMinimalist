// import {
//   GET_SKIN_PRODUCT_REQUEST,
//   GET_SKIN_PRODUCT_SUCCESS,
//   GET_SKIN_PRODUCT_FAILURE,
//   GET_HAIR_PRODUCT_REQUEST,
//   GET_HAIR_PRODUCT_SUCCESS,
//   GET_HAIR_PRODUCT_FAILURE,
//   GET_BATHNBODY_PRODUCT_REQUEST,
//   GET_BATHNBODY_PRODUCT_SUCCESS,
//   GET_BATHNBODY_PRODUCT_FAILURE,
//   GET_ALLPRODUCTS_PRODUCT_REQUEST,
//   GET_ALLPRODUCTS_PRODUCT_SUCCESS,
//   GET_ALLPRODUCTS_PRODUCT_FAILURE,
//   GET_SINGLE_PRODUCT_REQUEST,
//   GET_SINGLE_PRODUCT_SUCCESS,
//   GET_SINGLE_PRODUCT_FAILURE,
// } from "./Action/actionTypes";

// const initialState = {
//   allProducts: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   skinProducts: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   hairProducts: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   bathnBodyProducts: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   singleProduct: {
//     data: [],
//     loading: false,
//     error: null,
//   },
// };

// export const productReducer = (state = initialState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case GET_SKIN_PRODUCT_REQUEST:
//       return {
//         ...state,
//         skinProducts: {
//           ...state.skinProducts,
//           loading: true,
//         },
//       };
//     case GET_SKIN_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         skinProducts: {
//           data: payload,
//           loading: false,
//           error: null,
//         },
//       };
//     case GET_SKIN_PRODUCT_FAILURE:
//       return {
//         ...state,
//         skinProducts: {
//           data: [],
//           loading: false,
//           error: payload,
//         },
//       };
//     case GET_HAIR_PRODUCT_REQUEST:
//       return {
//         ...state,
//         hairProducts: {
//           ...state.hairProducts,
//           loading: true,
//         },
//       };
//     case GET_HAIR_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         hairProducts: {
//           data: payload,
//           loading: false,
//           error: null,
//         },
//       };
//     case GET_HAIR_PRODUCT_FAILURE:
//       return {
//         ...state,
//         hairProducts: {
//           data: [],
//           loading: false,
//           error: payload,
//         },
//       };
//     case GET_BATHNBODY_PRODUCT_REQUEST:
//       return {
//         ...state,
//         bathnBodyProducts: {
//           ...state.bathnBodyProducts,
//           loading: true,
//         },
//       };
//     case GET_BATHNBODY_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         bathnBodyProducts: {
//           data: payload,
//           loading: false,
//           error: null,
//         },
//       };
//     case GET_BATHNBODY_PRODUCT_FAILURE:
//       return {
//         ...state,
//         bathnBodyProducts: {
//           data: [],
//           loading: false,
//           error: payload,
//         },
//       };
//     case GET_ALLPRODUCTS_PRODUCT_REQUEST:
//       return {
//         ...state,
//         allProducts: {
//           ...state.allProducts,
//           loading: true,
//         },
//       };
//     case GET_ALLPRODUCTS_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         allProducts: {
//           data: payload,
//           loading: false,
//           error: null,
//         },
//       };
//     case GET_ALLPRODUCTS_PRODUCT_FAILURE:
//       return {
//         ...state,
//         allProducts: {
//           data: [],
//           loading: false,
//           error: payload,
//         },
//       };
//     case GET_SINGLE_PRODUCT_REQUEST:
//       return {
//         ...state,
//         singleProduct: {
//           ...state.singleProduct,
//           loading: true,
//         },
//       };
//     case GET_SINGLE_PRODUCT_SUCCESS:
//       return {
//         ...state,
//         singleProduct: {
//           data: payload,
//           loading: false,
//           error: null,
//         },
//       };
//     case GET_SINGLE_PRODUCT_FAILURE:
//       return {
//         ...state,
//         singleProduct: {
//           data: [],
//           loading: false,
//           error: payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
