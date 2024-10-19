import { all, call, put, takeEvery } from "redux-saga/effects";
import API from "../../../Utils/api";
import { getAllProductSuccess, getAllProductFailure } from "../../Action/product/allProductAction";
import { GET_ALL_PRODUCT } from "../../Action/actionTypes";

function* getAllProductRequest(action) {
  try {
    const { page, perPage } = action.payload;

    const { data } = yield call(API.get, `/products?page=${page}&perPage=${perPage}`);
    
    if (data?.meta?.code === 200) {
      yield put(getAllProductSuccess(data?.data));
      yield call(action?.payload?.callback, data?.data);
    } else {
      yield put(getAllProductFailure());
    }
  } catch (error) {
    yield put(getAllProductFailure());
  }
}

export function* watchgetAllProductAPI() {
  yield takeEvery(GET_ALL_PRODUCT, getAllProductRequest);
}

export default function* rootSaga() {
  yield all([watchgetAllProductAPI()]);
}
