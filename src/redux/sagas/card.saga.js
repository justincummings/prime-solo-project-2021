import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createCard (action) {
    try {
        const response = yield axios({
            method: 'POST',
            url: '/api/addcard',
            data: action.payload
        })
        yield put({ type: 'FETCH_CARD'})
    } catch(err) {
        console.error('fetchCard error', err)
    }
}

function* fetchCard (action) {
        try {
            const response = yield axios({
                method: 'GET',
                url: '/api/addcard'
            })
            yield put({
                type: 'SET_CARD',
                payload: response.data
            })
        } catch(err) {
            console.error('fetchCard error', err)
        }
    }

function* fetchCardResponse (action) {
    console.log ('fetchCardResponse saga', action.payload);
    try {
        const response = yield axios({
            method: 'PUT',
            url: 'api/addcard'
        })
        yield put({
            type: 'FETCH_CARD_RESPONSE',
            payload: response.data
        }) 
    } catch(err) {
            console.error('fetchCardResponse error', err)
        }
    }

    function* deleteCard(action){
        try{
            const response = yield axios({
                method:'DELETE',
                url: `api/addcard/${action.payload}`
            })
            yield put ({
                type: 'FETCH_CARD'
            })
        } catch (err) {
            console.error('deleteItem error:', err);
        };
    }


function* cardSaga () {
    yield takeLatest('CREATE_CARD', createCard);
    yield takeLatest('FETCH_CARD', fetchCard);
    yield takeLatest('FETCH_CARD_RESPONSE', fetchCardResponse);
    yield takeLatest('DELETE_CARD', deleteCard);
}


export default cardSaga;