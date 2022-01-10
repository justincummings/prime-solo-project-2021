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
            console.error('deleteCard error:', err);
        };
    }

    function* editCard(action){
        console.log('action.paylod:', action.payload);
        try{
            const response = yield axios({
                method: 'PUT',
                url: `api/addcard/${action.payload.user_id}`,
                data: action.payload
            })
            yield put({
                type: 'FETCH_CARD'
            })
        } catch (err) {
            console.error('editCard error', err);
        }
    }

    function* fetchOneCard(action) {
        try{
            const response = yield axios({
                method: 'GET',
                url: `api/addcard/${action.payload}`,
            })
            console.log('fetchOneCard response.data', response.data); 
            const cardToEdit = response.data
            yield put({
                type: 'SET_EDIT_REDUCER',
                payload: cardToEdit
            })
        } catch (err) {
            console.log(err)
        }
    }

function* cardSaga () {
    yield takeLatest('CREATE_CARD', createCard);
    yield takeLatest('FETCH_CARD', fetchCard);
    yield takeLatest('DELETE_CARD', deleteCard);
    yield takeLatest('EDIT_CARD', editCard);
    yield takeLatest('FETCH_ONE_CARD', fetchOneCard);
}

export default cardSaga;