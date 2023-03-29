import {put} from "redux-saga/effects";

import * as tripActionCreators from "../actions/tripActionCreators";
import * as API from "../api"
export function* getTripSaga(action){
 try{
  const {data:{data},} = yield API.getTrip();
  yield put(tripActionCreators.getTripSuccess(data))
 }catch(error){
 yield put(tripActionCreators.getTripError(error))
 }
}

export function* createTripSaga(action){
  try{
    const {data:{data},} = yield API.createTrip(action.payload.trip);
    yield put(tripActionCreators.createTripSuccess(data))
   }catch(error){
   yield put(tripActionCreators.getTripError(error))
   }
}