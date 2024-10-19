import { all, call, put, takeEvery } from "redux-saga/effects";
import { notifySuccess, removeLocalStorageItem } from "../../../Utils/helper";
import { logoutSuccess, logoutFailure } from "../../Action/auth/logoutAction";
import { LOGOUT } from "../../Action/actionTypes";
import API from "../../../Utils/api";

function* logoutRequest(action) {
  try {
    const { data } = yield call(API.post, "/logout", action?.payload?.payload);

    yield call(removeLocalStorageItem, "userData");
    yield call(removeLocalStorageItem, "avatarDetails");
    yield call(removeLocalStorageItem, "cartData");
    yield call(removeLocalStorageItem, "token");

    yield put(logoutSuccess());
    notifySuccess("Logged out successfully.");
    if (action?.callback) {
      yield call(action.callback);
    }
  } catch (error) {
    yield put(logoutFailure());
  }
}

export function* watchLogoutAPI() {
  yield takeEvery(LOGOUT, logoutRequest);
}

export default function* rootSaga() {
  yield all([watchLogoutAPI()]);
}
