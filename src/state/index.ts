import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composes = [applyMiddleware(sagaMiddleware)]

const composeEnhancers: typeof compose =
  IS_DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

export const store = createStore(rootReducer, composeEnhancers(...composes))

sagaMiddleware.run(rootSaga)
