 import { combineReducers } from "redux";
 import tripReducer from "./tripReducer";

 const rootReducer=combineReducers({
  trip : tripReducer,
 })

 export default rootReducer;