import * as types from "../redux/actions/actionType";

export default function scheduleReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_SCHEDULE:
      return [...state, { ...action.schedule }];
    default:
      return state;
  }
}
