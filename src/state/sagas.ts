import { all } from 'redux-saga/effects'
import eventsWatcherSaga from './modules/events/sagas'
import authWatcherSaga from './modules/auth/sagas'
import usersWatcherSaga from './modules/users/sagas'
import repositoriesWatcherSaga from './modules/repositories/sagas'

export default function* rootSaga() {
  yield all([authWatcherSaga(), eventsWatcherSaga(), usersWatcherSaga(), repositoriesWatcherSaga()])
}
