import {takeEvery} from "redux-saga/effects";
import ACTION_TYPES from "../actions";
import { createTripSaga, deleteTripSaga, getTripSaga, updateTripSaga } from "./tripSaga";

export default function*  rootSaga(){
  yield takeEvery(ACTION_TYPES.CREATE_TRIP_REQUEST,createTripSaga);
  yield takeEvery(ACTION_TYPES.GET_TRIP_REQUEST,getTripSaga);
  yield takeEvery(ACTION_TYPES.UPDATE_TRIP_REQUEST,updateTripSaga);
  yield takeEvery(ACTION_TYPES.DELETE_TRIP_REQUEST,deleteTripSaga);
}