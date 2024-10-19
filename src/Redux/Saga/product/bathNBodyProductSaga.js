import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import { getBathNBodyProductSuccess, getBathNBodyProductFailure } from "../../Action/product/bathNBodyProductAction";
import { GET_BATHNBODY_PRODUCT } from "../../Action/actionTypes";

function* getBathNBodyProductRequest(action) {
  try {
    const { page, perPage } = action.payload;
    
    const { data } = yield call(API.get, `/products/bathnbody?page=${page}&perPage=${perPage}`);
    
    if (data?.meta?.code === 200) {
      yield put(getBathNBodyProductSuccess(data?.data));
      yield call(action?.payload?.callback, data?.data);
    } else {
      yield put(getBathNBodyProductFailure());
    }
  } catch (error) {
    yield put(getBathNBodyProductFailure());
  }
}

export function* watchgetBathNBodyProductAPI() {
  yield takeEvery(GET_BATHNBODY_PRODUCT, getBathNBodyProductRequest);
}

export default function* rootSaga() {
  yield all([watchgetBathNBodyProductAPI()]);
}
