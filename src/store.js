import { applyMiddleware, legacy_createStore } from "redux";
import createSagaMW from "redux-saga" 
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import rootSaga from './sagas/index';

const sagaMW = createSagaMW();

const store=legacy_createStore(rootReducer,
  //applyMiddleware(sagaMW));
  composeWithDevTools(applyMiddleware(sagaMW)));
  
sagaMW.run(rootSaga);

export default store;