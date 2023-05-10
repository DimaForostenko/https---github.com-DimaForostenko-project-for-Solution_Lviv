import {put} from "redux-saga/effects";
import * as tripActionCreators from "../actions/tripActionCreators";
import * as API from "../api";

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
   yield put(tripActionCreators.createTripError(error))
   }
}
export function* updateTripSaga(action) {
  try {
    const { data:{data}, } = yield API.updateTrip(action.payload.trip);
    yield put(tripActionCreators.updateTripSuccess(data));
  } catch (error) {
    yield put(tripActionCreators.updateTripError(error));
  }
}

export function* deleteTripSaga(action) {
  try {
    const { data :{data},} = yield API.deleteTrip(action.payload.tripId);
    yield put(tripActionCreators.deleteTripSuccess(data));
  } catch (error) {
    yield put(tripActionCreators.deleteTripError(error));
  }
}