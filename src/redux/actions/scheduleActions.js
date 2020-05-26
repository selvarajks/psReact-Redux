import * as types from "./actionType";

export function createSchedule(schedule) {
  return { type: types.CREATE_SCHEDULE, schedule };
}
