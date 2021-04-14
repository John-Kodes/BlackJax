import { combineReducers } from "redux";
import cardReducer from "./cardReducer";

const allReducers = combineReducers({
  drawnCards: cardReducer,
});

export default allReducers;
