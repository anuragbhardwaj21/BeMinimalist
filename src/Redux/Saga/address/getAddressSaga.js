import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import {
  getAddressFailure,
  getAddressSuccess,
} from "../../Action/address/getAddressAction.js"
import { GET_ADDRESS } from "../../Action/actionTypes";

function* getAddressRequest(action) {
  try {
    const { data } = yield API.get("/getaddress");

    if (data?.meta?.code === 200) {
      yield put(getAddressSuccess(data?.data));

      if (action?.payload?.callback) {
        yield call(action.payload.callback, data);
      }
    } else {
      yield put(getAddressFailure());
    }
  } catch (error) {
    yield put(getAddressFailure());
  }
}

export function* watchGetAddressAPI() {
  yield takeEvery(GET_ADDRESS, getAddressRequest);
}

export default function* addressSaga() {
  yield all([watchGetAddressAPI()]);
}
