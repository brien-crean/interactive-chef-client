import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './app/reducers/rootReducer';
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const middleware = applyMiddleware(thunk);
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
