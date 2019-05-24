import { put } from 'redux-saga/effects';
import axios from 'axios';

function* deletePlant(action) {
    try {
        yield axios.delete(`/api/plant/?id=${action.payload}`); // 
        yield put({
            type: 'GET_PLANTS'
        });
    } catch (err) {
        console.log('error HELP:', err);
    }
}

export default deletePlant;