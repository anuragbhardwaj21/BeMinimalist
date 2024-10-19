import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import { setLocalStorageItem } from "../../../Utils/helper";
import { loginFailure, loginSuccess } from "../../Action/auth/loginAction";
import { LOGIN } from "../../Action/actionTypes";
import { toast } from "react-hot-toast";

export const notifyPromise = (promise) => {
  return toast.promise(promise, {
    loading: "Logging in...",
    success: (data) =>
      `${data?.data?.meta?.message || "Logged in Successfully."}`,
    error: (err) => `${err?.response?.data?.error?.message || "Login failed"}`,
  });
};

function* loginRequest(action) {
  try {
    const { data } = yield notifyPromise(
      API.post("/login", action?.payload?.payload)
    );

    if (data?.meta?.code === 200) {
      yield put(loginSuccess(data?.data));
      yield call(setLocalStorageItem, "userData", JSON.stringify(data?.data));
      yield call(setLocalStorageItem, "token", data?.meta?.token);

      if (action?.payload?.callback) {
        yield call(action.payload.callback, data);
      }
    } else {
      yield put(loginFailure());
    }
  } catch (error) {
    yield put(loginFailure());
  }
}

export function* watchLoginAPI() {
  yield takeEvery(LOGIN, loginRequest);
}

export default function* rootSaga() {
  yield all([watchLoginAPI()]);
}
