import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import { getHairProductSuccess, getHairProductFailure } from "../../Action/product/hairProductAction";
import { GET_HAIR_PRODUCT } from "../../Action/actionTypes";

function* getHairProductRequest(action) {
  try {
    const { page, perPage } = action.payload;
    
    const { data } = yield call(API.get, `/products/hair?page=${page}&perPage=${perPage}`);
    
    if (data) {
      yield put(getHairProductSuccess(data?.data));
      yield call(action?.payload?.callback, data?.data);
    } else {
      yield put(getHairProductFailure());
    }
  } catch (error) {
    yield put(getHairProductFailure());
  }
}

export function* watchgetHairProductAPI() {
  yield takeEvery(GET_HAIR_PRODUCT, getHairProductRequest);
}

export default function* rootSaga() {
  yield all([watchgetHairProductAPI()]);
}
