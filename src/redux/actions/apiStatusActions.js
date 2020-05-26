import * as types from "./actionType";

export function beginApicall() {
  //return { type: types.CREATE_COURSE };
  return { type: types.BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: types.API_CALL_ERROR };
}
