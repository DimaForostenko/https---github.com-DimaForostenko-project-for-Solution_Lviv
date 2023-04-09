import axios from "axios";
import io from "socket.io-client";
import { SOCKET_EVENT } from '../constants';
import store from '../store';
import * as tripActionCreators from "../actions/tripActionCreators"

const baseURL = "localhost:5000";

const httpClient = axios.create({
  baseURL:`http://${baseURL}`
});

const socket = io(`ws://${baseURL}`,{transport:['websocket']});

export const getTrip = () =>httpClient.get("/")

export const createTrip = (trip)=> socket.emit(SOCKET_EVENT.NEW_TRIP,trip);

socket.on(SOCKET_EVENT.NEW_TRIP,(trip)=>{
  store.dispatch(tripActionCreators.createTripSuccess(trip))
})
socket.on(SOCKET_EVENT.NEW_TRIP,(error)=>{
  store.dispatch(tripActionCreators.createTripError(error))
})