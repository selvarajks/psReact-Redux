import { combineReducers } from "redux";
import courses from "./courseReducer";
import schedule from "./scheduleReducer";
import authors from "./AuthorReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  schedule,
  apiCallsInProgress,
});

export default rootReducer;
