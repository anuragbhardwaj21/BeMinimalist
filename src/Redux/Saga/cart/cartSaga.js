import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import { toast } from "react-hot-toast";
import {
  getCartFailure,
  getCartSuccess,
  addToCartSuccess,
  addToCartFailure,
} from "../../Action/cart/cartAction";
import { GET_CART, ADD_TO_CART } from "../../Action/actionTypes";

export const notifyPromise = (
  promise,
  loadingMessage,
  successMessage,
  errorMessage
) => {
  return toast.promise(promise, {
    loading: loadingMessage,
    success: successMessage,
    error: errorMessage,
  });
};

function* getCartRequest() {
  try {
    const { data } = yield API.get("/cart");

    if (data?.meta?.code === 200) {
      yield put(getCartSuccess(data?.data));
    } else {
      yield put(getCartFailure());
    }
  } catch (error) {
    yield put(getCartFailure());
  }
}

function* addToCartRequest(action) {
  try {
    const { data } = yield notifyPromise(
      API.post("/cart/add", action.payload),
      "Adding item to cart...",
      (data) => `${data?.meta?.message || "Item added to cart successfully."}`,
      (err) =>
        `${err?.response?.data?.error?.message || "Failed to add item to cart"}`
    );

    if (data?.meta?.code === 200) {
      yield put(addToCartSuccess(data?.data));

      if (action?.payload?.callback) {
        yield call(action?.payload?.callback, data);
      }
    } else {
      yield put(addToCartFailure());
    }
  } catch (error) {
    yield put(addToCartFailure());
  }
}


export function* watchGetCartAPI() {
  yield takeEvery(GET_CART, getCartRequest);
}

export function* watchAddToCartAPI() {
  yield takeEvery(ADD_TO_CART, addToCartRequest);
}

export default function* cartSaga() {
  yield all([watchGetCartAPI(), watchAddToCartAPI()]);
}
