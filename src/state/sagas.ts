import { all } from 'redux-saga/effects'
import eventsWatcherSaga from './modules/events/sagas'

export default function* rootSaga() {
  yield all([eventsWatcherSaga()])
}
