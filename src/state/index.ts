import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production' && {
    stateSanitizer: state => ({ ...state, locales: 'HIDDEN' })
  }
})
