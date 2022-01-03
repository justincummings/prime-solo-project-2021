import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createCard(action) {
    console.log('in createCard saga', action.payload);

    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/addcard',
            data: action.payload
        })
        yield put({ type: 'FETCH_CARD'})
    } catch(err) {
        console.error('fetchCard error', error)
    }
}

function* fetchCard (action) {
    console.log('in fetchCard saga', action.payload);

        try {
            const response = yield axios({
                method: 'GET',
                url: '/api/user'
            })
            yield put({
                type: 'SET_CARD',
                payload: response.data
            })
        } catch(err) {
            console.error('fetchCard error', error)
        }
    }


function* cardSaga () {
    yield takeLatest('CREATE_CARD', createCard);
    yield takeLatest('FETCH_CARD', fetchCard);
}


export default cardSaga;