import { call, put, takeEvery } from "redux-saga/effects";

// let callAPI = async ({ url, method, data }) => {
//   return await Axios({
//     url,
//     method,
//     data,
//   });
// };

// Our worker Saga: will perform the async increment task
function* fetchDataSaga() {
  // yield put(loader(true));
  // const url = "https://randomuser.me/api/?results=100";
  // try {
  //   let result = yield call(() => callAPI({ url: url }));
  //   yield put(fetchData(result.data));
  //   yield put(loader(false));
  // } catch (e) {
  //   yield put({ type: "TODO_FETCH_FAILED" });
  //   window.alert(e);
  //   yield put(loader(false));
  // }
}

export default function* rootSaga() {
  yield takeEvery("FETCH_DATA_SAGA", fetchDataSaga);
}
