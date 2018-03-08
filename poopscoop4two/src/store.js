import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from 'redux-logger'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk';
import reducers from "./reducers";

const loggerMiddleware = createLogger()

const middleware = [thunk, loggerMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = composeEnhancers(
  applyMiddleware(...middleware),
)(createStore)

const config = {
  key: 'root',
  storage,
}

const combinedReducer = persistCombineReducers(config, reducers)

const createAppStore = () => {
  let store = configureStore(combinedReducer)
  let persistor = persistStore(store)

  return { persistor, store }
}

export default createAppStore
