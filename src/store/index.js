import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import eventReducer from './event/event.reducer'

export default combineReducers({
  eventReducer: eventReducer.reducer,
  routing: routerReducer
});
