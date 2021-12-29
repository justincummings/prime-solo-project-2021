import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createCard(action) {
    console.log('in card saga', action.payload);
    
        const response = yield axios({
            method: 'POST',
            url: '/api/addcard',
            data: action.payload
        })
        yield put({ type: 'FETCH_CARD'})
    }

function* cardSaga () {
    yield takeLatest('CREATE_CARD', createCard);
}


export default cardSaga;