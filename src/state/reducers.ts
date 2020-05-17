import { combineReducers } from 'redux'
import auth from './modules/auth/reducers'
import events from './modules/events/reducers'
import user from './modules/user/reducers'
import users from './modules/users/reducers'
import repositories from './modules/repositories/reducers'

const rootReducer = combineReducers({
  events,
  auth,
  user,
  users,
  repositories
})

export type RootStore = ReturnType<typeof rootReducer>

export default rootReducer
