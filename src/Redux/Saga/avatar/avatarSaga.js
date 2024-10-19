import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import { toast } from "react-hot-toast";
import {
  getAvatarFailure,
  getAvatarSuccess,
  postAvatarSuccess,
  postAvatarFailure,
} from "../../Action/avatar/avatarAction";
import { GET_AVATAR, POST_AVATAR } from "../../Action/actionTypes";

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

function* getAvatarRequest() {
  try {
    const { data } = yield API.get("/getavatar");

    if (data?.meta?.code === 200) {
      yield put(getAvatarSuccess(data?.data));
    } else {
      yield put(getAvatarFailure());
    }
  } catch (error) {
    yield put(getAvatarFailure());
  }
}

function* postAvatarRequest(action) {
  try {
    
    const { data } = yield notifyPromise(
      API.post("/postavatar", action.payload.config),
      "Saving your avatar...",
      (data) => `${data?.meta?.message || "Avatar saved successfully."}`,
      (err) =>
        `${err?.response?.data?.error?.message || "Failed to save your avatar."}`
    );

    if (data?.meta?.code === 200) {
      yield put(postAvatarSuccess(data?.data));
      
      if (action?.payload?.callback) {
        yield call(action?.payload?.callback, data);
      }
    } else {
      yield put(postAvatarFailure());
    }
  } catch (error) {
    yield put(postAvatarFailure());
  }
}

export function* watchGetAvatarAPI() {
  yield takeEvery(GET_AVATAR, getAvatarRequest);
}

export function* watchAddToAvatarAPI() {
  yield takeEvery(POST_AVATAR, postAvatarRequest);
}

export default function* avatarSaga() {
  yield all([watchGetAvatarAPI(), watchAddToAvatarAPI()]);
}
