import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* merchFetchSaga() {
    yield takeLatest("SET_MERCHANDISE", grabMerchOnceAgain);
}

function* grabMerchOnceAgain() {
    yield put({type: "SET_MERCHANDISE_SUCCESSFUL", cartCount: 33})
}

export default merchFetchSaga;