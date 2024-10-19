import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import { signupFailure, signupSuccess } from "../../Action/auth/signupAction";
import { SIGNUP } from "../../Action/actionTypes";
import { setLocalStorageItem } from "../../../Utils/helper";

function* signupRequest(action) {
  try {

    const { data } = yield call(API.post, "/signup", action?.payload?.payload);
    
    if (data?.token) {
      yield put(signupSuccess(data?.data));
      yield call(setLocalStorageItem, "userData", JSON.stringify(data));
      yield call(setLocalStorageItem, "token", data?.token);
      yield call(action?.payload?.callback, data);
    } else {
      yield put(signupFailure());
    }
  } catch (error) {
    yield put(signupFailure());
  }
}

export function* watchSignupAPI() {
  yield takeEvery(SIGNUP, signupRequest);
}

export default function* rootSaga() {
  yield all([watchSignupAPI()]);
}
