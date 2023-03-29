import produce from "immer";
import { DRAFT_STATE } from "immer/dist/internal";
import ACTION_TYPES from "../actions";

const initialState = {
  isFetching:false,
  error:null,
  trip:[]
}

export default function tripReducer(state=initialState,action){
  switch(action.type){
    case ACTION_TYPES.GET_TRIP_REQUEST:
    case ACTION_TYPES.CREATE_TRIP_REQUEST:{
      return produce(state, (draftState)=>{
        draftState.isFetching = true
      })
    }
    case ACTION_TYPES.GET_TRIP_ERROR:
    case ACTION_TYPES.CREATE_TRIP_ERROR:{
      const {payload:{error}}=action
      return produce(state, (draftState)=>{
        draftState.isFetching = false;
        draftState.error =error;
      })
    }
    case ACTION_TYPES.GET_TRIP_SUCCESS:{
      const {payload:{trip}}=action
      return produce(state, (draftState)=>{
        draftState.isFetching = false;
        draftState.trip.push(...trip);
      })
    }
    case ACTION_TYPES.CREATE_TRIP_SUCCESS:{
      return produce(state, (draftState)=>{
        draftState.isFetching = false
      })}
    default:{
      return state;
    }
  }
}