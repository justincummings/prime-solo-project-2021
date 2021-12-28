import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createCard (action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: 'api/addcard',
            data: action.payload
        })
        yield put({ type: 'FETCH_CARD'})
    } catch(err) {
        console.error('Create card error', err)
    }
}

function* cardSaga () {
    yield takeLatest('CREATE_CARD', createCard);
}


export default cardSaga;