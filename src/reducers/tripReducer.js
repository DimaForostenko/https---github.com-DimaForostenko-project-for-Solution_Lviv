import produce from "immer";
import ACTION_TYPES from "../actions";

const initialState = {
  isFetching: false,
  error: null,
  trips: [],
};

export default function tripReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_TRIP_REQUEST:
    case ACTION_TYPES.CREATE_TRIP_REQUEST:
    case ACTION_TYPES.UPDATE_TRIP_REQUEST:
    case ACTION_TYPES.DELETE_TRIP_REQUEST: {
      return produce(state, (draftState) => {
        draftState.isFetching = true;
      });
    }
    case ACTION_TYPES.GET_TRIP_ERROR:
    case ACTION_TYPES.CREATE_TRIP_ERROR:
    case ACTION_TYPES.UPDATE_TRIP_ERROR:
    case ACTION_TYPES.DELETE_TRIP_ERROR: {
      const {
        payload: { error },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.error = error;
      });
    }
    case ACTION_TYPES.GET_TRIP_SUCCESS: {
      const {
        payload: { trips },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.trips.push(...trips);
      });
    }
    case ACTION_TYPES.CREATE_TRIP_SUCCESS: {
      const {
        payload: { trip },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.trips.push(trip);
      });
    }
    case ACTION_TYPES.UPDATE_TRIP_SUCCESS: {
      const {
        payload: { trip },
      } = action;
      return produce(state, (draftState) => {
        const index = draftState.trips.findIndex(
          (t) => t._id === trip._id
        );
        if (index !== -1) {
          draftState.trips[index] = trip;
        }
        draftState.isFetching = false;
      });
    }
    case ACTION_TYPES.DELETE_TRIP_SUCCESS: {
      const {
        payload: { tripId },
      } = action;
      return produce(state, (draftState) => {
        draftState.isFetching = false;
        draftState.trips.filter((t) => t._id !== tripId);
      });
    }
    default: {
      return state;
    }
  }
}