import { takeEvery, call } from 'redux-saga/effects'
import { logout } from '@app/utils/features/auth'
import { eventsActions } from './actions'
import { AuthError } from '@app/api/errors'

function* eventsWorkerSaga(action: ReturnType<typeof eventsActions.addEvent>) {
  if (action.payload.type === 'error') {
    console.error(action.payload.message)

    if (action.payload.error instanceof AuthError) {
      yield call(logout)
      return
    }
  }
}

export default function* watcherSaga() {
  yield takeEvery(eventsActions.addEvent.type, eventsWorkerSaga)
}
