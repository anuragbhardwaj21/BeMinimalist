// import {
//   DEC_CART_QUANTITY,
//   DELETE_CART_PRODUCT,
//   GET_CART_FAILURE,
//   GET_CART_REQUEST,
//   GET_CART_SUCCESS,
//   INC_CART_QUANTITY,
//   POST_CART_PRODUCT,
//   CART_ITEM_ZERO,
// } from "./Action/actionTypes";

// const initState = {
//   cartProducts: JSON.parse(localStorage.getItem("cartItems")) || [],
//   isLoading: false,
//   isError: false,
// };

// const cartReducer = (state = initState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case GET_CART_REQUEST:
//       return { ...state, isLoading: true, isError: false };

//     case GET_CART_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         cartProducts: payload,
//       };

//     case GET_CART_FAILURE:
//       return { ...state, isLoading: false, isError: true };

//     case CART_ITEM_ZERO:
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         cartProducts: [],
//       };

//     case POST_CART_PRODUCT:
//       return {
//         ...state,
//         cartProducts: [...state.cartProducts, { ...payload, quantity: 1 }],
//       };

//     case DELETE_CART_PRODUCT:
//       const newProducts = state.cartProducts.filter(
//         (ele) => ele.id !== payload
//       );
//       return { ...state, cartProducts: newProducts };

//     case INC_CART_QUANTITY:
//       return {
//         ...state,
//         cartProducts: state.cartProducts.map((product) => {
//           if (product.id === payload && product.quantity < 10) {
//             return {
//               ...product,
//               quantity: product.quantity + 1,
//             };
//           }
//           return product;
//         }),
//       };

//     case DEC_CART_QUANTITY:
//       return {
//         ...state,
//         cartProducts: state.cartProducts.map((product) => {
//           if (product.id === payload && product.quantity > 1) {
//             return {
//               ...product,
//               quantity: product.quantity - 1,
//             };
//           }
//           return product;
//         }),
//       };

//     default:
//       return state;
//   }
// };

// export { cartReducer };
