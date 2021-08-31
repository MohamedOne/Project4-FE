import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* merchFetchSaga() : any {
    yield takeLatest("SET_GET_MERCHANDISE", grabMerchOnceAgain);
}

function* grabMerchOnceAgain() : any {
    const body = yield call(()=> {
        axios.get('https://wi6pqlczjk.execute-api.us-east-1.amazonaws.com/StageZero/merch')
    }, )
    yield put({type: "SET_MERCHANDISE", payload : { merchandise : body}})
}

export default merchFetchSaga;