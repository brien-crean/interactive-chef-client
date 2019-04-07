import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './app/reducers/rootReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
}

const logger = createLogger({
  // Logger only in Dev mode
  predicate: (getState, action) => __DEV__
});

const middleware = applyMiddleware(thunk, logger);
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
