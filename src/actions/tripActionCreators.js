import ACTION_TYPES from "./";

export const getTripRequest = () =>({
  type:ACTION_TYPES.GET_TRIP_REQUEST,
})

export const getTripSuccess = (trips)=>({
  type:ACTION_TYPES.GET_TRIP_SUCCESS,
  payload:{trips},
})

export const getTripError = (error)=>({
  type:ACTION_TYPES.GET_TRIP_ERROR,
  payload:{error},
}) ;

export const createTripRequest = (trip)=>({
  type:ACTION_TYPES.CREATE_TRIP_REQUEST,
  payload:{trip},
})

export const createTripSuccess = (trip)=>({
  type:ACTION_TYPES.CREATE_TRIP_SUCCESS,
  payload:{trip},
})

export const createTripError = (error)=>({
  type:ACTION_TYPES.CREATE_TRIP_ERROR,
  payload:{error},
}) ;