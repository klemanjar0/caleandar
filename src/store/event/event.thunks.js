import nextId from "react-id-generator";

import {
  createEvent,
  deleteEvent
} from './event.reducer'

const createEventThunk = (item) => {
  return (dispatch, getState) => {
    const { events } = getState().eventReducer;
    events.push({...item, id: nextId()});
    dispatch(createEvent(events));
  };
}
const deleteEventThunk = (item) => {
  return (dispatch, getState) => {
    const { events } = getState().eventReducer;
    events.filter(it => it.id !== item.id);
    dispatch(deleteEvent(events));
  };
}
