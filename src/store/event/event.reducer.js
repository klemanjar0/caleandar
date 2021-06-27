import { createSlice } from '@reduxjs/toolkit'
const localState = JSON.parse(localStorage.getItem('store')) || {};

const INITIAL_STATE = localState.eventReducer || {
  events: [],
  isLoading: false
};

const eventReducer = createSlice({
  name: 'eventReducer',
  INITIAL_STATE,
  reducers: {
    createEvent(currentState) {
      return {...currentState, events: [...currentState.events, payload.events]};
    },
  },
})

export const { createEvent, } = eventReducer.actions
export default eventReducer.reducer
