import { applyMiddleware, legacy_createStore } from "redux";
import createSagaMW from "redux-saga" 
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '';
import rootSaga from '';

const sagaMW = createSagaMW();

const store=legacy_createStore(rootReducer,
  composeWithDevTools(applyMiddleware(sagaMW)));

sagaMW.run(rootSaga);

export default store;