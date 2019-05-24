import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import deletePlant from './modules/redux/sagas/deletePlant';
import axios from 'axios';

// this startingPlantArray should eventually be removed

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return action.payload
    default:
      return state;
  }
};

function* getPlants() {
  try {
    const plantResponse = yield axios.get(`/api/plant`);
    yield put({
      type: 'ADD_PLANT',
      payload: plantResponse.data
    })
  } catch (err) {
    console.log('error HELP:', err)
  }
}

function* updatePlants() {
  try {
    const plantResponse = yield axios.put('/api/plant');
    yield put({
      type: 'GET_PLANTS',
      payload: plantResponse.data
    })
  } catch (err) {
    console.log(`error HELP: ${err}`)
  }
}

function* plantSaga() {
  yield takeEvery('GET_PLANTS', getPlants);
  yield takeEvery('POST_PLANT', postPlant);
  yield takeEvery('DELETE_PLANT', deletePlant);
  yield takeEvery('UPDATE_PLANT', updatePlants);

}

function* postPlant(action) {
  console.log(action.payload);
  try {
    yield axios.post('/api/plant', action.payload);
    yield put({
      type: 'GET_PLANTS'
    });
    console.log(action.payload);
  } catch (err) {
    console.log('error HELP:', err);
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(plantSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
