import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './index';

export default function configureStore(initialState) {
  const middlewares = [
    thunk,
    logger
  ];
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ));
  store.subscribe(() => {
    const { eventReducer } = store.getState();
    const savedLocalState = {
      eventReducer
    };
    localStorage.setItem('store', JSON.stringify(savedLocalState));
  });
  if (module.hot) {
    module.hot.accept('./index', () => {
      const nextReducer = require('./index').default;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
