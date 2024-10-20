import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import { toast } from "react-hot-toast";
import {
  postAddressSuccess,
  postAddressFailure,
} from "../../Action/address/postAddressAction";
import { POST_ADDRESS } from "../../Action/actionTypes";

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

function* postAddressRequest(action) {
  try {
    const { data } = yield call(() =>
      notifyPromise(
        API.post("/postaddress", action.payload),
        "Adding address...",
        (data) => `${data?.meta?.message || "Address added successfully."}`,
        (err) => `${err?.response?.data?.error?.message || "Failed to add address"}`
      )
    );

    if (data?.meta?.code === 200) {
      yield put(postAddressSuccess(data?.data));

      if (action?.payload?.callback) {
        yield call(action.payload.callback, data);
      }
    } else {
      yield put(postAddressFailure());
    }
  } catch (error) {
    yield put(postAddressFailure());
  }
}

export function* watchPostAddressAPI() {
  yield takeEvery(POST_ADDRESS, postAddressRequest);
}

export default function* postAddressSaga() {
  yield all([watchPostAddressAPI()]);
}
