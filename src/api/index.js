import axios from "axios";
import io from "socket.io-client";
import { SOCKET_EVENT } from '../constants';
import store from '../store';
import * as tripActionCreators from "../actions/tripActionCreators"

const baseURL = "localhost:5000";

const httpClient = axios.create({
  baseURL:`http://${baseURL}`
});

const socket = io(`ws://${baseURL}`,);

export const getTrip = () =>httpClient.get("/")

export const createTrip = (trip)=> socket.emit(SOCKET_EVENT.NEW_TRIP,trip);

socket.on(SOCKET_EVENT.NEW_TRIP,(trip)=>{
  store.dispatch(tripActionCreators.createTripSuccess(trip))
})
socket.on(SOCKET_EVENT.NEW_TRIP,(error)=>{
  store.dispatch(tripActionCreators.createTripError(error))
})

export const updateTrip = (trip)=>socket.emit(SOCKET_EVENT.UPDATE_TRIP,trip);

socket.on(SOCKET_EVENT.UPDATE_TRIP,(trip)=>{
  store.dispatch(tripActionCreators.updateTripSuccess(trip))
})
socket.on(SOCKET_EVENT.UPDATE_TRIP_ERROR,(error)=>{
  store.dispatch(tripActionCreators.updateTripError(error))
})

export const deleteTrip = (tripId) =>socket.emit(SOCKET_EVENT.DELETE_TRIP,tripId);

socket.on(SOCKET_EVENT.DELETE_TRIP,(tripId)=>{
  store.dispatch(tripActionCreators.deleteTripSuccess(tripId))
})
socket.on(SOCKET_EVENT.DELETE_TRIP_ERROR,(error)=>{
  store.dispatch(tripActionCreators.deleteTripError(error))
})



