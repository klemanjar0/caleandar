import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import {reducer} from './event/event.reducer'

export default combineReducers({
  eventReducer: reducer,
  routing: routerReducer
});
